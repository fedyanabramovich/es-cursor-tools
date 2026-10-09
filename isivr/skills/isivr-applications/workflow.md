# Работа через MCP

## Инструменты

- `isivr_operations` — найти `operationId` по имени или назначению.
- `isivr_call` — выполнить API-операцию с JSON-телом как в Swagger.
- `isivr_get_module` — получить модуль как граф без XML.
- `isivr_save_module` — собрать, разложить, сохранить, перечитать и валидировать граф.
- `isivr_upload_sound` — загрузить аудиофайл и создать звук в приложении.

Поля API чувствительны к регистру. Для модуля используй поля инструмента
`id`, `applicationDataId`, `blocks`, `edges`; в `params` сохраняй серверный регистр.

## Найти приложение и модуль

Опубликованные приложения:

```json
{"operation":"Api_GetAllActiveApplications"}
```

В ответе `AppVersionId` — ID опубликованной версии, `AppId` — стабильный идентификатор
приложения. Для произвольного приложения найди подходящие операции через
`isivr_operations("Application")`.

Получить приложение:

```json
{"operation":"Application_Get","body":{"id":123}}
```

Список используемых модулей версии:

```json
{
  "operation":"Designer_GetModulesSelectData",
  "body":{
    "applicationID":123,
    "onlyUsed":true,
    "useDataIDAsID":false,
    "q":""
  }
}
```

После определения ID прочитай каждый изменяемый модуль через `isivr_get_module`.

## Создать приложение

Минимальный вызов создаёт приложение и корневой модуль:

```json
{
  "operation":"Application_Edit",
  "body":{
    "Application":{
      "ID":0,
      "Name":"Имя приложения",
      "Description":"Назначение приложения",
      "IsRecordApplication":false
    }
  }
}
```

`Name` обязателен и ограничен 50 символами. Из ответа возьми `RootModule.ID`,
`RootModule.ApplicationDataID`, имя и описание. Это единственный модуль приложения:
дополнительные модули не поддерживаются.

Настройки существующего приложения меняй тем же `Application_Edit`, передавая его
`ID` и только подтверждённые поля. Для групп используй
`Groups: [{"GroupID": ...}]`; сначала прочитай текущие группы, чтобы не удалить их
случайно.

## Клонировать стабильное приложение

Стабильная версия недоступна для редактирования. Для безопасной рабочей копии:

```json
{
  "operation":"Application_Clone",
  "body":{
    "ID":123,
    "Name":"Рабочая копия",
    "CloneAllAudioContainers":true
  }
}
```

`ID` бери из прочитанного объекта версии, не угадывай по `DataID`.
`CloneAllAudioContainers: true` создаёт копии всех аудиоконтейнеров; это может быть
дорого и плодить контент. Выбирай `true` только если копия должна независимо менять
аудио. После клонирования работай с ID и `ApplicationDataID` из ответа.

Не клонируй и не изменяй приложение, пока пользователь не подтвердил целевое имя,
если выбор влияет на эксплуатационные данные.

## Сохранить новый граф

Пример аргументов `isivr_save_module`:

```json
{
  "id":321,
  "applicationDataId":111,
  "name":"Корневой",
  "description":"Основной входящий сценарий",
  "layout":"full",
  "variables":[
    {"Type":"string","Name":"clientNumber","Value":""}
  ],
  "blocks":[
    {"key":"start","type":"Start","name":"Начало","params":{}},
    {"key":"answer","type":"AnswerCall","name":"Ответить","params":{}},
    {"key":"end","type":"End","name":"Завершить модуль","params":{}}
  ],
  "edges":[
    {"from":"start","to":"answer","output":""},
    {"from":"answer","to":"end","output":""}
  ]
}
```

`id` обязателен — это `RootModule.ID`. Без него и с новым блоком `Transfer` MCP
отклоняет сохранение: одно приложение — один модуль. Используй API-регистр `Type`,
`Name`, `Value` у переменных, если такой формат вернул существующий модуль.

Общий участок с несколькими входами встраивай под `Marker` с явным `cellId` и веди
в него через `GoTo`, ссылаясь на этот `cellId` в том же сохранении:

```json
{"key":"queue_marker","cellId":400,"type":"Marker","name":"Очередь","params":{}},
{"key":"to_queue","type":"GoTo","name":"Очередь","params":{"MarkerBlockCellID":400}}
```

При полной замене схемы задавай новым блокам `cellId`, которых нет в текущем модуле
(например, начиная со 100). Иначе новая ячейка совпадёт со старой, ещё не удалённой,
и `Designer_Save` вернёт ошибку уникальности `IVRBlock_IX_MenuID_CellID`.

Самостоятельную логику, нужную нескольким сценариям, выноси в отдельное приложение
и вызывай блоком `TransferToApp` (см. blocks.md).

## Изменить граф без потери данных

`isivr_save_module` принимает полную замену содержимого модуля, а не patch.

1. Получи граф.
2. Найди блоки по устойчивому `key`, а не по отображаемому имени.
3. Сохрани `id`, `key`, неизвестные `params`, неизменённые рёбра и переменные.
4. Внеси минимальную правку.
5. Передай весь массив `blocks` и весь массив `edges`.
6. Выбери раскладку:
   - `keep` — параметры, имена, удаление/переподключение;
   - `incremental` — добавлены блоки, существующие позиции должны остаться;
   - `full` — новая схема или явно запрошенная перераскладка.

При редактировании блока не собирай `params` заново по документации. Начни с объекта,
полученного сервером, и замени необходимые поля. Это сохраняет совместимость со
старыми версиями (`OutputsData`, режимы, nullable-поля).

## Ветвящиеся рёбра

Значение `edge.output`:

- единственный выход: `""`;
- `Condition`: `true`, `false` или строковый ID дополнительного условия;
- `DtmfMenu`: `1..9`, `0`, `*`, `#`, `NoInput`, `NoMatch`;
- `InputField`: `""`, `NoInput`, `NoMatch`;
- `CC`: `disconnected`, `fail`;
- `CC_IPN`: `connected`, `enqueued`;
- `SetTimer`: `Before`, `After`;
- `Calendar`, `HolidayPeriod`: `WorkTime`, `OffTime`;
- `ListCheck`: `Contain`, `NoContain`;
- `DataChange`: `Successfully`, `Unsuccessfully`.

Не локализуй эти значения: русские подписи рисуются отдельно.

## Валидация

`isivr_save_module` уже:

1. сохраняет через `Designer_Save`;
2. перечитывает модуль;
3. вызывает `Designer_Validate`;
4. возвращает `validation` и нормализованный `graph`.

После сохранения:

- покажи ошибки/предупреждения пользователю;
- сравни число и типы блоков, рёбра и переменные с планом;
- при ошибке исправь и снова сохрани;
- не переходи к стабильной версии при предупреждениях о структуре.

## Стабилизация и публикация

Стабилизация:

```json
{"operation":"Application_SaveAsStable","body":{"id":123}}
```

Она переводит приложение и используемые модули в стабильное состояние. Выполняй
только по явному запросу после успешной валидации.

Публикация на серверы/кластеры и номера изменяет рабочую маршрутизацию. Сначала найди
актуальные операции через `isivr_operations("Publication")` или
`isivr_operations("Replication")`, покажи пользователю цель публикации и получи
явное подтверждение. Не публикуй автоматически после сохранения.

## Функции

Функции — HTTP(s)-интеграции с внешними системами, общие для всех приложений.
Изучи их до проектирования схемы.

1. Найди операции: `isivr_operations("Function")`. Список для блока —
   `Function_GetFunctionsSelectData`, тело
   `{"applicationID":123,"q":"","onlyUsed":false,"useDataIDAsID":false}`.
   Сохранение функции — `Function_Save`, тело `{"Template":"<JSON функции>","AsVersion":false}`.
   Удаление всех версий — `Function_RemoveFunction`, тело `{"ID":10}`.
2. Найди использование функций в существующих приложениях: блоки `Function` в модулях
   через `isivr_get_module`. Поле `params.FunctionID` указывает версию функции,
   `InputParams` и `OutputParams` — фактическую привязку к переменным.
3. Версии функции:

```json
{
  "operation":"Function_GetFunctionVersionsSelectData",
  "body":{"functionID":10,"applicationID":123,"q":"","onlyUsed":false,"useDataIDAsID":false}
}
```

4. Описание функции в контексте приложения:

```json
{"operation":"Application_GetFunction","body":{"AppId":123,"DataId":10}}
```

Из описания возьми адрес, формат ответа, входы и выходы с типами. Покажи пользователю
список выбранных функций и их роль в сценарии до сохранения модуля.

## Ссылка на схему

Редактор открывается так: `{ISIVR_BASE_URL}/Designer/Index?app={id}`.
`id` — ID версии из `Application_Get` (поле `ID`). Параметр `module` редактор не читает.

## Календари

Этих операций нет в swagger. Они лежат в каталоге MCP и находятся через
`isivr_operations("Calendar")`.

Список рабочих календарей и нерабочих периодов:

```json
{"operation":"Calendar_GetCalendarSelectData","body":{"q":""}}
{"operation":"Calendar_GetHolidayPeriodSelectData","body":{"q":""}}
```

Ответ Select2: `results[].id` и `results[].text`. Часы одного дня:

```json
{"operation":"Api_GetCalendarParamsByDay","query":{"calendarID":106,"dayOfWeek":1}}
```

Нерабочий период целиком: `Calendar_GetHolidayPeriod`, тело `{"id":107}`.
Шаблон календаря: `Calendar_GetCalendar`, тело `{"id":0}`.

Создание и правка — `Calendar_SaveCalendar`. `Type: 1` — рабочие часы,
`Type: 2` — даты. Тик: 10 000 000 = 1 секунда. 06:00 — `216000000000`,
20:00 — `720000000000`, конец суток — `864000000000`. Интервал включающий.

Рабочие часы, каждый день 06:00–20:00. Имена строк уникальны, день недели 0–6:

```json
{
  "operation": "Calendar_SaveCalendar",
  "body": {
    "ID": 0,
    "Name": "Линия 06:00-20:00",
    "Timezone": "Russian Standard Time",
    "Type": 1,
    "UtcOffsetTicks": 0,
    "Params": [
      {"ID": 0, "Name": "вс", "DayOfWeek": 0, "FromTicks": 216000000000, "ToTicks": 720000000000}
    ]
  }
}
```

Нерабочий период. У каждой строки есть `Date`, дня недели нет:

```json
{
  "operation": "Calendar_SaveCalendar",
  "body": {
    "ID": 0,
    "Name": "Сокращённые дни",
    "Timezone": "Russian Standard Time",
    "Type": 2,
    "UtcOffsetTicks": 0,
    "Params": [
      {"ID": 0, "Name": "28 апреля 2026", "Date": "2026-04-28T00:00:00", "FromTicks": 0, "ToTicks": 576000000000}
    ]
  }
}
```

Одинаковое `Name` у двух строк даёт ошибку «Одинаковые параметры не допускается».
После сохранения сверь `Date`, `FromTicks` и `ToTicks` повторным чтением:
сервер может записать в `Name` строки имя календаря. В блок клади `CalendarID`
из ответа. Чужой круглосуточный календарь не подставляй под узкое окно.
Удаление — `Calendar_DeleteCalendar`, только по явной просьбе.

## Зависимые ресурсы

Для звуков, функций, динамических категорий, списков, календарей и таблиц маршрутизации:

1. Найди read/list-операцию через `isivr_operations`.
2. Переиспользуй существующий ресурс, если он соответствует задаче.
3. Перед созданием или изменением покажи пользователю план и область влияния.
4. Сохрани возвращённый ID в `params` блока.
5. Перечитай ресурс и модуль.

## Звуки

Звук создаётся через `isivr_upload_sound`: инструмент загружает локальный файл
(сервер конвертирует его в WAV) и создаёт звук в приложении. В блоках
(`Sounds`, `SoundGroupID`, `NoMatchSound.Custom` и т.д.) указывай **`DataID`**
из ответа, а не `ID`. В `DtmfMenu.Sounds` это строка: `["534"]`.

Если готового файла нет, сгенерируй TTS локально (macOS):

```bash
say -v Milena -o /tmp/greeting.aiff "Текст приветствия"
afconvert -f WAVE -d LEI16@8000 -c 1 /tmp/greeting.aiff /tmp/greeting.wav
```

Имя звука должно быть уникальным в приложении. Не подставляй фиктивный ID звука.

## Навыки и маршруты IPN

Навык проверяй через `Data_GetSkillList` (`{"q":"90000"}`), маршрут — через
`Data_GetRouteList` (`{"skill":"90000","q":"","ignoreEmptySkill":false}`).
Без `skill` список маршрутов пуст. В опубликованных приложениях маршрут часто
равен навыку и задаётся вручную:
`SkillRoute: {IsManualSkill:true, IsCustomSkill:false, SkillValue:"90000", IsManualRoute:true, IsCustomRoute:false, RouteValue:"90000"}`.

Звуки, категории параметров, функции и таблицы маршрутизации, которых нет в swagger,
тоже вызываются через `isivr_call`. Ищи их так: `isivr_operations("Audio")`,
`isivr_operations("DynamicParams")`, `isivr_operations("Function")`,
`isivr_operations("RoutingTable")`. Загрузка файла звука остаётся на
`isivr_upload_sound`: операции с телом-файлом этот вызов не передаёт.
