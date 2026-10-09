const SCALE = 1.2;

const BUTTONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '#'];

function size(width, height) {
  return { width: Math.round(width * SCALE), height: Math.round(height * SCALE) };
}

function look(color, shape) {
  return shape ? `${color};shape=${shape};` : `${color};`;
}

function block(type, title, width, height, color, shape, extras = {}) {
  return {
    type,
    title,
    ...size(width, height),
    style: look(color, shape),
    input: extras.input !== false,
    outputs: extras.outputs || [{ value: null, kind: 'down', x: 0.5 }],
    defaults: extras.defaults || {},
    log: extras.log || false,
    ports: extras.ports || null,
  };
}

function downPair(left, right, leftLabel, rightLabel) {
  return [
    { value: left, kind: 'down', x: 0, label: leftLabel || left },
    { value: right, kind: 'down', x: 1, label: rightLabel || right },
  ];
}

const catalog = {
  Start: block('Start', 'Начало', 200, 60, 'customPink', 'terminator', { input: false }),
  End: block('End', 'Конец', 200, 60, 'customPink', 'terminator', { outputs: [] }),
  EndScript: block('EndScript', 'Сброс', 200, 60, 'customPink', 'terminator', { outputs: [] }),
  EndCall: block('EndCall', 'Сброс', 240, 60, 'baseStyle', 'terminator', {
    outputs: [],
    defaults: { Code: 'NORMAL_CLEARING' },
  }),
  InfinityWait: block('InfinityWait', 'Бесконечное ожидание', 380, 60, 'customPink', 'terminator', { outputs: [] }),
  GoTo: block('GoTo', 'Переход к метке', 240, 60, 'customOrange', 'terminator', {
    outputs: [],
    defaults: { MarkerBlockCellID: null },
  }),
  Marker: block('Marker', 'Метка', 120, 60, 'customOrange', 'terminator', { input: false }),
  Sound: block('Sound', 'Звук', 200, 80, 'customGreen', 'trapeze', {
    defaults: {
      SoundGroupID: null,
      Async: false,
      PlayType: 'Repeat',
      RepeatCount: 1,
      Duration: 100,
      TermDigits: { IsGlobal: true, Custom: '' },
    },
  }),
  Function: block('Function', 'Функция', 200, 80, 'customGreen', 'function', {
    defaults: { FunctionID: null, InputParams: [], OutputParams: [] },
  }),
  Record: block('Record', 'Запись звука', 200, 80, 'customGreen', 'trapeze', {
    defaults: {
      RecordDuration: 30,
      AudioBeforeRecord: null,
      AudioAfterRecord: null,
      PathVariable: null,
      TermDigits: { IsGlobal: true, Custom: '' },
    },
  }),
  StopChannel: block('StopChannel', 'Стоп-канал', 200, 80, 'customGreen'),
  ResetTimer: block('ResetTimer', 'Сброс таймера', 200, 80, 'customGreen', null, {
    defaults: { TimerID: 0, ResetType: 'ID', TimerBlockCellID: null },
  }),
  AnswerCall: block('AnswerCall', 'Ответить', 200, 80, 'customOrange'),
  Transfer: block('Transfer', 'Переход к модулю', 320, 120, 'customOrange', 'transfer', {
    defaults: { ModuleID: null },
  }),
  TransferToApp: block('TransferToApp', 'Перевод на приложение', 300, 80, 'customOrange', 'ivrRectangle', {
    defaults: {
      ApplicationDataID: null,
      TransmittedParams: [],
      ReturnedParams: [],
      TransferControl: true,
      ContinueIfError: true,
    },
  }),
  PlayEWT: block('PlayEWT', 'Озвучить EWT', 200, 80, 'customBlue', 'playEWT'),
  DefRouting: block('DefRouting', 'Маршрутизация', 380, 80, 'customOrange', 'arrowRectangle', {
    defaults: {
      DefNumberVariable: 'DNIS',
      SkillVariable: 'DFR_Skill',
      RouteVariable: 'DFR_Route',
      EwtAppVariable: 'DFR_EwtApp',
      RoutingTableID: null,
    },
  }),
  DynamicParams: block('DynamicParams', 'Динамические параметры', 380, 80, 'customPink', null, {
    defaults: { CategoryID: null },
  }),
  SIPHeader: block('SIPHeader', 'Получить SIP-заголовок', 300, 80, 'customBlue', null, {
    defaults: { HeaderName: '', ResultVariable: '' },
  }),
  SetTimer: block('SetTimer', 'Установка таймера', 350, 80, 'baseStyle', null, {
    outputs: downPair('Before', 'After', 'До', 'После'),
    defaults: { TimerID: 0, TimeOut: 100, Count: 1, SkipOutputAfter: 0 },
  }),
  Calendar: block('Calendar', 'Календарь', 200, 80, 'baseStyle', null, {
    outputs: downPair('WorkTime', 'OffTime', 'Рабочее время', 'Нерабочее время'),
    defaults: { CalendarID: null },
  }),
  HolidayPeriod: block('HolidayPeriod', 'Нерабочее время', 200, 80, 'baseStyle', null, {
    outputs: downPair('WorkTime', 'OffTime', 'Рабочее время', 'Нерабочее время'),
    defaults: { CalendarID: null },
  }),
  ListCheck: block('ListCheck', 'Проверка списка', 200, 80, 'baseStyle', null, {
    outputs: downPair('Contain', 'NoContain', 'Содержится', 'Не содержится'),
    defaults: { KeyToCheck: { IsManual: true, Value: '' }, ListID: null, ResultVariable: null },
  }),
  DataChange: block('DataChange', 'Изменение данных', 300, 80, 'customBlue', null, {
    outputs: downPair('Successfully', 'Unsuccessfully', 'Успешно', 'Неуспешно'),
    defaults: { CategoryID: null, Params: [] },
  }),
  InputField: block('InputField', 'Ввод данных', 200, 80, 'baseStyle', 'trapeze', {
    outputs: [
      { value: null, kind: 'down', x: 0.5 },
      { value: 'NoInput', kind: 'down', x: 0, label: 'Таймаут' },
      { value: 'NoMatch', kind: 'down', x: 0.75, label: 'Ошибка' },
    ],
    defaults: {
      SoundGroupID: null,
      MinDigits: 1,
      MaxDigits: 1,
      ResultVariable: '',
      ValidationMode: 0,
      RegularExpression: null,
      Range: null,
      InputLockoutTime: { IsGlobal: true, Custom: '' },
      NoMatchSound: { IsGlobal: true, Custom: '' },
      NoInputSound: { IsGlobal: true, Custom: '' },
      NoMatchCount: { IsGlobal: true, Custom: '' },
      NoInputCount: { IsGlobal: true, Custom: '' },
      MaxTime: { IsGlobal: true, Custom: '' },
      MaxIDDTime: { IsGlobal: true, Custom: '' },
    },
  }),
  CC: block('CC', 'КЦ', 100, 120, 'customOrange', 'ivrActor', {
    outputs: [
      { value: 'disconnected', kind: 'right', label: 'Отключен' },
      { value: 'fail', kind: 'down', x: 0.5, label: 'Ошибка' },
    ],
    defaults: {
      ANumber: { IsManual: false, Value: 'ANI' },
      BNumber: { IsManual: true, Value: '' },
      Duration: 30,
      UUI: { IsManual: false, Value: 'DNIS' },
      DirectionType: '',
      HandleCallRemoteMedia: true,
      OutputsData: [],
    },
  }),
  CC_IPN: block('CC_IPN', 'КЦ IPN', 100, 120, 'customOrange', 'ivrActor', {
    outputs: [
      {
        value: 'connected',
        kind: 'left',
        x: 0,
        y: 1,
        label: 'Отвечен',
        styleExtra: 'labelPosition=right;align=top;spacingLeft=-150;spacingBottom=36;',
      },
      { value: 'enqueued', kind: 'right', label: 'В очереди' },
    ],
    defaults: {
      ANumber: { IsManual: true, Value: '' },
      BNumber: { IsManual: true, Value: '' },
      SkillRoute: {
        IsManualSkill: true,
        IsCustomSkill: false,
        SkillValue: '',
        IsManualRoute: true,
        IsCustomRoute: false,
        RouteValue: '',
      },
      UUI: { IsManual: true, Value: '' },
      PreferredAgentActive: { IsManual: true, Value: 'false' },
      AgentLogin: { IsManual: true, Value: '' },
      AgentTimeout: { IsManual: true, Value: '' },
      StopRecordConnectingAgent: true,
      HandleCallRemoteMedia: false,
    },
  }),
  DtmfMenu: block('DtmfMenu', 'Голосовое меню', 380, 80, 'customBlue', 'trapeze', {
    log: true,
    ports: 'dtmf',
    defaults: {
      SoundGroupID: null,
      Sounds: [],
      OutputsData: BUTTONS.map((id) => ({ ID: id, Value: false })),
      InputLockoutTime: { IsGlobal: true, Custom: '' },
      NoMatchSound: { IsGlobal: true, Custom: '' },
      NoInputSound: { IsGlobal: true, Custom: '' },
      NoMatchCount: { IsGlobal: true, Custom: '' },
      NoInputCount: { IsGlobal: true, Custom: '' },
      MaxTime: { IsGlobal: true, Custom: '' },
      GoBackButton: '#',
    },
  }),
  Condition: block('Condition', 'Условие', 200, 120, 'customBlue', 'rhombus', {
    ports: 'condition',
    defaults: {
      Condition: { Name: '', ConditionStruct: null, ConditionText: null },
      AdditionalConditions: [],
    },
  }),
};

const TYPES = Object.keys(catalog);

function blockSpec(type) {
  const spec = catalog[type];
  if (!spec) throw new Error(`Неизвестный тип блока: ${type}`);
  return spec;
}

function fittedWidth(name, minimum) {
  return Math.max(minimum, 48 + 13 * String(name || '').length);
}

module.exports = { BUTTONS, catalog, TYPES, blockSpec, fittedWidth };
