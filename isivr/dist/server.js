var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// env.js
var require_env = __commonJS({
  "env.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    function loadEnv2() {
      const file = process.env.ISIVR_MCP_ENV || path.join(__dirname, "..", "isivr-mcp.env");
      if (!fs.existsSync(file)) return;
      fs.readFileSync(file, "utf8").split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const eq = trimmed.indexOf("=");
        if (eq < 0) return;
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        if (process.env[key] == null) process.env[key] = value;
      });
    }
    module2.exports = { loadEnv: loadEnv2 };
  }
});

// openapi/operations.json
var require_operations = __commonJS({
  "openapi/operations.json"(exports2, module2) {
    module2.exports = [
      {
        id: "Access_GetUser",
        method: "POST",
        path: "Access/GetUser",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 (0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F).",
        query: [],
        body: true
      },
      {
        id: "Access_SaveUser",
        method: "POST",
        path: "Access/SaveUser",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F.",
        query: [],
        body: true
      },
      {
        id: "Access_DeleteUser",
        method: "POST",
        path: "Access/DeleteUser",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Access_GetRole",
        method: "POST",
        path: "Access/GetRole",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u043E\u043B\u044C \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 (0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F).",
        query: [],
        body: true
      },
      {
        id: "Access_SaveRole",
        method: "POST",
        path: "Access/SaveRole",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0440\u043E\u043B\u044C.",
        query: [],
        body: true
      },
      {
        id: "Access_DeleteRole",
        method: "POST",
        path: "Access/DeleteRole",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u043E\u043B\u044C \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Access_GetRolesSelectData",
        method: "POST",
        path: "Access/GetRolesSelectData",
        summary: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0440\u043E\u043B\u0438: \u0441\u043F\u0438\u0441\u043E\u043A (id / name) \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 Select2.",
        query: [],
        body: false
      },
      {
        id: "Access_Logout",
        method: "GET",
        path: "Access/Logout",
        summary: "\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0440\u0435\u0434\u0438\u0440\u0435\u043A\u0442 \u043D\u0430 \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440).",
        query: [],
        body: false
      },
      {
        id: "Access_KeepLogin",
        method: "POST",
        path: "Access/KeepLogin",
        summary: "\u041F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u0438 (\u043F\u0443\u0441\u0442\u043E\u0439 200 OK).",
        query: [],
        body: false
      },
      {
        id: "Api_GetAppNumbersMapping",
        method: "GET",
        path: "Api/GetAppNumbersMapping",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0430\u043F\u043F\u0438\u043D\u0433 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u043D\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0445\u043E\u0441\u0442\u0430.",
        query: [
          "host"
        ],
        body: false
      },
      {
        id: "Api_GetRoutingsByNumber",
        method: "GET",
        path: "Api/GetRoutingsByNumber",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u043E \u043D\u043E\u043C\u0435\u0440\u0443 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u044B.",
        query: [
          "tableID",
          "defNumber"
        ],
        body: false
      },
      {
        id: "Api_GetCalendarOffset",
        method: "GET",
        path: "Api/GetCalendarOffset",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F \u0432 \u0442\u0438\u043A\u0430\u0445 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F.",
        query: [
          "calendarID"
        ],
        body: false
      },
      {
        id: "Api_GetCalendarParamsByDay",
        method: "GET",
        path: "Api/GetCalendarParamsByDay",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F.",
        query: [
          "calendarID",
          "dayOfWeek"
        ],
        body: false
      },
      {
        id: "Api_GetHolidayParamsByDay",
        method: "GET",
        path: "Api/GetHolidayParamsByDay",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435\u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.",
        query: [
          "calendarID",
          "date"
        ],
        body: false
      },
      {
        id: "Api_GetDynamicListItemValue",
        method: "GET",
        path: "Api/GetDynamicListItemValue",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438 \u0438\u043C\u0435\u043D\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430.",
        query: [
          "listID",
          "itemName"
        ],
        body: false
      },
      {
        id: "Api_SetDynamicParam",
        method: "POST",
        path: "Api/SetDynamicParam",
        summary: "\u0418\u0437\u043C\u0435\u043D\u044F\u0435\u0442 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B",
        query: [],
        body: true
      },
      {
        id: "Api_GetAllActiveApplications",
        method: "GET",
        path: "Api/GetAllActiveApplications",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0441\u0435\u0445 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [
          "groups"
        ],
        body: false
      },
      {
        id: "Api_GetTree",
        method: "GET",
        path: "Api/GetTree",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0435\u0440\u0435\u0432\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0431\u043B\u043E\u043A\u0438 \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435) \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        query: [
          "appId"
        ],
        body: false
      },
      {
        id: "Api_GetDynamicAudioGroups",
        method: "GET",
        path: "Api/GetDynamicAudioGroups",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0432\u0443\u043A\u043E\u0432",
        query: [
          "appId"
        ],
        body: false
      },
      {
        id: "Application_Edit",
        method: "POST",
        path: "Application/Edit",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        query: [],
        body: true
      },
      {
        id: "Application_Clone",
        method: "POST",
        path: "Application/Clone",
        summary: "\u041A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.",
        query: [],
        body: true
      },
      {
        id: "Application_Get",
        method: "POST",
        path: "Application/Get",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Application_GetLastVersion",
        method: "POST",
        path: "Application/GetLastVersion",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Application_Delete",
        method: "POST",
        path: "Application/Delete",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Application_DeleteAllVersions",
        method: "POST",
        path: "Application/DeleteAllVersions",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Application_GetSelectData",
        method: "POST",
        path: "Application/GetSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (\u0444\u043E\u0440\u043C\u0430\u0442 Select2).",
        query: [],
        body: true
      },
      {
        id: "Application_GetVersionsSelectData",
        method: "POST",
        path: "Application/GetVersionsSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u0435\u0440\u0441\u0438\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (\u0444\u043E\u0440\u043C\u0430\u0442 Select2).",
        query: [],
        body: true
      },
      {
        id: "Application_SaveAll",
        method: "POST",
        path: "Application/SaveAll",
        summary: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0441\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 (\u043C\u0435\u043D\u044E) \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        query: [],
        body: true
      },
      {
        id: "Application_SaveAsStable",
        method: "POST",
        path: "Application/SaveAsStable",
        summary: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043A\u0430\u043A \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u0443\u044E.",
        query: [],
        body: true
      },
      {
        id: "Application_GetModule",
        method: "POST",
        path: "Application/GetModule",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C (\u043C\u0435\u043D\u044E) \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E DataId \u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        query: [],
        body: true
      },
      {
        id: "Application_GetFunction",
        method: "POST",
        path: "Application/GetFunction",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E DataId \u0438 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        query: [],
        body: true
      },
      {
        id: "Application_GetApplicationTree",
        method: "POST",
        path: "Application/GetApplicationTree",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0437\u043B\u044B \u0434\u0435\u0440\u0435\u0432\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [
          "type",
          "id",
          "appID",
          "offset",
          "q",
          "take"
        ],
        body: false
      },
      {
        id: "Application_GetAppList",
        method: "POST",
        path: "Designer/GetAppList",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Application_FindBlocks",
        method: "POST",
        path: "Designer/FindBlocks",
        summary: "",
        query: [
          "appID",
          "q"
        ],
        body: false
      },
      {
        id: "Application_List",
        method: "GET",
        path: "Application/List",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [],
        body: false
      },
      {
        id: "ApplicationGroup_GetGroup",
        method: "POST",
        path: "Application/GetGroup",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 (0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F).",
        query: [],
        body: true
      },
      {
        id: "ApplicationGroup_EditGroup",
        method: "POST",
        path: "Application/EditGroup",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [],
        body: true
      },
      {
        id: "ApplicationGroup_DeleteGroup",
        method: "POST",
        path: "Application/DeleteGroup",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "ApplicationGroup_GetGroupsSelectData",
        method: "POST",
        path: "Application/GetGroupsSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u0433\u0440\u0443\u043F\u043F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 (\u0444\u043E\u0440\u043C\u0430\u0442 Select2).",
        query: [],
        body: true
      },
      {
        id: "Data_GetSkillList",
        method: "POST",
        path: "Designer/GetSkillList",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Data_GetRouteList",
        method: "POST",
        path: "Designer/GetRouteList",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Data_GetDirectionTypeList",
        method: "POST",
        path: "Designer/GetDirectionTypeList",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Designer_Save",
        method: "POST",
        path: "Designer/Save",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C.",
        query: [],
        body: true
      },
      {
        id: "Designer_Get",
        method: "POST",
        path: "Designer/Get",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Designer_Delete",
        method: "POST",
        path: "Designer/Delete",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "Designer_DeleteAllVersions",
        method: "POST",
        path: "Designer/DeleteAllVersions",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043C\u043E\u0434\u0443\u043B\u044F.",
        query: [],
        body: true
      },
      {
        id: "Designer_GetVariablesList",
        method: "POST",
        path: "Designer/GetVariablesList",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F.",
        query: [],
        body: true
      },
      {
        id: "Designer_GetVariables",
        method: "POST",
        path: "Designer/GetVariables",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F.",
        query: [],
        body: true
      },
      {
        id: "Designer_Validate",
        method: "POST",
        path: "Designer/Validate",
        summary: "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044E \u043C\u043E\u0434\u0443\u043B\u044F.",
        query: [],
        body: true
      },
      {
        id: "Designer_GetModulesSelectData",
        method: "POST",
        path: "Designer/GetModulesSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 (Select2).",
        query: [],
        body: true
      },
      {
        id: "Designer_GetModuleVersionsSelectData",
        method: "POST",
        path: "Designer/GetModuleVersionsSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u0435\u0440\u0441\u0438\u0439 \u043C\u043E\u0434\u0443\u043B\u044F (Select2).",
        query: [],
        body: true
      },
      {
        id: "Designer_Ping",
        method: "GET",
        path: "Designer/Ping",
        summary: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0430.",
        query: [],
        body: false
      },
      {
        id: "DynamicLists_Get",
        method: "POST",
        path: "DynamicLists/Get",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 (0 - \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F).",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_GetListSelectData",
        method: "POST",
        path: "DynamicLists/GetListSelectData",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u043F\u0438\u0441\u043A\u043E\u0432 (\u0444\u043E\u0440\u043C\u0430\u0442 Select2).",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_Save",
        method: "POST",
        path: "DynamicLists/Save",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_Delete",
        method: "POST",
        path: "DynamicLists/Delete",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_CrearList",
        method: "POST",
        path: "DynamicLists/CrearList",
        summary: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_GetItem",
        method: "POST",
        path: "DynamicLists/GetItem",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443 (0 - \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F).",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_SaveItem",
        method: "POST",
        path: "DynamicLists/SaveItem",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_MoveItems",
        method: "POST",
        path: "DynamicLists/MoveItems",
        summary: "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_DeleteItem",
        method: "POST",
        path: "DynamicLists/DeleteItem",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_DeleteListItems",
        method: "POST",
        path: "DynamicLists/DeleteListItems",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_GetImportNumbersItemsTemplate",
        method: "GET",
        path: "DynamicLists/GetImportNumbersItemsTemplate",
        summary: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D Excel \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430 \u043D\u043E\u043C\u0435\u0440\u043E\u0432.",
        query: [],
        body: false
      },
      {
        id: "DynamicLists_GetImportKeyValueItemsTemplate",
        method: "GET",
        path: "DynamicLists/GetImportKeyValueItemsTemplate",
        summary: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D Excel \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430 \u043A\u043B\u044E\u0447\u0435\u0439 \u0438 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439.",
        query: [],
        body: false
      },
      {
        id: "DynamicLists_DownloadNumbersItems",
        method: "GET",
        path: "DynamicLists/DownloadNumbersItems",
        summary: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043F\u0438\u0441\u043A\u0430 \u043D\u043E\u043C\u0435\u0440\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 Excel.",
        query: [
          "listID",
          "GmtOffset"
        ],
        body: false
      },
      {
        id: "DynamicLists_DownloadKeyValueItems",
        method: "GET",
        path: "DynamicLists/DownloadKeyValueItems",
        summary: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u043B\u044E\u0447-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 Excel.",
        query: [
          "listID",
          "GmtOffset"
        ],
        body: false
      },
      {
        id: "DynamicLists_ImportDynamicListItems",
        method: "POST",
        path: "DynamicLists/ImportDynamicListItems",
        summary: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u0437 \u0444\u0430\u0439\u043B\u0430.",
        query: [
          "Name",
          "Type",
          "Items",
          "IsDeleted",
          "DeleteDT",
          "DeletedBy"
        ],
        body: false
      },
      {
        id: "DynamicLists_GetBlackList",
        method: "GET",
        path: "DynamicLists/GetBlackList",
        summary: '\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u0442\u0438\u043F\u0430 "\u0447\u0435\u0440\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A".',
        query: [],
        body: false
      },
      {
        id: "DynamicLists_GetWhiteList",
        method: "GET",
        path: "DynamicLists/GetWhiteList",
        summary: '\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0438 \u0442\u0438\u043F\u0430 "\u0431\u0435\u043B\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A".',
        query: [],
        body: false
      },
      {
        id: "DynamicLists_GetAutoAdd",
        method: "POST",
        path: "DynamicLists/GetAutoAdd",
        summary: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0438.",
        query: [],
        body: true
      },
      {
        id: "DynamicLists_SaveAutoAdd",
        method: "POST",
        path: "DynamicLists/SaveAutoAdd",
        summary: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u0432\u0442\u043E\u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0438.",
        query: [],
        body: true
      },
      {
        id: "File_Get",
        method: "GET",
        path: "api/file/{id}",
        summary: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0444\u0430\u0439\u043B\u0435 \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: false
      },
      {
        id: "File_Add",
        method: "PUT",
        path: "api/file/add",
        summary: "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u0444\u0430\u0439\u043B.",
        query: [],
        body: false
      },
      {
        id: "File_Delete",
        method: "DELETE",
        path: "api/file/delete/{id}",
        summary: "\u0423\u0434\u0430\u043B\u044F\u0435\u0442 \u0444\u0430\u0439\u043B \u043F\u043E \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u0443.",
        query: [],
        body: false
      },
      {
        id: "Function_GetFunctionVersionsSelectData",
        method: "POST",
        path: "Designer/GetFunctionVersionsSelectData",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_GetTaskItemStatusSelectData",
        method: "POST",
        path: "Server/GetTaskItemStatusSelectData",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_GetTasksSelectData",
        method: "POST",
        path: "Server/GetTasksSelectData",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_CreatePublishTask",
        method: "POST",
        path: "Server/CreatePublishTask",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_CheckPublishTaskConflicts",
        method: "POST",
        path: "Server/CheckPublishTaskConflicts",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_RollbackTask",
        method: "POST",
        path: "Server/RollbackTask",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_RepeatTask",
        method: "POST",
        path: "Server/RepeatTask",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Publish_GetPublishTaskItemsTree",
        method: "POST",
        path: "Server/GetPublishTaskItemsTree",
        summary: "",
        query: [
          "OrderCol",
          "OrderIsAsc",
          "Mode",
          "GroupingMode",
          "ClusterID"
        ],
        body: false
      },
      {
        id: "Publish_SetPublishTaskItemStatus",
        method: "POST",
        path: "Server/SetPublishTaskItemStatus",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Server_Get",
        method: "POST",
        path: "Server/Get",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Server_Save",
        method: "POST",
        path: "Server/Save",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Server_GetServers",
        method: "POST",
        path: "Server/GetServers",
        summary: "",
        query: [
          "groupID",
          "q"
        ],
        body: false
      },
      {
        id: "Server_GetNumbers",
        method: "POST",
        path: "Server/GetNumbers",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "Server_DeleteServer",
        method: "POST",
        path: "Server/DeleteServer",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_GetCluster",
        method: "POST",
        path: "Server/GetCluster",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_GetClustersSelectData",
        method: "POST",
        path: "Server/GetClustersSelectData",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_SaveCluster",
        method: "POST",
        path: "Server/SaveCluster",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_CheckAssignServers",
        method: "POST",
        path: "Server/CheckAssignServers",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_GetClusterNumbers",
        method: "POST",
        path: "Server/GetClusterNumbers",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerCluster_DeleteCluster",
        method: "POST",
        path: "Server/DeleteCluster",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerGroup_GetGroup",
        method: "POST",
        path: "Server/GetGroup",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerGroup_GetGroupsSelectData",
        method: "POST",
        path: "Server/GetGroupsSelectData",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerGroup_SaveGroup",
        method: "POST",
        path: "Server/SaveGroup",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerGroup_DeleteServerGroup",
        method: "POST",
        path: "Server/DeleteServerGroup",
        summary: "",
        query: [],
        body: true
      },
      {
        id: "ServerGroup_GetImportServerGroupTemplate",
        method: "GET",
        path: "Server/GetImportServerGroupTemplate",
        summary: "",
        query: [],
        body: false
      },
      {
        id: "ServerGroup_ImportServerGroup",
        method: "POST",
        path: "Server/ImportServerGroup",
        summary: "",
        query: [
          "FileName",
          "ContentType",
          "ContentLength",
          "InputStream.CanRead",
          "InputStream.CanWrite"
        ],
        body: false
      }
    ];
  }
});

// openapi/extra-operations.json
var require_extra_operations = __commonJS({
  "openapi/extra-operations.json"(exports2, module2) {
    module2.exports = [
      {
        id: "Calendar_GetCalendar",
        method: "POST",
        path: "Calendar/GetCalendar",
        summary: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0447\u0430\u0441\u043E\u0432 \u043F\u043E id. Type = 1. \u0422\u0435\u043B\u043E {id}. id = 0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D.",
        query: [],
        body: true
      },
      {
        id: "Calendar_SaveCalendar",
        method: "POST",
        path: "Calendar/SaveCalendar",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C (Type 1) \u043B\u0438\u0431\u043E \u043D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 (Type 2).",
        query: [],
        body: true
      },
      {
        id: "Calendar_DeleteCalendar",
        method: "POST",
        path: "Calendar/DeleteCalendar",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C \u0438\u043B\u0438 \u043D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0435\u0440\u0438\u043E\u0434. \u0422\u0435\u043B\u043E {id}.",
        query: [],
        body: true
      },
      {
        id: "Calendar_GetHolidayPeriod",
        method: "POST",
        path: "Calendar/GetHolidayPeriod",
        summary: "\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u043F\u043E id. Type = 2. \u0422\u0435\u043B\u043E {id}. id = 0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D.",
        query: [],
        body: true
      },
      {
        id: "Calendar_GetCalendarSelectData",
        method: "POST",
        path: "Calendar/GetCalendarSelectData",
        summary: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0435\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0447\u0430\u0441\u043E\u0432, Select2. \u0422\u0435\u043B\u043E {q}.",
        query: [],
        body: true
      },
      {
        id: "Calendar_GetHolidayPeriodSelectData",
        method: "POST",
        path: "Calendar/GetHolidayPeriodSelectData",
        summary: "\u0421\u043F\u0438\u0441\u043E\u043A \u043D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0435\u0440\u0438\u043E\u0434\u043E\u0432, Select2. \u0422\u0435\u043B\u043E {q}.",
        query: [],
        body: true
      },
      {
        id: "Calendar_GetTimezones",
        method: "POST",
        path: "Calendar/GetTimezones",
        summary: "\u0421\u043F\u0438\u0441\u043E\u043A \u0447\u0430\u0441\u043E\u0432\u044B\u0445 \u043F\u043E\u044F\u0441\u043E\u0432, Select2. \u0422\u0435\u043B\u0430 \u043D\u0435\u0442. \u0414\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0435\u0439 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439 Russian Standard Time.",
        query: [],
        body: false
      },
      {
        id: "Calendar_GetCalendarTree",
        method: "POST",
        path: "Calendar/GetCalendarTree",
        summary: "\u0414\u0435\u0440\u0435\u0432\u043E \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0435\u0439 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0430. \u0422\u0435\u043B\u043E \u2014 \u0444\u0438\u043B\u044C\u0442\u0440 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0430 \u0438 offset.",
        query: [],
        body: true
      },
      {
        id: "Audio_GetGroup",
        method: "POST",
        path: "Audio/GetGroup",
        summary: "\u0417\u0432\u0443\u043A \u043F\u043E DataID. \u0422\u0435\u043B\u043E {GroupDataID, ContainerID, AllowAutoImportFromDefault, Force}.",
        query: [],
        body: true
      },
      {
        id: "Audio_EditGroup",
        method: "POST",
        path: "Audio/EditGroup",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0432\u0443\u043A\u0430. \u0422\u0435\u043B\u043E \u2014 \u043E\u0431\u044A\u0435\u043A\u0442 \u0437\u0432\u0443\u043A\u0430. \u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 isivr_upload_sound.",
        query: [],
        body: true
      },
      {
        id: "Audio_GetSoundGroupTree",
        method: "POST",
        path: "Audio/GetSoundGroupTree",
        summary: "\u0414\u0435\u0440\u0435\u0432\u043E \u0437\u0432\u0443\u043A\u043E\u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u0422\u0435\u043B\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 appID, filter, containerID, offset, q.",
        query: [],
        body: true
      },
      {
        id: "Audio_GetContainerSelectData",
        method: "POST",
        path: "Audio/GetContainerSelectData",
        summary: "\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0430\u0443\u0434\u0438\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, Select2. \u0422\u0435\u043B\u043E {appID, q}. appID \u2014 ID \u0438\u043B\u0438 DataID \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.",
        query: [],
        body: true
      },
      {
        id: "Audio_GetGroupsSelectData",
        method: "POST",
        path: "Audio/GetGroupsSelectData",
        summary: "\u0417\u0432\u0443\u043A\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0432 \u0431\u043B\u043E\u043A\u0435, Select2. \u0422\u0435\u043B\u043E {ApplicationDataID, Q}.",
        query: [],
        body: true
      },
      {
        id: "Audio_GetGroupsForImport",
        method: "POST",
        path: "Audio/GetGroupsForImport",
        summary: "\u0417\u0432\u0443\u043A\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435\u0442 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0435. Query: applicationDataID, containerID, q.",
        query: ["applicationDataID", "containerID", "q"],
        body: false
      },
      {
        id: "Audio_GetContainerParams",
        method: "POST",
        path: "Audio/GetContainerParams",
        summary: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0430\u0443\u0434\u0438\u043E\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430. Query: id, appDataID.",
        query: ["id", "appDataID"],
        body: false
      },
      {
        id: "Audio_SaveContainerParams",
        method: "POST",
        path: "Audio/SaveContainerParams",
        summary: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u043E\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440. \u0422\u0435\u043B\u043E \u2014 \u043E\u0431\u044A\u0435\u043A\u0442 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430.",
        query: [],
        body: true
      },
      {
        id: "Audio_DeleteContainer",
        method: "POST",
        path: "Audio/DeleteContainer",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u043E\u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440. Query: id.",
        query: ["id"],
        body: false
      },
      {
        id: "Audio_RemoveSoundGroup",
        method: "POST",
        path: "Audio/RemoveSoundGroup",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0432\u0443\u043A. \u0422\u0435\u043B\u043E {id}.",
        query: [],
        body: true
      },
      {
        id: "Audio_ImportAudio",
        method: "POST",
        path: "Audio/ImportAudio",
        summary: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0432\u0443\u043A \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440. Query: groupID, containerID.",
        query: ["groupID", "containerID"],
        body: false
      },
      {
        id: "Audio_ImportAudioToApp",
        method: "POST",
        path: "Audio/ImportAudioToApp",
        summary: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0432\u0443\u043A\u0438 \u043C\u0435\u0436\u0434\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438. Query: fromAppDataID, toAppDataID, groupDataIDs (\u043C\u0430\u0441\u0441\u0438\u0432).",
        query: ["fromAppDataID", "toAppDataID", "groupDataIDs"],
        body: false
      },
      {
        id: "DynamicParams_GetCategory",
        method: "POST",
        path: "DynamicParams/GetCategory",
        summary: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u043E id. \u0422\u0435\u043B\u043E {id}. id = 0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D.",
        query: [],
        body: true
      },
      {
        id: "DynamicParams_SaveCategory",
        method: "POST",
        path: "DynamicParams/SaveCategory",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432. \u041E\u0431\u0449\u0430\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [],
        body: true
      },
      {
        id: "DynamicParams_DeleteCategory",
        method: "POST",
        path: "DynamicParams/DeleteCategory",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432. \u0422\u0435\u043B\u043E {id}.",
        query: [],
        body: true
      },
      {
        id: "DynamicParams_GetCategoriesTree",
        method: "POST",
        path: "DynamicParams/GetCategoriesTree",
        summary: "\u0414\u0435\u0440\u0435\u0432\u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432.",
        query: [],
        body: true
      },
      {
        id: "DynamicParams_GetGroupsSelectData",
        method: "POST",
        path: "DynamicParams/GetGroupsSelectData",
        summary: "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432, Select2. \u0422\u0435\u043B\u0430 \u043D\u0435\u0442.",
        query: [],
        body: false
      },
      {
        id: "DynamicParams_GetCategoryParamsSelectData",
        method: "POST",
        path: "DynamicParams/GetCategoryParamsSelectData",
        summary: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043E\u0434\u043D\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, Select2. \u0422\u0435\u043B\u043E {id} \u2014 ID \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438.",
        query: [],
        body: true
      },
      {
        id: "Function_GetFunctionsSelectData",
        method: "POST",
        path: "Function/GetFunctionsSelectData",
        summary: "\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 Function, Select2. \u0422\u0435\u043B\u043E {applicationID, q, onlyUsed, useDataIDAsID}.",
        query: [],
        body: true
      },
      {
        id: "Function_GetFunctionTree",
        method: "POST",
        path: "Function/GetFunctionTree",
        summary: "\u0414\u0435\u0440\u0435\u0432\u043E \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0439.",
        query: [],
        body: true
      },
      {
        id: "Function_Save",
        method: "POST",
        path: "Function/Save",
        summary: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E. \u0422\u0435\u043B\u043E {Template, AsVersion}: Template \u2014 JSON \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0441\u0442\u0440\u043E\u043A\u043E\u0439. \u041E\u0431\u0449\u0430\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439.",
        query: [],
        body: true
      },
      {
        id: "Function_RemoveFunction",
        method: "POST",
        path: "Function/RemoveFunction",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438. \u0422\u0435\u043B\u043E {ID}.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_GetRoutingTable",
        method: "POST",
        path: "RoutingTable/GetRoutingTable",
        summary: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E id \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u043E \u0441\u0442\u0440\u043E\u043A\u0430\u043C\u0438. \u0422\u0435\u043B\u043E {id}. id = 0 \u2014 \u0448\u0430\u0431\u043B\u043E\u043D.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_SaveRoutingTable",
        method: "POST",
        path: "RoutingTable/SaveRoutingTable",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_DeleteCategory",
        method: "POST",
        path: "RoutingTable/DeleteCategory",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438. Query: id.",
        query: ["id"],
        body: false
      },
      {
        id: "RoutingTable_GetRoutesTree",
        method: "POST",
        path: "RoutingTable/GetRoutesTree",
        summary: "\u0414\u0435\u0440\u0435\u0432\u043E \u0442\u0430\u0431\u043B\u0438\u0446 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_GetGroupsSelectData",
        method: "POST",
        path: "RoutingTable/GetGroupsSelectData",
        summary: "\u0422\u0430\u0431\u043B\u0438\u0446\u044B \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u0430 DefRouting, Select2. \u0422\u0435\u043B\u043E {q}.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_SaveRoute",
        method: "POST",
        path: "RoutingTable/SaveRoute",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.",
        query: [],
        body: true
      },
      {
        id: "RoutingTable_DeleteRoute",
        method: "POST",
        path: "RoutingTable/DeleteRoute",
        summary: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438. \u0422\u0435\u043B\u043E {id}.",
        query: [],
        body: true
      }
    ];
  }
});

// auth.js
var require_auth = __commonJS({
  "auth.js"(exports2, module2) {
    var cached = null;
    async function accessToken() {
      if (cached && cached.expiresAt > Date.now() + 3e4) return cached.token;
      const body = new URLSearchParams({
        grant_type: "password",
        client_id: required("KEYCLOAK_CLIENT_ID"),
        username: required("KEYCLOAK_USERNAME"),
        password: required("KEYCLOAK_PASSWORD")
      });
      const response = await fetch(required("KEYCLOAK_TOKEN_URL"), {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.access_token) {
        throw new Error(`Keycloak \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u043B \u0432\u0445\u043E\u0434: ${response.status}`);
      }
      cached = {
        token: payload.access_token,
        expiresAt: Date.now() + (payload.expires_in || 60) * 1e3
      };
      return cached.token;
    }
    function required(name) {
      const value = process.env[name];
      if (!value) throw new Error(`\u041D\u0435 \u0437\u0430\u0434\u0430\u043D\u043E ${name}`);
      return value;
    }
    module2.exports = { accessToken };
  }
});

// client.js
var require_client = __commonJS({
  "client.js"(exports2, module2) {
    var operations = [
      ...require_operations(),
      ...require_extra_operations()
    ];
    var byId = new Map(operations.map((operation) => [operation.id, operation]));
    function searchOperations(query) {
      const needle = String(query || "").trim().toLowerCase();
      if (!needle) return { count: operations.length, hint: "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 query: \u0447\u0430\u0441\u0442\u044C operationId, \u043F\u0443\u0442\u0438 \u0438\u043B\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F" };
      return operations.filter((operation) => `${operation.id} ${operation.path} ${operation.summary}`.toLowerCase().includes(needle)).slice(0, 30).map(({ id, method, path, summary, query: queryNames, body }) => ({
        id,
        method,
        path,
        summary,
        query: queryNames,
        body
      }));
    }
    async function callOperation(operationId, args = {}) {
      const operation = byId.get(operationId);
      if (!operation) throw new Error(`\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430: ${operationId}`);
      const { accessToken } = require_auth();
      const token = await accessToken();
      const url = new URL(`${baseUrl()}/${operation.path}`);
      appendQuery(url, args.query);
      const response = await fetch(url, {
        method: operation.method,
        headers: headers(token, operation),
        body: operation.body ? JSON.stringify(args.body ?? {}) : void 0
      });
      const text = await response.text();
      const payload = parseJson(text);
      if (!response.ok) throw new Error(`${operation.id} \u0432\u0435\u0440\u043D\u0443\u043B ${response.status}: ${text.slice(0, 800)}`);
      return payload;
    }
    function appendQuery(url, query) {
      Object.entries(query || {}).forEach(([key, value]) => {
        if (value == null) return;
        const values = Array.isArray(value) ? value : [value];
        values.forEach((item) => url.searchParams.append(key, String(item)));
      });
    }
    function headers(token, operation) {
      return {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        ...operation.body ? { "Content-Type": "application/json" } : {}
      };
    }
    function baseUrl() {
      return (process.env.ISIVR_BASE_URL || "http://localhost:5001").replace(/\/$/, "");
    }
    function parseJson(text) {
      if (!text) return null;
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    }
    module2.exports = { searchOperations, callOperation, baseUrl };
  }
});

// schema/catalog.js
var require_catalog = __commonJS({
  "schema/catalog.js"(exports2, module2) {
    var SCALE = 1.2;
    var BUTTONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "#"];
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
        outputs: extras.outputs || [{ value: null, kind: "down", x: 0.5 }],
        defaults: extras.defaults || {},
        log: extras.log || false,
        ports: extras.ports || null
      };
    }
    function downPair(left, right, leftLabel, rightLabel) {
      return [
        { value: left, kind: "down", x: 0, label: leftLabel || left },
        { value: right, kind: "down", x: 1, label: rightLabel || right }
      ];
    }
    var catalog = {
      Start: block("Start", "\u041D\u0430\u0447\u0430\u043B\u043E", 200, 60, "customPink", "terminator", { input: false }),
      End: block("End", "\u041A\u043E\u043D\u0435\u0446", 200, 60, "customPink", "terminator", { outputs: [] }),
      EndScript: block("EndScript", "\u0421\u0431\u0440\u043E\u0441", 200, 60, "customPink", "terminator", { outputs: [] }),
      EndCall: block("EndCall", "\u0421\u0431\u0440\u043E\u0441", 240, 60, "baseStyle", "terminator", {
        outputs: [],
        defaults: { Code: "NORMAL_CLEARING" }
      }),
      InfinityWait: block("InfinityWait", "\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435", 380, 60, "customPink", "terminator", { outputs: [] }),
      GoTo: block("GoTo", "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043C\u0435\u0442\u043A\u0435", 240, 60, "customOrange", "terminator", {
        outputs: [],
        defaults: { MarkerBlockCellID: null }
      }),
      Marker: block("Marker", "\u041C\u0435\u0442\u043A\u0430", 120, 60, "customOrange", "terminator", { input: false }),
      Sound: block("Sound", "\u0417\u0432\u0443\u043A", 200, 80, "customGreen", "trapeze", {
        defaults: {
          SoundGroupID: null,
          Async: false,
          PlayType: "Repeat",
          RepeatCount: 1,
          Duration: 100,
          TermDigits: { IsGlobal: true, Custom: "" }
        }
      }),
      Function: block("Function", "\u0424\u0443\u043D\u043A\u0446\u0438\u044F", 200, 80, "customGreen", "function", {
        defaults: { FunctionID: null, InputParams: [], OutputParams: [] }
      }),
      Record: block("Record", "\u0417\u0430\u043F\u0438\u0441\u044C \u0437\u0432\u0443\u043A\u0430", 200, 80, "customGreen", "trapeze", {
        defaults: {
          RecordDuration: 30,
          AudioBeforeRecord: null,
          AudioAfterRecord: null,
          PathVariable: null,
          TermDigits: { IsGlobal: true, Custom: "" }
        }
      }),
      StopChannel: block("StopChannel", "\u0421\u0442\u043E\u043F-\u043A\u0430\u043D\u0430\u043B", 200, 80, "customGreen"),
      ResetTimer: block("ResetTimer", "\u0421\u0431\u0440\u043E\u0441 \u0442\u0430\u0439\u043C\u0435\u0440\u0430", 200, 80, "customGreen", null, {
        defaults: { TimerID: 0, ResetType: "ID", TimerBlockCellID: null }
      }),
      AnswerCall: block("AnswerCall", "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C", 200, 80, "customOrange"),
      Transfer: block("Transfer", "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043C\u043E\u0434\u0443\u043B\u044E", 320, 120, "customOrange", "transfer", {
        defaults: { ModuleID: null }
      }),
      TransferToApp: block("TransferToApp", "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043D\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435", 300, 80, "customOrange", "ivrRectangle", {
        defaults: {
          ApplicationDataID: null,
          TransmittedParams: [],
          ReturnedParams: [],
          TransferControl: true,
          ContinueIfError: true
        }
      }),
      PlayEWT: block("PlayEWT", "\u041E\u0437\u0432\u0443\u0447\u0438\u0442\u044C EWT", 200, 80, "customBlue", "playEWT"),
      DefRouting: block("DefRouting", "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F", 380, 80, "customOrange", "arrowRectangle", {
        defaults: {
          DefNumberVariable: "DNIS",
          SkillVariable: "DFR_Skill",
          RouteVariable: "DFR_Route",
          EwtAppVariable: "DFR_EwtApp",
          RoutingTableID: null
        }
      }),
      DynamicParams: block("DynamicParams", "\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B", 380, 80, "customPink", null, {
        defaults: { CategoryID: null }
      }),
      SIPHeader: block("SIPHeader", "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C SIP-\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", 300, 80, "customBlue", null, {
        defaults: { HeaderName: "", ResultVariable: "" }
      }),
      SetTimer: block("SetTimer", "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0430\u0439\u043C\u0435\u0440\u0430", 350, 80, "baseStyle", null, {
        outputs: downPair("Before", "After", "\u0414\u043E", "\u041F\u043E\u0441\u043B\u0435"),
        defaults: { TimerID: 0, TimeOut: 100, Count: 1, SkipOutputAfter: 0 }
      }),
      Calendar: block("Calendar", "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C", 200, 80, "baseStyle", null, {
        outputs: downPair("WorkTime", "OffTime", "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F", "\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"),
        defaults: { CalendarID: null }
      }),
      HolidayPeriod: block("HolidayPeriod", "\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F", 200, 80, "baseStyle", null, {
        outputs: downPair("WorkTime", "OffTime", "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F", "\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F"),
        defaults: { CalendarID: null }
      }),
      ListCheck: block("ListCheck", "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430", 200, 80, "baseStyle", null, {
        outputs: downPair("Contain", "NoContain", "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F", "\u041D\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F"),
        defaults: { KeyToCheck: { IsManual: true, Value: "" }, ListID: null, ResultVariable: null }
      }),
      DataChange: block("DataChange", "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445", 300, 80, "customBlue", null, {
        outputs: downPair("Successfully", "Unsuccessfully", "\u0423\u0441\u043F\u0435\u0448\u043D\u043E", "\u041D\u0435\u0443\u0441\u043F\u0435\u0448\u043D\u043E"),
        defaults: { CategoryID: null, Params: [] }
      }),
      InputField: block("InputField", "\u0412\u0432\u043E\u0434 \u0434\u0430\u043D\u043D\u044B\u0445", 200, 80, "baseStyle", "trapeze", {
        outputs: [
          { value: null, kind: "down", x: 0.5 },
          { value: "NoInput", kind: "down", x: 0, label: "\u0422\u0430\u0439\u043C\u0430\u0443\u0442" },
          { value: "NoMatch", kind: "down", x: 0.75, label: "\u041E\u0448\u0438\u0431\u043A\u0430" }
        ],
        defaults: {
          SoundGroupID: null,
          MinDigits: 1,
          MaxDigits: 1,
          ResultVariable: "",
          ValidationMode: 0,
          RegularExpression: null,
          Range: null,
          InputLockoutTime: { IsGlobal: true, Custom: "" },
          NoMatchSound: { IsGlobal: true, Custom: "" },
          NoInputSound: { IsGlobal: true, Custom: "" },
          NoMatchCount: { IsGlobal: true, Custom: "" },
          NoInputCount: { IsGlobal: true, Custom: "" },
          MaxTime: { IsGlobal: true, Custom: "" },
          MaxIDDTime: { IsGlobal: true, Custom: "" }
        }
      }),
      CC: block("CC", "\u041A\u0426", 100, 120, "customOrange", "ivrActor", {
        outputs: [
          { value: "disconnected", kind: "right", label: "\u041E\u0442\u043A\u043B\u044E\u0447\u0435\u043D" },
          { value: "fail", kind: "down", x: 0.5, label: "\u041E\u0448\u0438\u0431\u043A\u0430" }
        ],
        defaults: {
          ANumber: { IsManual: false, Value: "ANI" },
          BNumber: { IsManual: true, Value: "" },
          Duration: 30,
          UUI: { IsManual: false, Value: "DNIS" },
          DirectionType: "",
          HandleCallRemoteMedia: true,
          OutputsData: []
        }
      }),
      CC_IPN: block("CC_IPN", "\u041A\u0426 IPN", 100, 120, "customOrange", "ivrActor", {
        outputs: [
          {
            value: "connected",
            kind: "left",
            x: 0,
            y: 1,
            label: "\u041E\u0442\u0432\u0435\u0447\u0435\u043D",
            styleExtra: "labelPosition=right;align=top;spacingLeft=-150;spacingBottom=36;"
          },
          { value: "enqueued", kind: "right", label: "\u0412 \u043E\u0447\u0435\u0440\u0435\u0434\u0438" }
        ],
        defaults: {
          ANumber: { IsManual: true, Value: "" },
          BNumber: { IsManual: true, Value: "" },
          SkillRoute: {
            IsManualSkill: true,
            IsCustomSkill: false,
            SkillValue: "",
            IsManualRoute: true,
            IsCustomRoute: false,
            RouteValue: ""
          },
          UUI: { IsManual: true, Value: "" },
          PreferredAgentActive: { IsManual: true, Value: "false" },
          AgentLogin: { IsManual: true, Value: "" },
          AgentTimeout: { IsManual: true, Value: "" },
          StopRecordConnectingAgent: true,
          HandleCallRemoteMedia: false
        }
      }),
      DtmfMenu: block("DtmfMenu", "\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E", 380, 80, "customBlue", "trapeze", {
        log: true,
        ports: "dtmf",
        defaults: {
          SoundGroupID: null,
          Sounds: [],
          OutputsData: BUTTONS.map((id) => ({ ID: id, Value: false })),
          InputLockoutTime: { IsGlobal: true, Custom: "" },
          NoMatchSound: { IsGlobal: true, Custom: "" },
          NoInputSound: { IsGlobal: true, Custom: "" },
          NoMatchCount: { IsGlobal: true, Custom: "" },
          NoInputCount: { IsGlobal: true, Custom: "" },
          MaxTime: { IsGlobal: true, Custom: "" },
          GoBackButton: "#"
        }
      }),
      Condition: block("Condition", "\u0423\u0441\u043B\u043E\u0432\u0438\u0435", 200, 120, "customBlue", "rhombus", {
        ports: "condition",
        defaults: {
          Condition: { Name: "", ConditionStruct: null, ConditionText: null },
          AdditionalConditions: []
        }
      })
    };
    var TYPES = Object.keys(catalog);
    function blockSpec(type) {
      const spec = catalog[type];
      if (!spec) throw new Error(`\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0431\u043B\u043E\u043A\u0430: ${type}`);
      return spec;
    }
    function fittedWidth(name, minimum) {
      return Math.max(minimum, 48 + 13 * String(name || "").length);
    }
    module2.exports = { BUTTONS, catalog, TYPES, blockSpec, fittedWidth };
  }
});

// schema/ports.js
var require_ports = __commonJS({
  "schema/ports.js"(exports2, module2) {
    var { BUTTONS, blockSpec } = require_catalog();
    function outputKey(value) {
      return value == null || value === "" ? "" : String(value);
    }
    function usedOutputs(block, edges) {
      return new Set(
        (edges || []).filter((edge) => edge.from === block.key).map((edge) => outputKey(edge.output))
      );
    }
    function dtmfPorts(block, edges) {
      const used = usedOutputs(block, edges);
      const data = Array.isArray(block.params.OutputsData) ? block.params.OutputsData : [];
      data.forEach((item) => {
        if (used.has(outputKey(item.ID))) item.Value = true;
      });
      const enabled = BUTTONS.filter((id) => data.some((item) => outputKey(item.ID) === id && item.Value));
      const ports = enabled.map((value) => ({ value, kind: "stack", label: value }));
      ports.push({ value: "NoInput", kind: "stack", label: "\u0422\u0430\u0439\u043C\u0430\u0443\u0442" });
      ports.push({ value: "NoMatch", kind: "stack", label: "\u041E\u0448\u0438\u0431\u043A\u0430" });
      return ports;
    }
    function conditionPorts(block) {
      const ports = [
        { value: "false", kind: "left", label: "else" },
        {
          value: "true",
          kind: "right",
          label: block.params.Condition?.Name || block.params.Condition?.ConditionText || "true"
        }
      ];
      (block.params.AdditionalConditions || []).forEach((item, index) => {
        ports.push({
          value: String(item.ID),
          kind: "condition-stack",
          stackIndex: index + 1,
          label: item.Value?.Name || item.Value?.ConditionText || String(item.ID)
        });
      });
      return ports;
    }
    function resolvePorts(block, edges) {
      const spec = blockSpec(block.type);
      if (spec.ports === "dtmf") return dtmfPorts(block, edges);
      if (spec.ports === "condition") return conditionPorts(block);
      return spec.outputs.map((port) => ({ ...port }));
    }
    function stackDepth(ports) {
      return ports.filter((port) => port.kind === "stack" || port.kind === "condition-stack").length;
    }
    module2.exports = { outputKey, resolvePorts, stackDepth };
  }
});

// schema/layout.js
var require_layout = __commonJS({
  "schema/layout.js"(exports2, module2) {
    var { resolvePorts, stackDepth, outputKey } = require_ports();
    var GAP_X = 80;
    var GAP_Y = 150;
    var ORIGIN = 40;
    var PORT_STEP = 48;
    function placeBlocks(blocks, edges, layout) {
      const linked = bindEdges(blocks, edges);
      if (layout === "keep" && blocks.every((block) => block.x != null && block.y != null)) return;
      const fresh = blocks.filter((block) => block.x == null || block.y == null);
      if (layout === "incremental" && fresh.length && fresh.length < blocks.length) {
        placeFresh(fresh, blocks, linked);
        pushForTallerPorts(blocks);
        return;
      }
      layoutFull(blocks, linked);
      placeMarkers(blocks, linked);
      placeOrphans(blocks);
      shiftIntoView(blocks);
    }
    function bindEdges(blocks, edges) {
      const byKey = new Map(blocks.map((block) => [block.key, block]));
      return edges.map((edge) => ({
        ...edge,
        source: byKey.get(edge.from),
        target: byKey.get(edge.to)
      }));
    }
    function layoutFull(blocks, edges) {
      const rank = ranks(blocks, edges);
      const byRank = groupByRank(blocks, rank);
      const columnWidth = Math.max(...blocks.map((block) => block.width)) + GAP_X;
      let y = ORIGIN;
      for (const row of byRank) {
        placeRow(row, edges, columnWidth);
        const height = Math.max(...row.map((block) => block.height + portTail(block, edges)));
        row.forEach((block) => {
          block.y = y;
        });
        y += height + GAP_Y;
      }
    }
    function placeRow(row, edges, columnWidth) {
      row.forEach((block) => {
        block.x = desiredX(block, edges, columnWidth);
      });
      packStackGroups(row, edges);
      pack(row);
    }
    function desiredX(block, edges, columnWidth) {
      const parent = parentOf(block, edges);
      if (!parent || isStack(parent, edges)) return parent ? parent.x + parent.width + GAP_X : ORIGIN;
      if (soleTarget(parent, edges)) return centeredX(parent, block);
      return spreadX(parent, block, edges, columnWidth);
    }
    function packStackGroups(row, edges) {
      const groups = /* @__PURE__ */ new Map();
      row.forEach((block) => {
        const parent = parentOf(block, edges);
        if (!parent || !isStack(parent, edges)) return;
        const children = groups.get(parent.key) || [];
        children.push(block);
        groups.set(parent.key, children);
      });
      groups.forEach((children) => placeStackChildren(parentOf(children[0], edges), children, edges));
    }
    function placeStackChildren(parent, children, edges) {
      const ordered = [...children].sort(byPort(edges));
      let x = parent.x + parent.width + GAP_X;
      ordered.forEach((block) => {
        block.x = x;
        x += block.width + GAP_X;
      });
    }
    function pack(row) {
      row.sort((left, right) => left.x - right.x || left.key.localeCompare(right.key));
      let cursor = -Infinity;
      row.forEach((block) => {
        block.x = Math.max(block.x, cursor);
        cursor = block.x + block.width + GAP_X;
      });
    }
    function centeredX(parent, block) {
      return Math.round(parent.x + parent.width / 2 - block.width / 2);
    }
    function spreadX(parent, block, edges, columnWidth) {
      const ports = resolvePorts(parent, edges);
      const spread = Math.max(ports.length - 1, 0) * columnWidth;
      const center = parent.x + parent.width / 2 - spread / 2 + portIndex(block, edges) * columnWidth;
      return Math.round(center - block.width / 2);
    }
    function placeFresh(fresh, blocks, edges) {
      fresh.forEach((block) => {
        const parent = incoming(block, edges).map((edge) => edge.source).find((item) => item?.x != null);
        block.x = parent ? freshX(parent, block, edges) : ORIGIN;
        block.y = (parent?.y ?? ORIGIN) + (parent?.height ?? 0) + (parent ? portTail(parent, edges) : 0) + GAP_Y;
        shove(block, blocks.filter((item) => item !== block && item.x != null));
      });
    }
    function shove(block, obstacles) {
      let guard = 0;
      while (obstacles.some((item) => overlaps(block, item)) && guard < 40) {
        block.x += block.width + GAP_X;
        guard += 1;
      }
    }
    function pushForTallerPorts(blocks) {
      blocks.filter((block) => block.previousStack != null).forEach((block) => {
        const delta = (block.stack || 0) - block.previousStack;
        if (delta <= 0) return;
        const shift = delta * PORT_STEP;
        blocks.forEach((other) => {
          if (other !== block && other.y > block.y && Math.abs(other.x - block.x) < block.width) other.y += shift;
        });
      });
    }
    function placeMarkers(blocks, edges) {
      blocks.filter((block) => block.type === "Marker" && !reachable(block, edges)).forEach((marker) => {
        const next = outgoing(marker, edges).map((edge) => edge.target).find((target) => target?.x != null);
        if (next) {
          marker.x = centeredX(next, marker);
          marker.y = next.y - marker.height - Math.round((GAP_Y - marker.height) / 2);
          return;
        }
        const goto = blocks.find((block) => block.type === "GoTo" && sameMarker(block, marker) && block.x != null);
        if (!goto) return;
        marker.x = goto.x + goto.width + GAP_X;
        marker.y = goto.y;
      });
    }
    function sameMarker(goto, marker) {
      if (goto.params.markerKey) return goto.params.markerKey === marker.key;
      return String(goto.params.MarkerBlockCellID) === String(marker.cellId);
    }
    function ranks(blocks, edges) {
      const start = blocks.find((block) => block.type === "Start") || blocks[0];
      const rank = /* @__PURE__ */ new Map();
      const seenAt = /* @__PURE__ */ new Map();
      walkRanks(start, 0, edges, rank, seenAt);
      rankMarkerTargets(blocks, edges, rank, seenAt);
      stretchForward(edges, rank, blocks.length);
      return rank;
    }
    function rankMarkerTargets(blocks, edges, rank, seenAt) {
      const markers = blocks.filter((block) => block.type === "Marker" && !reachable(block, edges));
      let changed = true;
      while (changed) {
        changed = markers.some((marker) => rankFromJumps(marker, blocks, edges, rank, seenAt));
      }
    }
    function rankFromJumps(marker, blocks, edges, rank, seenAt) {
      const target = outgoing(marker, edges)[0]?.target;
      if (!target || rank.has(target.key)) return false;
      const jumps = blocks.filter((block) => block.type === "GoTo" && sameMarker(block, marker) && rank.has(block.key));
      if (!jumps.length) return false;
      walkRanks(target, Math.max(...jumps.map((block) => rank.get(block.key))) + 1, edges, rank, seenAt);
      return true;
    }
    function walkRanks(start, startRank, edges, rank, seenAt) {
      if (!start) return;
      const queue = [start];
      rank.set(start.key, startRank);
      seenAt.set(start.key, seenAt.size);
      let clock = seenAt.size;
      while (queue.length) {
        const block = queue.shift();
        clock = discoverRank(block, edges, rank, seenAt, queue, clock);
      }
    }
    function discoverRank(block, edges, rank, seenAt, queue, clock) {
      outgoing(block, edges).forEach((edge) => {
        const target = edge.target;
        if (!target || rank.has(target.key)) return;
        rank.set(target.key, rank.get(block.key) + 1);
        seenAt.set(target.key, clock);
        clock += 1;
        queue.push(target);
      });
      return clock;
    }
    function stretchForward(edges, rank, limit) {
      for (let pass = 0; pass < limit; pass += 1) {
        if (!edges.some((edge) => deepen(edge, rank, edges))) return;
      }
    }
    function deepen(edge, rank, edges) {
      const from = rank.get(edge.source?.key);
      const to = rank.get(edge.target?.key);
      if (from == null || to == null || to >= from + 1) return false;
      if (reaches(edge.target, edge.source, edges)) return false;
      rank.set(edge.target.key, from + 1);
      return true;
    }
    function reaches(from, to, edges) {
      const seen = /* @__PURE__ */ new Set();
      const queue = [from];
      while (queue.length) {
        const block = queue.pop();
        if (!block || seen.has(block.key)) continue;
        if (block === to) return true;
        seen.add(block.key);
        outgoing(block, edges).forEach((edge) => queue.push(edge.target));
      }
      return false;
    }
    function groupByRank(blocks, rank) {
      const rows = [];
      blocks.forEach((block) => {
        const value = rank.get(block.key);
        if (value == null) return;
        rows[value] = rows[value] || [];
        rows[value].push(block);
      });
      return rows.filter(Boolean);
    }
    function freshX(parent, block, edges) {
      if (isStack(parent, edges)) return parent.x + parent.width + GAP_X;
      if (soleTarget(parent, edges)) return centeredX(parent, block);
      return parent.x + portIndex(block, edges) * (block.width + GAP_X);
    }
    function parentOf(block, edges) {
      return incoming(block, edges)[0]?.source || null;
    }
    function soleTarget(parent, edges) {
      return new Set(outgoing(parent, edges).map((edge) => edge.to)).size === 1;
    }
    function isStack(parent, edges) {
      const ports = resolvePorts(parent, edges);
      return ports.length > 0 && ports.every((port) => port.kind === "stack");
    }
    function byPort(edges) {
      return (left, right) => portIndex(left, edges) - portIndex(right, edges) || left.key.localeCompare(right.key);
    }
    function portIndex(block, edges) {
      return edgeOrder(incoming(block, edges)[0], edges);
    }
    function shiftIntoView(blocks) {
      const placed = blocks.filter((block) => block.x != null);
      if (!placed.length) return;
      const min = Math.min(...placed.map((block) => block.x));
      if (min >= ORIGIN) return;
      const delta = ORIGIN - min;
      placed.forEach((block) => {
        block.x += delta;
      });
    }
    function edgeOrder(edge, edges) {
      if (!edge?.source) return 0;
      const ports = resolvePorts(edge.source, edges);
      const index = ports.findIndex((port) => outputKey(port.value) === outputKey(edge.output));
      return visualIndex(ports, index);
    }
    function visualIndex(ports, index) {
      if (index < 0 || !ports.length) return 0;
      if (!ports.every((port) => port.kind === "stack")) return index;
      return ports.length - 1 - index;
    }
    function portTail(block, edges) {
      return stackDepth(resolvePorts(block, edges)) * PORT_STEP;
    }
    function incoming(block, edges) {
      return edges.filter((edge) => edge.to === block.key);
    }
    function outgoing(block, edges) {
      return edges.filter((edge) => edge.from === block.key);
    }
    function reachable(block, edges) {
      return edges.some((edge) => edge.to === block.key) || block.type === "Start";
    }
    function placeOrphans(blocks) {
      let x = ORIGIN;
      blocks.filter((block) => block.x == null).forEach((block) => {
        block.x = x;
        block.y = ORIGIN;
        x += block.width + GAP_X;
      });
    }
    function overlaps(left, right) {
      return left.x < right.x + right.width && left.x + left.width > right.x && left.y < right.y + right.height && left.y + left.height > right.y;
    }
    module2.exports = { placeBlocks, overlaps };
  }
});

// schema/xml.js
var require_xml = __commonJS({
  "schema/xml.js"(exports2, module2) {
    var POINT = 16;
    function buildTemplate(blocks, edges) {
      const ids = new IdSource(blocks.map((block) => block.cellId));
      blocks.forEach((block) => assignPortIds(block, ids));
      const body = [
        '<mxCell id="0"/>',
        '<mxCell id="1" parent="0"/>',
        ...blocks.flatMap((block) => [blockCell(block), ...portCells(block, ids)]),
        ...edges.map((edge) => edgeCell(edge, blocks, ids))
      ];
      return `<mxGraphModel><root>${body.join("")}</root></mxGraphModel>`;
    }
    function assignPortIds(block, ids) {
      if (block.input) block.inputCellId = ids.take();
      block.ports.forEach((port) => {
        port.cellId = ids.take();
      });
    }
    function blockCell(block) {
      return cell({
        id: block.cellId,
        value: block.name,
        style: block.style,
        parent: 1,
        vertex: 1,
        connectable: 0,
        componentType: block.type
      }, [geometry({ x: block.x, y: block.y, width: block.width, height: block.height })]);
    }
    function portCells(block, ids) {
      const cells = [];
      if (block.input) cells.push(pointCell(block, block.inputCellId, "InputPoint", null, inputGeometry(), null));
      block.ports.forEach((port) => {
        const drawn = portGeometry(block.ports, port);
        if (drawn.line) {
          drawn.line.id = ids.take();
          cells.push(lineCell(block, drawn.line));
        }
        cells.push(pointCell(block, port.cellId, "OutputPoint", port.value, drawn, port.label));
      });
      return cells;
    }
    function pointCell(block, id, componentType, outputValue, drawn, label) {
      return cell({
        id,
        value: label || "",
        style: drawn.style,
        vertex: 1,
        parent: block.cellId,
        componentType,
        outputPoint: componentType === "OutputPoint" ? 1 : null,
        outputValue: outputValue == null ? null : outputValue
      }, [geometry(drawn.box, drawn.offset)]);
    }
    function lineCell(block, line2) {
      return cell({
        id: line2.id,
        value: "",
        style: "fontColor=#000000;rotation=90;editable=0;",
        vertex: 1,
        parent: block.cellId
      }, [geometry(line2.box, line2.offset)]);
    }
    function edgeCell(edge, blocks, ids) {
      const source = blocks.find((block) => block.key === edge.from);
      const target = blocks.find((block) => block.key === edge.to);
      const port = source?.ports.find((item) => sameOutput(item.value, edge.output));
      if (!source || !target) throw new Error(`\u0420\u0435\u0431\u0440\u043E ${edge.from} -> ${edge.to} \u0441\u0441\u044B\u043B\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0431\u043B\u043E\u043A`);
      if (!port) throw new Error(`\u0423 \u0431\u043B\u043E\u043A\u0430 ${source.key} \u043D\u0435\u0442 \u0432\u044B\u0445\u043E\u0434\u0430 ${edge.output ?? ""}`);
      if (!target.inputCellId) throw new Error(`\u0423 \u0431\u043B\u043E\u043A\u0430 ${target.key} \u043D\u0435\u0442 \u0432\u0445\u043E\u0434\u0430`);
      return cell({
        id: ids.take(),
        value: "",
        parent: 1,
        source: port.cellId,
        target: target.inputCellId,
        edge: 1
      }, [geometry({ x: 0, y: 0, width: 0, height: 0, relative: true })]);
    }
    function inputGeometry() {
      return {
        style: "shape=ivrInputPoint;resizable=0;portConstraint=north;",
        box: { x: 0.5, y: 0, width: POINT, height: POINT, relative: true },
        offset: { x: -POINT / 2, y: -POINT / 2 }
      };
    }
    function portGeometry(ports, port) {
      if (port.kind === "stack") return stackGeometry(ports, port);
      if (port.kind === "condition-stack") return conditionStack(port);
      const half = -POINT / 2;
      const placed = placement(port);
      const labelStyle = extraStyle(port);
      return {
        style: `shape=${placed.shape};resizable=0;portConstraint=${placed.constraint};${labelStyle}`,
        box: { x: port.x ?? placed.x, y: port.y ?? placed.y, width: POINT, height: POINT, relative: true },
        offset: { x: half, y: half }
      };
    }
    function extraStyle(port) {
      if (port.styleExtra) return port.styleExtra;
      if (port.kind === "left") return "verticalLabelPosition=top;verticalAlign=bottom;";
      if (port.kind === "right") return "labelPosition=right;align=top;spacingBottom=36;";
      if (port.label) return "labelPosition=right;align=bottom;spacingBottom=-36;";
      return "";
    }
    function placement(port) {
      if (port.kind === "left") {
        return { shape: "ivrOutputPointLeft", constraint: "west", x: 0, y: 0.5 };
      }
      if (port.kind === "right") {
        return { shape: "ivrOutputPointRight", constraint: "east", x: 1, y: 0.5 };
      }
      return { shape: "ivrOutputPointDown", constraint: "south", x: 0.5, y: 1 };
    }
    function stackGeometry(ports, port) {
      const index = ports.filter((item) => item.kind === "stack").indexOf(port);
      const size = POINT * 2;
      const step = size + POINT;
      return {
        style: "shape=ivrOutputPointRight;resizable=0;portConstraint=east;labelPosition=right;align=top;spacingBottom=36;",
        box: { x: 0.5, y: 1, width: POINT, height: POINT, relative: true },
        offset: { x: -POINT / 2, y: size + index * step },
        line: line(size, step, index)
      };
    }
    function conditionStack(port) {
      const index = port.stackIndex;
      const size = POINT * 2;
      const step = size + POINT;
      return {
        style: "shape=ivrOutputPointRight;resizable=0;portConstraint=east;labelPosition=right;align=top;spacingBottom=36;",
        box: { x: 1, y: 0.5, width: POINT, height: POINT, relative: true },
        offset: { x: -POINT / 2, y: index * step - POINT / 2 },
        line: index > 0 ? line(size, step, index, true) : null
      };
    }
    function line(size, step, index, condition) {
      const offsetY = condition ? index * step - size + POINT / 2 : size / 2 + index * step;
      return {
        box: { x: condition ? 1 : 0.5, y: condition ? 0.5 : 1, width: size, height: 1, relative: true },
        offset: { x: -size / 2, y: offsetY }
      };
    }
    function geometry(box, offset) {
      const relative = box.relative ? ' relative="1"' : "";
      const point = offset ? `<mxPoint x="${offset.x}" y="${offset.y}" as="offset"/>` : "";
      return `<mxGeometry x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}"${relative} as="geometry">${point}</mxGeometry>`;
    }
    function cell(attrs, children) {
      const attributes = Object.entries(attrs).filter(([, value]) => value != null).map(([key, value]) => `${key}="${escapeXml(value)}"`).join(" ");
      if (!children.length) return `<mxCell ${attributes}/>`;
      return `<mxCell ${attributes}>${children.join("")}</mxCell>`;
    }
    function escapeXml(value) {
      return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    function sameOutput(left, right) {
      const normalize = (value) => value == null || value === "" ? "" : String(value);
      return normalize(left) === normalize(right);
    }
    var IdSource = class {
      constructor(reserved) {
        this.used = /* @__PURE__ */ new Set([0, 1, ...reserved]);
        this.next = 2;
      }
      take() {
        while (this.used.has(this.next)) this.next += 1;
        const id = this.next;
        this.used.add(id);
        this.next += 1;
        return id;
      }
    };
    module2.exports = { buildTemplate };
  }
});

// schema/compile.js
var require_compile = __commonJS({
  "schema/compile.js"(exports2, module2) {
    var { blockSpec, fittedWidth } = require_catalog();
    var { resolvePorts, stackDepth, outputKey } = require_ports();
    var { placeBlocks } = require_layout();
    var { buildTemplate } = require_xml();
    var STRIPPED = ["ID", "MenuID", "CellID", "Type", "Name", "Description", "Log", "Title", "Outputs", "ExtData"];
    function compile(graph, previous) {
      const layout = graph.layout || (graph.id ? "keep" : "full");
      const merged = mergePrevious(graph.blocks || [], previous, layout);
      const edges = graph.edges || [];
      const blocks = merged.map((raw) => normalize(raw, edges));
      placeBlocks(blocks, edges, layout);
      assignCellIds(blocks);
      blocks.forEach((block) => {
        block.ports = resolvePorts(block, edges);
      });
      const byKey = new Map(blocks.map((block) => [block.key, block]));
      return {
        template: buildTemplate(blocks, edges),
        blocks: blocks.map((block) => toApiBlock(block, byKey, edges, graph.id || 0)),
        graph: toLogical(graph, blocks, edges, layout)
      };
    }
    function normalize(raw, edges) {
      const spec = blockSpec(raw.type);
      if (!raw.key) throw new Error("\u0423 \u0431\u043B\u043E\u043A\u0430 \u043D\u0435\u0442 key");
      const params = { ...structuredClone(spec.defaults), ...raw.params || {} };
      STRIPPED.forEach((field) => delete params[field]);
      const block = {
        key: raw.key,
        type: raw.type,
        name: String(raw.name || spec.title).slice(0, 50),
        description: raw.description || "",
        log: raw.log ?? spec.log,
        id: raw.id || 0,
        cellId: raw.cellId || null,
        x: raw.x ?? null,
        y: raw.y ?? null,
        width: raw.width || fittedWidth(String(raw.name || spec.title).slice(0, 50), spec.width),
        height: raw.height || spec.height,
        style: spec.style,
        input: spec.input,
        params,
        outputIds: raw.outputIds || {},
        previousStack: raw.previousStack,
        stack: 0,
        ports: []
      };
      block.ports = resolvePorts(block, edges);
      block.stack = stackDepth(block.ports);
      return block;
    }
    function mergePrevious(blocks, previous, layout) {
      if (!previous) return blocks;
      const byKey = new Map(previous.blocks.map((block) => [block.key, block]));
      const byId = new Map(previous.blocks.map((block) => [block.id, block]));
      return blocks.map((raw) => {
        const prev = byKey.get(raw.key) || byId.get(raw.id);
        if (!prev) return raw;
        return {
          ...raw,
          id: raw.id || prev.id,
          cellId: raw.cellId || prev.cellId,
          x: layout === "full" ? null : raw.x ?? prev.x,
          y: layout === "full" ? null : raw.y ?? prev.y,
          width: layout === "full" ? null : raw.width ?? prev.width,
          height: layout === "full" ? null : raw.height ?? prev.height,
          outputIds: prev.outputIds || {},
          previousStack: prev.stack
        };
      });
    }
    function assignCellIds(blocks) {
      const used = /* @__PURE__ */ new Set([0, 1]);
      blocks.forEach((block) => {
        if (block.cellId && !used.has(Number(block.cellId))) used.add(Number(block.cellId));
        else block.cellId = null;
      });
      let next = 2;
      const take = () => {
        while (used.has(next)) next += 1;
        const id = next;
        used.add(id);
        next += 1;
        return id;
      };
      blocks.forEach((block) => {
        if (!block.cellId) block.cellId = take();
        if (!block.id || block.id <= 0) block.id = -block.cellId;
      });
    }
    function toApiBlock(block, byKey, edges, menuId) {
      return {
        ID: block.id,
        MenuID: menuId,
        CellID: block.cellId,
        Type: block.type,
        Name: block.name,
        Title: block.name,
        Description: block.description,
        Log: !!block.log,
        ExtData: JSON.stringify(block.params),
        Outputs: block.ports.map((port) => outputRecord(block, port, byKey, edges))
      };
    }
    function outputRecord(block, port, byKey, edges) {
      const key = outputKey(port.value);
      const edge = edges.find((item) => item.from === block.key && outputKey(item.output) === key);
      const target = edge ? byKey.get(edge.to) : null;
      return {
        ID: block.outputIds[key] || 0,
        BlockID: block.id,
        OutputID: key,
        NextBlockID: target ? target.id : null
      };
    }
    function toLogical(graph, blocks, edges, layout) {
      return {
        id: graph.id || 0,
        applicationDataId: graph.applicationDataId ?? null,
        name: graph.name,
        description: graph.description || "",
        layout,
        variables: graph.variables || [],
        blocks: blocks.map((block) => ({
          key: block.key,
          id: block.id,
          cellId: block.cellId,
          type: block.type,
          name: block.name,
          description: block.description,
          log: block.log,
          x: block.x,
          y: block.y,
          width: block.width,
          height: block.height,
          stack: block.stack,
          params: block.params
        })),
        edges
      };
    }
    module2.exports = { compile };
  }
});

// node_modules/fast-xml-parser/lib/fxp.cjs
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/lib/fxp.cjs"(exports2, module2) {
    (() => {
      "use strict";
      var t = { d: (e2, i2) => {
        for (var n2 in i2) t.o(i2, n2) && !t.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: i2[n2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      t.r(e), t.d(e, { XMLBuilder: () => $e, XMLParser: () => ie, XMLValidator: () => Pe });
      const i = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", n = new RegExp("^[" + i + "][" + i + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), r = function(t2) {
        return !(null == n.exec(t2));
      }, s = ["hasOwnProperty", "toString", "valueOf", "__defineGetter__", "__defineSetter__", "__lookupGetter__", "__lookupSetter__"], o = ["__proto__", "constructor", "prototype"], a = { allowBooleanAttributes: false, unpairedTags: [] };
      function l(t2, e2) {
        e2 = Object.assign({}, a, e2);
        const i2 = [];
        let n2 = false, r2 = false;
        "\uFEFF" === t2[0] && (t2 = t2.substr(1));
        for (let s2 = 0; s2 < t2.length; s2++) if ("<" === t2[s2] && "?" === t2[s2 + 1]) {
          if (s2 += 2, s2 = c(t2, s2), s2.err) return s2;
        } else {
          if ("<" !== t2[s2]) {
            if (p(t2[s2])) continue;
            return x("InvalidChar", "char '" + t2[s2] + "' is not expected.", N(t2, s2));
          }
          {
            let o2 = s2;
            if (s2++, "!" === t2[s2]) {
              s2 = h(t2, s2);
              continue;
            }
            {
              let a2 = false;
              "/" === t2[s2] && (a2 = true, s2++);
              let l2 = "";
              for (; s2 < t2.length && ">" !== t2[s2] && " " !== t2[s2] && "	" !== t2[s2] && "\n" !== t2[s2] && "\r" !== t2[s2]; s2++) l2 += t2[s2];
              if (l2 = l2.trim(), "/" === l2[l2.length - 1] && (l2 = l2.substring(0, l2.length - 1), s2--), !y(l2)) {
                let e3;
                return e3 = 0 === l2.trim().length ? "Invalid space after '<'." : "Tag '" + l2 + "' is an invalid name.", x("InvalidTag", e3, N(t2, s2));
              }
              const d2 = f(t2, s2);
              if (false === d2) return x("InvalidAttr", "Attributes for '" + l2 + "' have open quote.", N(t2, s2));
              let u2 = d2.value;
              if (s2 = d2.index, "/" === u2[u2.length - 1]) {
                const i3 = s2 - u2.length;
                u2 = u2.substring(0, u2.length - 1);
                const r3 = g(u2, e2);
                if (true !== r3) return x(r3.err.code, r3.err.msg, N(t2, i3 + r3.err.line));
                n2 = true;
              } else if (a2) {
                if (!d2.tagClosed) return x("InvalidTag", "Closing tag '" + l2 + "' doesn't have proper closing.", N(t2, s2));
                if (u2.trim().length > 0) return x("InvalidTag", "Closing tag '" + l2 + "' can't have attributes or invalid starting.", N(t2, o2));
                if (0 === i2.length) return x("InvalidTag", "Closing tag '" + l2 + "' has not been opened.", N(t2, o2));
                {
                  const e3 = i2.pop();
                  if (l2 !== e3.tagName) {
                    let i3 = N(t2, e3.tagStartPos);
                    return x("InvalidTag", "Expected closing tag '" + e3.tagName + "' (opened in line " + i3.line + ", col " + i3.col + ") instead of closing tag '" + l2 + "'.", N(t2, o2));
                  }
                  0 == i2.length && (r2 = true);
                }
              } else {
                const a3 = g(u2, e2);
                if (true !== a3) return x(a3.err.code, a3.err.msg, N(t2, s2 - u2.length + a3.err.line));
                if (true === r2) return x("InvalidXml", "Multiple possible root nodes found.", N(t2, s2));
                -1 !== e2.unpairedTags.indexOf(l2) || i2.push({ tagName: l2, tagStartPos: o2 }), n2 = true;
              }
              for (s2++; s2 < t2.length; s2++) if ("<" === t2[s2]) {
                if ("!" === t2[s2 + 1]) {
                  s2++, s2 = h(t2, s2);
                  continue;
                }
                if ("?" !== t2[s2 + 1]) break;
                if (s2 = c(t2, ++s2), s2.err) return s2;
              } else if ("&" === t2[s2]) {
                const e3 = m(t2, s2);
                if (-1 == e3) return x("InvalidChar", "char '&' is not expected.", N(t2, s2));
                s2 = e3;
              } else if (true === r2 && !p(t2[s2])) return x("InvalidXml", "Extra text at the end", N(t2, s2));
              "<" === t2[s2] && s2--;
            }
          }
        }
        return n2 ? 1 == i2.length ? x("InvalidTag", "Unclosed tag '" + i2[0].tagName + "'.", N(t2, i2[0].tagStartPos)) : !(i2.length > 0) || x("InvalidXml", "Invalid '" + JSON.stringify(i2.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : x("InvalidXml", "Start tag expected.", 1);
      }
      function p(t2) {
        return " " === t2 || "	" === t2 || "\n" === t2 || "\r" === t2;
      }
      function c(t2, e2) {
        const i2 = e2;
        for (; e2 < t2.length; e2++) if ("?" == t2[e2] || " " == t2[e2]) {
          const n2 = t2.substr(i2, e2 - i2);
          if (e2 > 5 && "xml" === n2) return x("InvalidXml", "XML declaration allowed only at the start of the document.", N(t2, e2));
          if ("?" == t2[e2] && ">" == t2[e2 + 1]) {
            e2++;
            break;
          }
          continue;
        }
        return e2;
      }
      function h(t2, e2) {
        if (t2.length > e2 + 5 && "-" === t2[e2 + 1] && "-" === t2[e2 + 2]) {
          for (e2 += 3; e2 < t2.length; e2++) if ("-" === t2[e2] && "-" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        } else if (t2.length > e2 + 8 && "D" === t2[e2 + 1] && "O" === t2[e2 + 2] && "C" === t2[e2 + 3] && "T" === t2[e2 + 4] && "Y" === t2[e2 + 5] && "P" === t2[e2 + 6] && "E" === t2[e2 + 7]) {
          let i2 = 1;
          for (e2 += 8; e2 < t2.length; e2++) if ("<" === t2[e2]) i2++;
          else if (">" === t2[e2] && (i2--, 0 === i2)) break;
        } else if (t2.length > e2 + 9 && "[" === t2[e2 + 1] && "C" === t2[e2 + 2] && "D" === t2[e2 + 3] && "A" === t2[e2 + 4] && "T" === t2[e2 + 5] && "A" === t2[e2 + 6] && "[" === t2[e2 + 7]) {
          for (e2 += 8; e2 < t2.length; e2++) if ("]" === t2[e2] && "]" === t2[e2 + 1] && ">" === t2[e2 + 2]) {
            e2 += 2;
            break;
          }
        }
        return e2;
      }
      const d = '"', u = "'";
      function f(t2, e2) {
        let i2 = "", n2 = "", r2 = false;
        for (; e2 < t2.length; e2++) {
          if (t2[e2] === d || t2[e2] === u) "" === n2 ? n2 = t2[e2] : n2 !== t2[e2] || (n2 = "");
          else if (">" === t2[e2] && "" === n2) {
            r2 = true;
            break;
          }
          i2 += t2[e2];
        }
        return "" === n2 && { value: i2, index: e2, tagClosed: r2 };
      }
      function g(t2, e2) {
        const i2 = (function(t3) {
          const e3 = [], i3 = t3.length;
          let n3 = 0;
          for (; n3 < i3; ) {
            const r2 = n3;
            for (; n3 < i3 && p(t3[n3]); ) n3++;
            if (n3 >= i3) break;
            if ("=" === t3[n3]) {
              n3 = r2 + 1;
              continue;
            }
            const s2 = t3.slice(r2, n3), o2 = n3;
            for (; n3 < i3 && !p(t3[n3]) && "=" !== t3[n3]; ) n3++;
            const a2 = t3.slice(o2, n3);
            let l2, c2, h2, d2 = n3;
            for (; d2 < i3 && p(t3[d2]); ) d2++;
            d2 < i3 && "=" === t3[d2] && (l2 = t3.slice(n3, d2 + 1), n3 = d2 + 1);
            let u2 = n3;
            for (; u2 < i3 && p(t3[u2]); ) u2++;
            if (u2 < i3 && ('"' === t3[u2] || "'" === t3[u2])) {
              const e4 = u2 + 1, i4 = t3.indexOf(t3[u2], e4);
              -1 !== i4 && (c2 = t3[u2], h2 = t3.slice(e4, i4), n3 = i4 + 1);
            }
            const f2 = { startIndex: r2 };
            f2[1] = s2, f2[2] = a2, f2[3] = l2, f2[4] = void 0 !== c2 || void 0, f2[5] = c2, f2[6] = h2, e3.push(f2);
          }
          return e3;
        })(t2), n2 = {};
        for (let t3 = 0; t3 < i2.length; t3++) {
          if (0 === i2[t3][1].length) return x("InvalidAttr", "Attribute '" + i2[t3][2] + "' has no space in starting.", E(i2[t3]));
          if (void 0 !== i2[t3][3] && void 0 === i2[t3][4]) return x("InvalidAttr", "Attribute '" + i2[t3][2] + "' is without value.", E(i2[t3]));
          if (void 0 === i2[t3][3] && !e2.allowBooleanAttributes) return x("InvalidAttr", "boolean attribute '" + i2[t3][2] + "' is not allowed.", E(i2[t3]));
          const r2 = i2[t3][2];
          if (!b(r2)) return x("InvalidAttr", "Attribute '" + r2 + "' is an invalid name.", E(i2[t3]));
          if (Object.prototype.hasOwnProperty.call(n2, r2)) return x("InvalidAttr", "Attribute '" + r2 + "' is repeated.", E(i2[t3]));
          n2[r2] = 1;
        }
        return true;
      }
      function m(t2, e2) {
        if (";" === t2[++e2]) return -1;
        if ("#" === t2[e2]) return (function(t3, e3) {
          let i3 = /\d/;
          for ("x" === t3[e3] && (e3++, i3 = /[\da-fA-F]/); e3 < t3.length; e3++) {
            if (";" === t3[e3]) return e3;
            if (!t3[e3].match(i3)) break;
          }
          return -1;
        })(t2, ++e2);
        let i2 = 0;
        for (; e2 < t2.length; e2++, i2++) if (!(t2[e2].match(/\w/) && i2 < 20)) {
          if (";" === t2[e2]) break;
          return -1;
        }
        return e2;
      }
      function x(t2, e2, i2) {
        return { err: { code: t2, msg: e2, line: i2.line || i2, col: i2.col } };
      }
      function b(t2) {
        return r(t2);
      }
      function y(t2) {
        return r(t2);
      }
      function N(t2, e2) {
        const i2 = t2.substring(0, e2).split(/\r?\n/);
        return { line: i2.length, col: i2[i2.length - 1].length + 1 };
      }
      function E(t2) {
        return t2.startIndex + t2[1].length;
      }
      const w = (t2) => s.includes(t2) ? "__" + t2 : t2, v = { preserveOrder: false, attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, removeNSPrefix: false, allowBooleanAttributes: false, parseTagValue: true, parseAttributeValue: false, trimValues: true, cdataPropName: false, numberParseOptions: { hex: true, leadingZeros: true, eNotation: true, unicode: false }, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, stopNodes: [], alwaysCreateTextNode: false, isArray: () => false, commentPropName: false, unpairedTags: [], processEntities: true, htmlEntities: false, entityDecoder: null, ignoreDeclaration: false, ignorePiTags: false, transformTagName: false, transformAttributeName: false, updateTag: function(t2, e2, i2) {
        return t2;
      }, captureMetaData: false, maxNestedTags: 100, strictReservedNames: true, jPath: true, onDangerousProperty: w };
      function S(t2, e2) {
        if ("string" != typeof t2) return;
        const i2 = t2.toLowerCase();
        if (s.some((t3) => i2 === t3.toLowerCase())) throw new Error(`[SECURITY] Invalid ${e2}: "${t2}" is a reserved JavaScript keyword that could cause prototype pollution`);
        if (o.some((t3) => i2 === t3.toLowerCase())) throw new Error(`[SECURITY] Invalid ${e2}: "${t2}" is a reserved JavaScript keyword that could cause prototype pollution`);
      }
      function A(t2, e2) {
        return "boolean" == typeof t2 ? { enabled: t2, maxEntitySize: 1e4, maxExpansionDepth: 1e4, maxTotalExpansions: 1 / 0, maxExpandedLength: 1e5, maxEntityCount: 1e3, allowedTags: null, tagFilter: null, appliesTo: "all" } : "object" == typeof t2 && null !== t2 ? { enabled: false !== t2.enabled, maxEntitySize: Math.max(1, t2.maxEntitySize ?? 1e4), maxExpansionDepth: Math.max(1, t2.maxExpansionDepth ?? 1e4), maxTotalExpansions: Math.max(1, t2.maxTotalExpansions ?? 1 / 0), maxExpandedLength: Math.max(1, t2.maxExpandedLength ?? 1e5), maxEntityCount: Math.max(1, t2.maxEntityCount ?? 1e3), allowedTags: t2.allowedTags ?? null, tagFilter: t2.tagFilter ?? null, appliesTo: t2.appliesTo ?? "all" } : A(true);
      }
      const T = function(t2) {
        const e2 = Object.assign({}, v, t2), i2 = [{ value: e2.attributeNamePrefix, name: "attributeNamePrefix" }, { value: e2.attributesGroupName, name: "attributesGroupName" }, { value: e2.textNodeName, name: "textNodeName" }, { value: e2.cdataPropName, name: "cdataPropName" }, { value: e2.commentPropName, name: "commentPropName" }];
        for (const { value: t3, name: e3 } of i2) t3 && S(t3, e3);
        return null === e2.onDangerousProperty && (e2.onDangerousProperty = w), e2.processEntities = A(e2.processEntities, e2.htmlEntities), e2.unpairedTagsSet = new Set(e2.unpairedTags), e2.stopNodes && Array.isArray(e2.stopNodes) && (e2.stopNodes = e2.stopNodes.map((t3) => "string" == typeof t3 && t3.startsWith("*.") ? ".." + t3.substring(2) : t3)), e2;
      };
      let _;
      _ = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
      class C {
        constructor(t2) {
          this.tagname = t2, this.child = [], this[":@"] = /* @__PURE__ */ Object.create(null);
        }
        add(t2, e2) {
          "__proto__" === t2 && (t2 = "#__proto__"), this.child.push({ [t2]: e2 });
        }
        addChild(t2, e2) {
          "__proto__" === t2.tagname && (t2.tagname = "#__proto__"), t2[":@"] && Object.keys(t2[":@"]).length > 0 ? this.child.push({ [t2.tagname]: t2.child, ":@": t2[":@"] }) : this.child.push({ [t2.tagname]: t2.child }), this.addStartIndex(e2);
        }
        addStartIndex(t2) {
          void 0 !== t2 && (this.child[this.child.length - 1][_] = { startIndex: t2 });
        }
        addEndIndex(t2) {
          const e2 = this.child[this.child.length - 1];
          void 0 !== e2 && void 0 !== e2[_] && void 0 === e2[_].endIndex && (e2[_].endIndex = t2);
        }
        static getMetaDataSymbol() {
          return _;
        }
      }
      const $ = ":A-Za-z_\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD", P = ":A-Za-z_\xC0-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}", O = P + "\\-\\.\\d\xB7\u0300-\u036F\u0487\u203F-\u2040", I = (t2, e2, i2 = "") => {
        const n2 = `[${t2.replace(":", "")}][${e2.replace(":", "")}]*`;
        return { name: new RegExp(`^[${t2}][${e2}]*$`, i2), ncName: new RegExp(`^${n2}$`, i2), qName: new RegExp(`^${n2}(?::${n2})?$`, i2), nmToken: new RegExp(`^[${e2}]+$`, i2), nmTokens: new RegExp(`^[${e2}]+(?:\\s+[${e2}]+)*$`, i2) };
      }, j = I($, $ + "\\-\\.\\d\xB7\u0300-\u036F\u203F-\u2040"), k = I(P, O, "u"), L = ":A-Za-z_", D = I(L, L + "\\-\\.\\d"), M = (t2, { xmlVersion: e2 = "1.0", asciiOnly: i2 = false } = {}) => (/* @__PURE__ */ ((t3 = "1.0", e3 = false) => e3 ? D : "1.1" === t3 ? k : j)(e2, i2)).qName.test(t2);
      class R {
        constructor(t2, e2) {
          this.suppressValidationErr = !t2, this.options = t2, this.xmlVersion = e2 || 1;
        }
        setXmlVersion(t2 = 1) {
          this.xmlVersion = t2;
        }
        readDocType(t2, e2) {
          const i2 = /* @__PURE__ */ Object.create(null);
          let n2 = 0;
          if ("O" !== t2[e2 + 3] || "C" !== t2[e2 + 4] || "T" !== t2[e2 + 5] || "Y" !== t2[e2 + 6] || "P" !== t2[e2 + 7] || "E" !== t2[e2 + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
          {
            e2 += 9;
            let r2 = 1, s2 = false, o2 = false, a2 = null, l2 = "";
            for (; e2 < t2.length; e2++) if (null === a2) if (s2 || o2 || '"' !== t2[e2] && "'" !== t2[e2]) if ("<" !== t2[e2] || o2) if (">" === t2[e2]) {
              if (o2 ? "-" === t2[e2 - 1] && "-" === t2[e2 - 2] && (o2 = false, r2--) : r2--, 0 === r2) break;
            } else "[" === t2[e2] ? s2 = true : l2 += t2[e2];
            else {
              if (s2 && q(t2, "!ENTITY", e2)) {
                let r3, s3;
                if (e2 += 7, [r3, s3, e2] = this.readEntityExp(t2, e2 + 1, this.suppressValidationErr), -1 === s3.indexOf("&")) {
                  if (false !== this.options.enabled && null != this.options.maxEntityCount && n2 >= this.options.maxEntityCount) throw new Error(`Entity count (${n2 + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                  i2[r3] = s3, n2++;
                }
              } else if (s2 && q(t2, "!ELEMENT", e2)) {
                e2 += 8;
                const { index: i3 } = this.readElementExp(t2, e2 + 1);
                e2 = i3;
              } else if (s2 && q(t2, "!ATTLIST", e2)) e2 += 8;
              else if (s2 && q(t2, "!NOTATION", e2)) {
                e2 += 9;
                const { index: i3 } = this.readNotationExp(t2, e2 + 1, this.suppressValidationErr);
                e2 = i3;
              } else {
                if (!q(t2, "!--", e2)) throw new Error("Invalid DOCTYPE");
                o2 = true;
              }
              r2++, l2 = "";
            }
            else a2 = t2[e2], l2 += t2[e2];
            else t2[e2] === a2 && (a2 = null), l2 += t2[e2];
            if (null !== a2 || 0 !== r2) throw new Error("Unclosed DOCTYPE");
          }
          return { entities: i2, i: e2 };
        }
        readEntityExp(t2, e2) {
          const i2 = e2 = V(t2, e2);
          for (; e2 < t2.length && !/\s/.test(t2[e2]) && '"' !== t2[e2] && "'" !== t2[e2]; ) e2++;
          let n2 = t2.substring(i2, e2);
          if (U(n2, { xmlVersion: this.xmlVersion }), e2 = V(t2, e2), !this.suppressValidationErr) {
            if ("SYSTEM" === t2.substring(e2, e2 + 6).toUpperCase()) throw new Error("External entities are not supported");
            if ("%" === t2[e2]) throw new Error("Parameter entities are not supported");
          }
          let r2 = "";
          if ([e2, r2] = this.readIdentifierVal(t2, e2, "entity"), false !== this.options.enabled && null != this.options.maxEntitySize && r2.length > this.options.maxEntitySize) throw new Error(`Entity "${n2}" size (${r2.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
          return [n2, r2, --e2];
        }
        readNotationExp(t2, e2) {
          const i2 = e2 = V(t2, e2);
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) e2++;
          let n2 = t2.substring(i2, e2);
          !this.suppressValidationErr && U(n2, { xmlVersion: this.xmlVersion }), e2 = V(t2, e2);
          const r2 = t2.substring(e2, e2 + 6).toUpperCase();
          if (!this.suppressValidationErr && "SYSTEM" !== r2 && "PUBLIC" !== r2) throw new Error(`Expected SYSTEM or PUBLIC, found "${r2}"`);
          e2 += r2.length, e2 = V(t2, e2);
          let s2 = null, o2 = null;
          if ("PUBLIC" === r2) [e2, s2] = this.readIdentifierVal(t2, e2, "publicIdentifier"), '"' !== t2[e2 = V(t2, e2)] && "'" !== t2[e2] || ([e2, o2] = this.readIdentifierVal(t2, e2, "systemIdentifier"));
          else if ("SYSTEM" === r2 && ([e2, o2] = this.readIdentifierVal(t2, e2, "systemIdentifier"), !this.suppressValidationErr && !o2)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
          return { notationName: n2, publicIdentifier: s2, systemIdentifier: o2, index: --e2 };
        }
        readIdentifierVal(t2, e2, i2) {
          let n2 = "";
          const r2 = t2[e2];
          if ('"' !== r2 && "'" !== r2) throw new Error(`Expected quoted string, found "${r2}"`);
          const s2 = ++e2;
          for (; e2 < t2.length && t2[e2] !== r2; ) e2++;
          if (n2 = t2.substring(s2, e2), t2[e2] !== r2) throw new Error(`Unterminated ${i2} value`);
          return [++e2, n2];
        }
        readElementExp(t2, e2) {
          const i2 = e2 = V(t2, e2);
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) e2++;
          let n2 = t2.substring(i2, e2);
          if (!this.suppressValidationErr && !M(n2, { xmlVersion: this.xmlVersion })) throw new Error(`Invalid element name: "${n2}"`);
          let r2 = "";
          if ("E" === t2[e2 = V(t2, e2)] && q(t2, "MPTY", e2)) e2 += 4;
          else if ("A" === t2[e2] && q(t2, "NY", e2)) e2 += 2;
          else if ("(" === t2[e2]) {
            const i3 = ++e2;
            for (; e2 < t2.length && ")" !== t2[e2]; ) e2++;
            if (r2 = t2.substring(i3, e2), ")" !== t2[e2]) throw new Error("Unterminated content model");
          } else if (!this.suppressValidationErr) throw new Error(`Invalid Element Expression, found "${t2[e2]}"`);
          return { elementName: n2, contentModel: r2.trim(), index: e2 };
        }
        readAttlistExp(t2, e2) {
          let i2 = e2 = V(t2, e2);
          for (; e2 < t2.length && !/\s/.test(t2[e2]); ) e2++;
          let n2 = t2.substring(i2, e2);
          for (U(n2, { xmlVersion: this.xmlVersion }), i2 = e2 = V(t2, e2); e2 < t2.length && !/\s/.test(t2[e2]); ) e2++;
          let r2 = t2.substring(i2, e2);
          if (!U(r2, { xmlVersion: this.xmlVersion })) throw new Error(`Invalid attribute name: "${r2}"`);
          e2 = V(t2, e2);
          let s2 = "";
          if ("NOTATION" === t2.substring(e2, e2 + 8).toUpperCase()) {
            if (s2 = "NOTATION", "(" !== t2[e2 = V(t2, e2 += 8)]) throw new Error(`Expected '(', found "${t2[e2]}"`);
            e2++;
            let i3 = [];
            for (; e2 < t2.length && ")" !== t2[e2]; ) {
              const n3 = e2;
              for (; e2 < t2.length && "|" !== t2[e2] && ")" !== t2[e2]; ) e2++;
              let r3 = t2.substring(n3, e2);
              if (r3 = r3.trim(), !U(r3, { xmlVersion: this.xmlVersion })) throw new Error(`Invalid notation name: "${r3}"`);
              i3.push(r3), "|" === t2[e2] && (e2++, e2 = V(t2, e2));
            }
            if (")" !== t2[e2]) throw new Error("Unterminated list of notations");
            e2++, s2 += " (" + i3.join("|") + ")";
          } else {
            const i3 = e2;
            for (; e2 < t2.length && !/\s/.test(t2[e2]); ) e2++;
            s2 += t2.substring(i3, e2);
            const n3 = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
            if (!this.suppressValidationErr && !n3.includes(s2.toUpperCase())) throw new Error(`Invalid attribute type: "${s2}"`);
          }
          e2 = V(t2, e2);
          let o2 = "";
          return "#REQUIRED" === t2.substring(e2, e2 + 8).toUpperCase() ? (o2 = "#REQUIRED", e2 += 8) : "#IMPLIED" === t2.substring(e2, e2 + 7).toUpperCase() ? (o2 = "#IMPLIED", e2 += 7) : [e2, o2] = this.readIdentifierVal(t2, e2, "ATTLIST"), { elementName: n2, attributeName: r2, attributeType: s2, defaultValue: o2, index: e2 };
        }
      }
      const V = (t2, e2) => {
        for (; e2 < t2.length && /\s/.test(t2[e2]); ) e2++;
        return e2;
      };
      function q(t2, e2, i2) {
        for (let n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2[i2 + n2 + 1]) return false;
        return true;
      }
      function U(t2, e2) {
        if (M(t2, { xmlVersion: e2 })) return t2;
        throw new Error(`Invalid entity name ${t2}`);
      }
      const B = [48, 1632, 1776, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 65296, 120782, 120792, 120802, 120812, 120822, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72688, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 123200, 123632, 124144, 125264, 130032], F = /* @__PURE__ */ new Map(), G = 1632, X = new Uint8Array(63904).fill(255);
      for (const t2 of B) for (let e2 = 0; e2 < 10; e2++) {
        const i2 = t2 + e2;
        i2 <= 65535 ? X[i2 - G] = e2 : F.set(i2, e2);
      }
      const W = /* @__PURE__ */ new Set([8722, 65293, 65123]), z = /^[-+]?0x[a-fA-F0-9]+$/, Y = /^0b[01]+$/, H = /^0o[0-7]+$/, Q = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, J = { hex: true, binary: false, octal: false, leadingZeros: true, decimalPoint: ".", eNotation: true, infinity: "original", unicode: false };
      function Z(t2, e2 = {}) {
        if (e2 = Object.assign({}, J, e2), !t2 || "string" != typeof t2) return t2;
        let i2 = t2.trim();
        if (0 === i2.length) return t2;
        if (void 0 !== e2.skipLike && e2.skipLike.test(i2)) return t2;
        if ("0" === i2) return 0;
        if (e2.unicode && (i2 = (function(t3) {
          if ("string" != typeof t3) return t3;
          const e3 = t3.length;
          if (0 === e3) return t3;
          let i3 = -1;
          for (let n3 = 0; n3 < e3; n3++) {
            const r2 = t3.charCodeAt(n3);
            if (!(r2 >= 48 && r2 <= 57 || 45 === r2)) {
              if (r2 < G) {
                if (W.has(r2)) {
                  i3 = n3;
                  break;
                }
              } else if (r2 >= 55296 && r2 <= 56319) {
                if (n3 + 1 < e3) {
                  const e4 = t3.charCodeAt(n3 + 1);
                  if (e4 >= 56320 && e4 <= 57343) {
                    const t4 = 65536 + (r2 - 55296 << 10) + (e4 - 56320);
                    if (F.has(t4)) {
                      i3 = n3;
                      break;
                    }
                  }
                }
              } else if (255 !== X[r2 - G] || W.has(r2)) {
                i3 = n3;
                break;
              }
            }
          }
          if (-1 === i3) return t3;
          const n2 = [];
          i3 > 0 && n2.push(t3.slice(0, i3));
          for (let r2 = i3; r2 < e3; r2++) {
            const i4 = t3.charCodeAt(r2);
            if (i4 >= 48 && i4 <= 57 || 45 === i4) {
              n2.push(t3[r2]);
              continue;
            }
            if (i4 < G) {
              n2.push(W.has(i4) ? "-" : t3[r2]);
              continue;
            }
            if (i4 >= 55296 && i4 <= 56319) {
              if (r2 + 1 < e3) {
                const e4 = t3.charCodeAt(r2 + 1);
                if (e4 >= 56320 && e4 <= 57343) {
                  const t4 = 65536 + (i4 - 55296 << 10) + (e4 - 56320), s3 = F.get(t4);
                  if (void 0 !== s3) {
                    n2.push(String.fromCharCode(s3 + 48)), r2++;
                    continue;
                  }
                }
              }
              n2.push(t3[r2]);
              continue;
            }
            if (W.has(i4)) {
              n2.push("-");
              continue;
            }
            const s2 = X[i4 - G];
            n2.push(255 !== s2 ? String.fromCharCode(s2 + 48) : t3[r2]);
          }
          return n2.join("");
        })(i2), "0" === i2)) return 0;
        if (e2.hex && z.test(i2)) return tt(i2, 16);
        if (e2.binary && Y.test(i2)) return tt(i2, 2);
        if (e2.octal && H.test(i2)) return tt(i2, 8);
        if (isFinite(i2)) {
          if (i2.includes("e") || i2.includes("E")) return (function(t3, e3, i3) {
            if (!i3.eNotation) return t3;
            const n2 = e3.match(K);
            if (n2) {
              let r2 = n2[1] || "";
              const s2 = -1 === n2[3].indexOf("e") ? "E" : "e", o2 = n2[2], a2 = r2 ? t3[o2.length + 1] === s2 : t3[o2.length] === s2;
              return o2.length > 1 && a2 ? t3 : (1 !== o2.length || !n2[3].startsWith(`.${s2}`) && n2[3][0] !== s2) && o2.length > 0 ? i3.leadingZeros && !a2 ? (e3 = (n2[1] || "") + n2[3], Number(e3)) : t3 : Number(e3);
            }
            return t3;
          })(t2, i2, e2);
          {
            const n2 = Q.exec(i2);
            if (n2) {
              const r2 = n2[1] || "", s2 = n2[2];
              let o2 = (function(t3) {
                if (t3 && -1 !== t3.indexOf(".")) {
                  let e3 = t3.length;
                  for (; e3 > 0 && 48 === t3.charCodeAt(e3 - 1); ) e3--;
                  return "." === (t3 = t3.slice(0, e3)) ? t3 = "0" : "." === t3[0] ? t3 = "0" + t3 : "." === t3[t3.length - 1] && (t3 = t3.substring(0, t3.length - 1)), t3;
                }
                return t3;
              })(n2[3]);
              const a2 = r2 ? "." === t2[s2.length + 1] : "." === t2[s2.length];
              if (!e2.leadingZeros && (s2.length > 1 || 1 === s2.length && !a2)) return t2;
              {
                const n3 = Number(i2), a3 = String(n3);
                if (0 === n3) return n3;
                if (-1 !== a3.search(/[eE]/)) return e2.eNotation ? n3 : t2;
                if (-1 !== i2.indexOf(".")) return "0" === a3 || a3 === o2 || a3 === `${r2}${o2}` ? n3 : t2;
                let l2 = s2 ? o2 : i2;
                return s2 ? l2 === a3 || r2 + l2 === a3 ? n3 : t2 : l2 === a3 || l2 === r2 + a3 ? n3 : t2;
              }
            }
            return t2;
          }
        }
        return (function(t3, e3, i3) {
          const n2 = e3 === 1 / 0;
          switch (i3.infinity.toLowerCase()) {
            case "null":
              return null;
            case "infinity":
              return e3;
            case "string":
              return n2 ? "Infinity" : "-Infinity";
            default:
              return t3;
          }
        })(t2, Number(i2), e2);
      }
      const K = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
      function tt(t2, e2) {
        const i2 = t2.trim();
        if (2 !== e2 && 8 !== e2 || (t2 = i2.substring(2)), parseInt) return parseInt(t2, e2);
        if (Number.parseInt) return Number.parseInt(t2, e2);
        if (window && window.parseInt) return window.parseInt(t2, e2);
        throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
      }
      class et {
        constructor(t2) {
          this._matcher = t2;
        }
        get separator() {
          return this._matcher.separator;
        }
        getCurrentTag() {
          const t2 = this._matcher.path;
          return t2.length > 0 ? t2[t2.length - 1].tag : void 0;
        }
        getCurrentNamespace() {
          const t2 = this._matcher.path;
          return t2.length > 0 ? t2[t2.length - 1].namespace : void 0;
        }
        getAttrValue(t2) {
          const e2 = this._matcher.path;
          if (0 !== e2.length) return e2[e2.length - 1].values?.[t2];
        }
        hasAttr(t2) {
          const e2 = this._matcher.path;
          if (0 === e2.length) return false;
          const i2 = e2[e2.length - 1];
          return void 0 !== i2.values && t2 in i2.values;
        }
        getAnyParentAttr(t2) {
          return this._matcher.getAnyParentAttr(t2);
        }
        hasAnyParentAttr(t2) {
          return this._matcher.hasAnyParentAttr(t2);
        }
        getPosition() {
          const t2 = this._matcher.path;
          return 0 === t2.length ? -1 : t2[t2.length - 1].position ?? 0;
        }
        getCounter() {
          const t2 = this._matcher.path;
          return 0 === t2.length ? -1 : t2[t2.length - 1].counter ?? 0;
        }
        getIndex() {
          return this.getPosition();
        }
        getDepth() {
          return this._matcher.path.length;
        }
        toString(t2, e2 = true) {
          return this._matcher.toString(t2, e2);
        }
        toArray() {
          return this._matcher.path.map((t2) => t2.tag);
        }
        matches(t2) {
          return this._matcher.matches(t2);
        }
        matchesAny(t2) {
          return t2.matchesAny(this._matcher);
        }
      }
      class it {
        constructor(t2 = {}) {
          this.separator = t2.separator || ".", this.path = [], this.siblingStacks = [], this._pathStringCache = null, this._view = new et(this), this._keptAttrs = [];
        }
        push(t2, e2 = null, i2 = null, n2 = null) {
          this._pathStringCache = null, this.path.length > 0 && (this.path[this.path.length - 1].values = void 0);
          const r2 = this.path.length;
          let s2 = this.siblingStacks[r2];
          s2 || (s2 = { counts: /* @__PURE__ */ new Map(), total: 0 }, this.siblingStacks[r2] = s2);
          const o2 = i2 ? `${i2}:${t2}` : t2, a2 = s2.counts.get(o2) || 0, l2 = s2.total;
          s2.counts.set(o2, a2 + 1), s2.total++;
          const p2 = { tag: t2, position: l2, counter: a2 };
          null != i2 && (p2.namespace = i2), null != e2 && (p2.values = e2), this.path.push(p2);
          const c2 = this.path.length, h2 = null !== n2 ? n2.keep : null;
          if (null != h2 && h2.length > 0 && e2) for (let t3 = 0; t3 < h2.length; t3++) {
            const i3 = h2[t3];
            void 0 !== e2[i3] && this._keptAttrs.push({ depth: c2, name: i3, value: e2[i3] });
          }
        }
        pop() {
          if (0 === this.path.length) return;
          this._pathStringCache = null;
          const t2 = this.path.pop();
          this.siblingStacks.length > this.path.length + 1 && (this.siblingStacks.length = this.path.length + 1);
          const e2 = this.path.length + 1;
          for (; this._keptAttrs.length > 0 && this._keptAttrs[this._keptAttrs.length - 1].depth >= e2; ) this._keptAttrs.pop();
          return t2;
        }
        updateCurrent(t2) {
          if (this.path.length > 0) {
            const e2 = this.path[this.path.length - 1];
            null != t2 && (e2.values = t2);
          }
        }
        getCurrentTag() {
          return this.path.length > 0 ? this.path[this.path.length - 1].tag : void 0;
        }
        getCurrentNamespace() {
          return this.path.length > 0 ? this.path[this.path.length - 1].namespace : void 0;
        }
        getAttrValue(t2) {
          if (0 !== this.path.length) return this.path[this.path.length - 1].values?.[t2];
        }
        hasAttr(t2) {
          if (0 === this.path.length) return false;
          const e2 = this.path[this.path.length - 1];
          return void 0 !== e2.values && t2 in e2.values;
        }
        getAnyParentAttr(t2) {
          const e2 = this._keptAttrs;
          for (let i2 = e2.length - 1; i2 >= 0; i2--) if (e2[i2].name === t2) return e2[i2].value;
        }
        hasAnyParentAttr(t2) {
          const e2 = this._keptAttrs;
          for (let i2 = e2.length - 1; i2 >= 0; i2--) if (e2[i2].name === t2) return true;
          return false;
        }
        getPosition() {
          return 0 === this.path.length ? -1 : this.path[this.path.length - 1].position ?? 0;
        }
        getCounter() {
          return 0 === this.path.length ? -1 : this.path[this.path.length - 1].counter ?? 0;
        }
        getIndex() {
          return this.getPosition();
        }
        getDepth() {
          return this.path.length;
        }
        toString(t2, e2 = true) {
          const i2 = t2 || this.separator;
          if (i2 === this.separator && true === e2) {
            if (null !== this._pathStringCache) return this._pathStringCache;
            const t3 = this.path.map((t4) => t4.namespace ? `${t4.namespace}:${t4.tag}` : t4.tag).join(i2);
            return this._pathStringCache = t3, t3;
          }
          return this.path.map((t3) => e2 && t3.namespace ? `${t3.namespace}:${t3.tag}` : t3.tag).join(i2);
        }
        toArray() {
          return this.path.map((t2) => t2.tag);
        }
        reset() {
          this._pathStringCache = null, this.path = [], this.siblingStacks = [], this._keptAttrs = [];
        }
        matches(t2) {
          const e2 = t2.segments;
          return 0 !== e2.length && (t2.hasDeepWildcard() ? this._matchWithDeepWildcard(e2) : this._matchSimple(e2));
        }
        _matchSimple(t2) {
          if (this.path.length !== t2.length) return false;
          for (let e2 = 0; e2 < t2.length; e2++) if (!this._matchSegment(t2[e2], this.path[e2], e2 === this.path.length - 1)) return false;
          return true;
        }
        _matchWithDeepWildcard(t2) {
          let e2 = this.path.length - 1, i2 = t2.length - 1;
          for (; i2 >= 0 && e2 >= 0; ) {
            const n2 = t2[i2];
            if ("deep-wildcard" === n2.type) {
              if (i2--, i2 < 0) return true;
              const n3 = t2[i2];
              let r2 = false;
              for (let t3 = e2; t3 >= 0; t3--) if (this._matchSegment(n3, this.path[t3], t3 === this.path.length - 1)) {
                e2 = t3 - 1, i2--, r2 = true;
                break;
              }
              if (!r2) return false;
            } else {
              if (!this._matchSegment(n2, this.path[e2], e2 === this.path.length - 1)) return false;
              e2--, i2--;
            }
          }
          return i2 < 0;
        }
        _matchSegment(t2, e2, i2) {
          if ("*" !== t2.tag && t2.tag !== e2.tag) return false;
          if (void 0 !== t2.namespace && "*" !== t2.namespace && t2.namespace !== e2.namespace) return false;
          if (void 0 !== t2.attrName) {
            if (!i2) return false;
            if (!e2.values || !(t2.attrName in e2.values)) return false;
            if (void 0 !== t2.attrValue && String(e2.values[t2.attrName]) !== String(t2.attrValue)) return false;
          }
          if (void 0 !== t2.position) {
            if (!i2) return false;
            const n2 = e2.counter ?? 0;
            if ("first" === t2.position && 0 !== n2) return false;
            if ("odd" === t2.position && n2 % 2 != 1) return false;
            if ("even" === t2.position && n2 % 2 != 0) return false;
            if ("nth" === t2.position && n2 !== t2.positionValue) return false;
          }
          return true;
        }
        matchesAny(t2) {
          return t2.matchesAny(this);
        }
        snapshot() {
          return { path: this.path.map((t2) => ({ ...t2 })), siblingStacks: this.siblingStacks.map((t2) => t2 ? { counts: new Map(t2.counts), total: t2.total } : t2), keptAttrs: this._keptAttrs.map((t2) => ({ ...t2 })) };
        }
        restore(t2) {
          this._pathStringCache = null, this.path = t2.path.map((t3) => ({ ...t3 })), this.siblingStacks = t2.siblingStacks.map((t3) => t3 ? { counts: new Map(t3.counts), total: t3.total } : t3), this._keptAttrs = (t2.keptAttrs || []).map((t3) => ({ ...t3 }));
        }
        readOnly() {
          return this._view;
        }
      }
      class nt {
        constructor(t2, e2 = {}, i2) {
          this.pattern = t2, this.separator = e2.separator || ".", this.segments = this._parse(t2), this.data = i2, this._hasDeepWildcard = this.segments.some((t3) => "deep-wildcard" === t3.type), this._hasAttributeCondition = this.segments.some((t3) => void 0 !== t3.attrName), this._hasPositionSelector = this.segments.some((t3) => void 0 !== t3.position);
        }
        _parse(t2) {
          const e2 = [];
          let i2 = 0, n2 = "";
          for (; i2 < t2.length; ) t2[i2] === this.separator ? i2 + 1 < t2.length && t2[i2 + 1] === this.separator ? (n2.trim() && (e2.push(this._parseSegment(n2.trim())), n2 = ""), e2.push({ type: "deep-wildcard" }), i2 += 2) : (n2.trim() && e2.push(this._parseSegment(n2.trim())), n2 = "", i2++) : (n2 += t2[i2], i2++);
          return n2.trim() && e2.push(this._parseSegment(n2.trim())), e2;
        }
        _parseSegment(t2) {
          const e2 = { type: "tag" };
          let i2 = null, n2 = t2;
          const r2 = t2.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
          if (r2 && (n2 = r2[1] + r2[3], r2[2])) {
            const t3 = r2[2].slice(1, -1);
            t3 && (i2 = t3);
          }
          let s2, o2, a2 = n2;
          if (n2.includes("::")) {
            const e3 = n2.indexOf("::");
            if (s2 = n2.substring(0, e3).trim(), a2 = n2.substring(e3 + 2).trim(), !s2) throw new Error(`Invalid namespace in pattern: ${t2}`);
          }
          let l2 = null;
          if (a2.includes(":")) {
            const t3 = a2.lastIndexOf(":"), e3 = a2.substring(0, t3).trim(), i3 = a2.substring(t3 + 1).trim();
            ["first", "last", "odd", "even"].includes(i3) || /^nth\(\d+\)$/.test(i3) ? (o2 = e3, l2 = i3) : o2 = a2;
          } else o2 = a2;
          if (!o2) throw new Error(`Invalid segment pattern: ${t2}`);
          if (e2.tag = o2, s2 && (e2.namespace = s2), i2) if (i2.includes("=")) {
            const t3 = i2.indexOf("=");
            e2.attrName = i2.substring(0, t3).trim(), e2.attrValue = i2.substring(t3 + 1).trim();
          } else e2.attrName = i2.trim();
          if (l2) {
            const t3 = l2.match(/^nth\((\d+)\)$/);
            t3 ? (e2.position = "nth", e2.positionValue = parseInt(t3[1], 10)) : e2.position = l2;
          }
          return e2;
        }
        get length() {
          return this.segments.length;
        }
        hasDeepWildcard() {
          return this._hasDeepWildcard;
        }
        hasAttributeCondition() {
          return this._hasAttributeCondition;
        }
        hasPositionSelector() {
          return this._hasPositionSelector;
        }
        toString() {
          return this.pattern;
        }
      }
      class rt {
        constructor() {
          this._byDepthAndTag = /* @__PURE__ */ new Map(), this._wildcardByDepth = /* @__PURE__ */ new Map(), this._deepWildcards = [], this._deepByTerminalTag = /* @__PURE__ */ new Map(), this._patterns = /* @__PURE__ */ new Set(), this._sealed = false;
        }
        add(t2) {
          if (this._sealed) throw new TypeError("ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.");
          if (this._patterns.has(t2.pattern)) return this;
          if (this._patterns.add(t2.pattern), t2.hasDeepWildcard()) {
            const e3 = t2.segments[t2.segments.length - 1];
            if (e3 && "deep-wildcard" !== e3.type && "*" !== e3.tag) {
              const i3 = e3.tag;
              this._deepByTerminalTag.has(i3) || this._deepByTerminalTag.set(i3, []), this._deepByTerminalTag.get(i3).push(t2);
            } else this._deepWildcards.push(t2);
            return this;
          }
          const e2 = t2.length, i2 = t2.segments[t2.segments.length - 1], n2 = i2?.tag;
          if (n2 && "*" !== n2) {
            const i3 = `${e2}:${n2}`;
            this._byDepthAndTag.has(i3) || this._byDepthAndTag.set(i3, []), this._byDepthAndTag.get(i3).push(t2);
          } else this._wildcardByDepth.has(e2) || this._wildcardByDepth.set(e2, []), this._wildcardByDepth.get(e2).push(t2);
          return this;
        }
        addAll(t2) {
          for (const e2 of t2) this.add(e2);
          return this;
        }
        has(t2) {
          return this._patterns.has(t2.pattern);
        }
        get size() {
          return this._patterns.size;
        }
        seal() {
          return this._sealed = true, this;
        }
        get isSealed() {
          return this._sealed;
        }
        matchesAny(t2) {
          return null !== this.findMatch(t2);
        }
        findMatch(t2) {
          const e2 = t2.getDepth(), i2 = t2.getCurrentTag(), n2 = `${e2}:${i2}`, r2 = this._byDepthAndTag.get(n2);
          if (r2) {
            for (let e3 = 0; e3 < r2.length; e3++) if (t2.matches(r2[e3])) return r2[e3];
          }
          const s2 = this._wildcardByDepth.get(e2);
          if (s2) {
            for (let e3 = 0; e3 < s2.length; e3++) if (t2.matches(s2[e3])) return s2[e3];
          }
          const o2 = this._deepByTerminalTag.get(i2);
          if (o2) {
            for (let e3 = 0; e3 < o2.length; e3++) if (t2.matches(o2[e3])) return o2[e3];
          }
          for (let e3 = 0; e3 < this._deepWildcards.length; e3++) if (t2.matches(this._deepWildcards[e3])) return this._deepWildcards[e3];
          return null;
        }
      }
      const st = { cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", euro: "\u20AC", dollar: "$", fnof: "\u0192", inr: "\u20B9", af: "\u060B", birr: "\u1265\u122D", peso: "\u20B1", rub: "\u20BD", won: "\u20A9", yuan: "\xA5", cedil: "\xB8" }, ot = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' }, at = { nbsp: "\xA0", copy: "\xA9", reg: "\xAE", trade: "\u2122", mdash: "\u2014", ndash: "\u2013", hellip: "\u2026", laquo: "\xAB", raquo: "\xBB", lsquo: "\u2018", rsquo: "\u2019", ldquo: "\u201C", rdquo: "\u201D", bull: "\u2022", para: "\xB6", sect: "\xA7", deg: "\xB0", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE" }, lt = Object.freeze({ ALLOW: "allow", BLOCK: "block", THROW: "throw" }), pt = new Set("!?\\\\/[]$%{}^&*()<>|+");
      function ct(t2) {
        if ("#" === t2[0]) throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${t2}"`);
        for (const e2 of t2) if (pt.has(e2)) throw new Error(`[EntityReplacer] Invalid character '${e2}' in entity name: "${t2}"`);
        return t2;
      }
      function ht(...t2) {
        const e2 = /* @__PURE__ */ Object.create(null);
        for (const i2 of t2) if (i2) for (const t3 of Object.keys(i2)) {
          const n2 = i2[t3];
          if ("string" == typeof n2) e2[t3] = n2;
          else if (n2 && "object" == typeof n2 && void 0 !== n2.val) {
            const i3 = n2.val;
            "string" == typeof i3 && (e2[t3] = i3);
          }
        }
        return e2;
      }
      const dt = "external", ut = "base", ft = "all", gt = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 }), mt = /* @__PURE__ */ new Set([9, 10, 13]);
      class xt {
        constructor(t2 = {}) {
          var e2;
          this._limit = t2.limit || {}, this._maxTotalExpansions = this._limit.maxTotalExpansions || 0, this._maxExpandedLength = this._limit.maxExpandedLength || 0, this._postCheck = "function" == typeof t2.postCheck ? t2.postCheck : (t3) => t3, this._limitTiers = (e2 = this._limit.applyLimitsTo ?? dt) && e2 !== dt ? e2 === ft ? /* @__PURE__ */ new Set([ft]) : e2 === ut ? /* @__PURE__ */ new Set([ut]) : Array.isArray(e2) ? new Set(e2) : /* @__PURE__ */ new Set([dt]) : /* @__PURE__ */ new Set([dt]), this._numericAllowed = t2.numericAllowed ?? true, this._baseMap = ht(ot, t2.namedEntities || null), this._externalMap = /* @__PURE__ */ Object.create(null), this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this._removeSet = new Set(t2.remove && Array.isArray(t2.remove) ? t2.remove : []), this._leaveSet = new Set(t2.leave && Array.isArray(t2.leave) ? t2.leave : []);
          const i2 = (function(t3) {
            if (!t3) return { xmlVersion: 1, onLevel: gt.allow, nullLevel: gt.remove };
            const e3 = 1.1 === t3.xmlVersion ? 1.1 : 1, i3 = gt[t3.onNCR] ?? gt.allow, n2 = gt[t3.nullNCR] ?? gt.remove;
            return { xmlVersion: e3, onLevel: i3, nullLevel: Math.max(n2, gt.remove) };
          })(t2.ncr);
          this._ncrXmlVersion = i2.xmlVersion, this._ncrOnLevel = i2.onLevel, this._ncrNullLevel = i2.nullLevel, this._onExternalEntity = "function" == typeof t2.onExternalEntity ? t2.onExternalEntity : null, this._onInputEntity = "function" == typeof t2.onInputEntity ? t2.onInputEntity : null;
        }
        _applyRegistrationHook(t2, e2, i2, n2) {
          if (!t2) return true;
          const r2 = t2(e2, i2);
          if (r2 === lt.BLOCK) return false;
          if (r2 === lt.THROW) throw new Error(`[EntityDecoder] Registration of ${n2} entity "&${e2};" was rejected by hook`);
          return true;
        }
        setExternalEntities(t2) {
          if (t2) for (const e3 of Object.keys(t2)) ct(e3);
          if (!this._onExternalEntity) return void (this._externalMap = ht(t2));
          const e2 = ht(t2), i2 = /* @__PURE__ */ Object.create(null);
          for (const [t3, n2] of Object.entries(e2)) this._applyRegistrationHook(this._onExternalEntity, t3, n2, "external") && (i2[t3] = n2);
          this._externalMap = i2;
        }
        addExternalEntity(t2, e2) {
          ct(t2), "string" == typeof e2 && -1 === e2.indexOf("&") && this._applyRegistrationHook(this._onExternalEntity, t2, e2, "external") && (this._externalMap[t2] = e2);
        }
        addInputEntities(t2) {
          if (this._totalExpansions = 0, this._expandedLength = 0, !this._onInputEntity) return void (this._inputMap = ht(t2));
          const e2 = ht(t2), i2 = /* @__PURE__ */ Object.create(null);
          for (const [t3, n2] of Object.entries(e2)) this._applyRegistrationHook(this._onInputEntity, t3, n2, "input") && (i2[t3] = n2);
          this._inputMap = i2;
        }
        reset() {
          return this._inputMap = /* @__PURE__ */ Object.create(null), this._totalExpansions = 0, this._expandedLength = 0, this;
        }
        setXmlVersion(t2) {
          this._ncrXmlVersion = 1.1 === t2 ? 1.1 : 1;
        }
        decode(t2) {
          if ("string" != typeof t2 || 0 === t2.length) return t2;
          if (-1 === t2.indexOf("&")) return t2;
          const e2 = t2, i2 = [], n2 = t2.length;
          let r2 = 0, s2 = 0;
          const o2 = this._maxTotalExpansions > 0, a2 = this._maxExpandedLength > 0, l2 = o2 || a2;
          for (; s2 < n2; ) {
            if (38 !== t2.charCodeAt(s2)) {
              s2++;
              continue;
            }
            let e3 = s2 + 1;
            for (; e3 < n2 && 59 !== t2.charCodeAt(e3) && e3 - s2 <= 32; ) e3++;
            if (e3 >= n2 || 59 !== t2.charCodeAt(e3)) {
              s2++;
              continue;
            }
            const p3 = t2.slice(s2 + 1, e3);
            if (0 === p3.length) {
              s2++;
              continue;
            }
            let c2, h2;
            if (this._removeSet.has(p3)) c2 = "", void 0 === h2 && (h2 = dt);
            else {
              if (this._leaveSet.has(p3)) {
                s2++;
                continue;
              }
              if (35 === p3.charCodeAt(0)) {
                const t3 = this._resolveNCR(p3);
                if (void 0 === t3) {
                  s2++;
                  continue;
                }
                c2 = t3, h2 = ut;
              } else {
                const t3 = this._resolveName(p3);
                c2 = t3?.value, h2 = t3?.tier;
              }
            }
            if (void 0 !== c2) {
              if (s2 > r2 && i2.push(t2.slice(r2, s2)), i2.push(c2), r2 = e3 + 1, s2 = r2, l2 && this._tierCounts(h2)) {
                if (o2 && (this._totalExpansions++, this._totalExpansions > this._maxTotalExpansions)) throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ${this._totalExpansions} > ${this._maxTotalExpansions}`);
                if (a2) {
                  const t3 = c2.length - (p3.length + 2);
                  if (t3 > 0 && (this._expandedLength += t3, this._expandedLength > this._maxExpandedLength)) throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ${this._expandedLength} > ${this._maxExpandedLength}`);
                }
              }
            } else s2++;
          }
          r2 < n2 && i2.push(t2.slice(r2));
          const p2 = 0 === i2.length ? t2 : i2.join("");
          return this._postCheck(p2, e2);
        }
        _tierCounts(t2) {
          return !!this._limitTiers.has(ft) || this._limitTiers.has(t2);
        }
        _resolveName(t2) {
          return t2 in this._inputMap ? { value: this._inputMap[t2], tier: dt } : t2 in this._externalMap ? { value: this._externalMap[t2], tier: dt } : t2 in this._baseMap ? { value: this._baseMap[t2], tier: ut } : void 0;
        }
        _classifyNCR(t2) {
          return 0 === t2 ? this._ncrNullLevel : t2 >= 55296 && t2 <= 57343 || 1 === this._ncrXmlVersion && t2 >= 1 && t2 <= 31 && !mt.has(t2) ? gt.remove : -1;
        }
        _applyNCRAction(t2, e2, i2) {
          switch (t2) {
            case gt.allow:
              return String.fromCodePoint(i2);
            case gt.remove:
              return "";
            case gt.leave:
              return;
            case gt.throw:
              throw new Error(`[EntityDecoder] Prohibited numeric character reference &${e2}; (U+${i2.toString(16).toUpperCase().padStart(4, "0")})`);
            default:
              return String.fromCodePoint(i2);
          }
        }
        _resolveNCR(t2) {
          const e2 = t2.charCodeAt(1);
          let i2;
          if (i2 = 120 === e2 || 88 === e2 ? parseInt(t2.slice(2), 16) : parseInt(t2.slice(1), 10), Number.isNaN(i2) || i2 < 0 || i2 > 1114111) return;
          const n2 = this._classifyNCR(i2);
          if (!this._numericAllowed && n2 < gt.remove) return;
          const r2 = -1 === n2 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, n2);
          return this._applyNCRAction(r2, t2, i2);
        }
      }
      const bt = [{ id: "sql-block-comment-open", description: "SQL block comment open: /* ... */ \u2014 unusual in legitimate user text", pattern: /\/\*/ }, { id: "sql-union-select", description: "UNION SELECT \u2014 most common SQL injection aggregation attack", pattern: /\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i }, { id: "sql-drop-table", description: "DROP TABLE \u2014 destructive DDL injection", pattern: /\bDROP\s{1,20}TABLE\b/i }, { id: "sql-drop-database", description: "DROP DATABASE \u2014 destructive DDL injection", pattern: /\bDROP\s{1,20}DATABASE\b/i }, { id: "sql-insert-into", description: "INSERT INTO \u2014 data injection", pattern: /\bINSERT\s{1,20}INTO\b/i }, { id: "sql-delete-from", description: "DELETE FROM \u2014 data deletion injection", pattern: /\bDELETE\s{1,20}FROM\b/i }, { id: "sql-update-set", description: "UPDATE ... SET \u2014 data modification injection", pattern: /\bUPDATE\b[\s\S]{1,60}\bSET\b/i }, { id: "sql-exec-xp", description: "EXEC xp_ \u2014 MSSQL extended stored procedure execution", pattern: /\bEXEC(?:UTE)?\s{1,20}xp_/i }, { id: "sql-tautology-string", description: `Classic string tautology: ' OR '1'='1 or " OR "1"="1"`, pattern: /'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i }, { id: "sql-tautology-numeric", description: "Numeric tautology: OR 1=1", pattern: /\bOR\s{1,10}1\s*=\s*1\b/i }, { id: "sql-always-true-zero", description: "Numeric tautology: OR 0=0", pattern: /\bOR\s{1,10}0\s*=\s*0\b/i }, { id: "sql-sleep-benchmark", description: "Time-based blind injection: SLEEP() or BENCHMARK()", pattern: /\b(?:SLEEP|BENCHMARK)\s*\(/i }, { id: "sql-waitfor-delay", description: "MSSQL time-based blind injection: WAITFOR DELAY", pattern: /\bWAITFOR\s{1,20}DELAY\b/i }, { id: "sql-char-function", description: "CHAR() function \u2014 used to obfuscate injected strings", pattern: /\bCHAR\s*\(\s*\d{1,3}/i }, { id: "sql-information-schema", description: "INFORMATION_SCHEMA \u2014 reconnaissance query for table/column enumeration", pattern: /\bINFORMATION_SCHEMA\b/i }], yt = [...bt, { id: "sql-line-comment", description: "SQL line comment: -- followed by whitespace or end of string", pattern: /--(?:\s|$)/ }, { id: "sql-stacked-query", description: "Stacked queries: semicolon immediately followed by a SQL keyword", pattern: /;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i }, { id: "sql-hex-encoding", description: "Hex-encoded string injection: 0x41414141 style (MySQL)", pattern: /\b0x[0-9a-f]{4,}/i }], Nt = [{ id: "html-script-open", description: "<script opening tag", pattern: /<script[\s>/]/i }, { id: "html-script-close", description: "</script closing tag", pattern: /<\/script[\s>]/i }, { id: "html-javascript-protocol", description: "javascript: URI scheme (with optional whitespace/encoding)", pattern: /j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i }, { id: "html-vbscript-protocol", description: "vbscript: URI scheme", pattern: /vbscript[\t\n\r ]*:/i }, { id: "html-data-html", description: "data:text/html URI \u2014 can execute scripts in browsers", pattern: /data[\t\n\r ]*:[\t\n\r ]*text\/html/i }, { id: "html-data-xhtml", description: "data:application/xhtml+xml URI", pattern: /data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i }, { id: "html-data-svg", description: "data:image/svg+xml URI \u2014 can execute scripts", pattern: /data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i }, { id: "html-inline-event-handler", description: "Inline event handler attributes: onclick=, onerror=, onload=, etc.", pattern: /\bon\w{1,30}\s*=/i }, { id: "html-entity-obfuscated-script", description: "HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)", pattern: /(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i }, { id: "html-entity-obfuscated-javascript", description: 'HTML-entity-encoded javascript: (partial \u2014 catches common &#106; or &#x6a; for "j")', pattern: /(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i }, { id: "html-style-expression", description: "CSS expression() \u2014 IE-era code execution in style attributes", pattern: /style[\s\S]{0,20}expression\s*\(/i }, { id: "html-object-embed", description: "<object or <embed tags that can load active content", pattern: /<(?:object|embed)[\s>/]/i }, { id: "html-base-tag", description: "<base href= \u2014 can hijack all relative URLs on a page", pattern: /<base[\s>]/i }, { id: "html-meta-refresh", description: '<meta http-equiv="refresh" \u2014 can redirect users', pattern: /<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i }, { id: "html-srcdoc", description: "srcdoc= attribute on iframes \u2014 embeds HTML that can run scripts", pattern: /srcdoc\s*=/i }, { id: "html-iframe", description: "<iframe tag", pattern: /<iframe[\s>/]/i }, { id: "html-form", description: "<form tag \u2014 can be used for phishing / credential harvesting injection", pattern: /<form[\s>/]/i }], Et = [{ id: "xml-cdata-injection", description: "CDATA section injection: <![CDATA[ breaks out of text node context", pattern: /<!\[CDATA\[/i }, { id: "xml-cdata-close", description: "CDATA close sequence: ]]> can terminate an enclosing CDATA section", pattern: /\]\]>/ }, { id: "xml-processing-instruction", description: "XML processing instruction: <?xml-stylesheet or <?php etc.", pattern: /<\?(?:xml[\- ]|php|asp)/i }, { id: "xml-doctype-injection", description: "DOCTYPE declaration embedded in content \u2014 can define entities", pattern: /<!DOCTYPE(?:[\s[]|$)/i }, { id: "xml-entity-system", description: "SYSTEM keyword \u2014 used in external entity declarations (XXE)", pattern: /\bSYSTEM\s+["']/i }, { id: "xml-entity-public", description: "PUBLIC keyword \u2014 used in external entity declarations (XXE)", pattern: /\bPUBLIC\s+["']/i }, { id: "xml-entity-declaration", description: "<!ENTITY declaration \u2014 defines entities, potential XXE or entity expansion", pattern: /<!ENTITY[\s%]/i }, { id: "xml-billion-laughs", description: "Entity reference chaining / billion laughs: repeated &eX; style references", pattern: /(?:&\w{1,20};){3,}/ }, { id: "xml-namespace-confusion", description: "xmlns: attribute injection \u2014 can redefine namespaces to confuse parsers", pattern: /\bxmlns\s*(?::\w{1,40})?\s*=/i }, { id: "xml-comment-injection", description: "<!-- comment injection \u2014 can hide content from some parsers", pattern: /<!--/ }, { id: "xml-comment-close", description: "--> closes an enclosing XML comment", pattern: /-->/ }, { id: "xml-pi-close", description: "?> closes an enclosing processing instruction", pattern: /\?>/ }], wt = [{ id: "svg-script-element", description: "<script element inside SVG executes JavaScript", pattern: /<script[\s>/]/i }, { id: "svg-xlink-href-javascript", description: "xlink:href with javascript: \u2014 classic SVG XSS via <a> or <use>", pattern: /xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i }, { id: "svg-href-javascript", description: "href= with javascript: in SVG context (<a>, <animate>, etc.)", pattern: /href\s*=\s*["']?\s*javascript\s*:/i }, { id: "svg-foreignobject", description: "<foreignObject embeds HTML inside SVG \u2014 can execute scripts", pattern: /<foreignObject[\s>/]/i }, { id: "svg-use-external", description: "<use xlink:href or href pointing to external resource (non-fragment URL)", pattern: /<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i }, { id: "svg-animate-href", description: '<animate attributeName="href" \u2014 can dynamically change href to javascript:', pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i }, { id: "svg-animate-xlinkhref", description: '<animate attributeName="xlink:href"', pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i }, { id: "svg-set-javascript", description: '<set to="javascript:..." \u2014 sets an attribute to a javascript: URI', pattern: /<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i }, { id: "svg-event-handler", description: "SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.", pattern: /\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i }, { id: "svg-handler-generic", description: "Generic on* handler catch-all for SVG attributes", pattern: /\bon\w{1,30}\s*=/i }, { id: "svg-filter-feimage", description: "<feImage href= \u2014 filter primitive that can load external resources", pattern: /<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i }, { id: "svg-image-external", description: "<image xlink:href with http/https or javascript protocol", pattern: /<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i }, { id: "svg-style-javascript", description: "style= attribute containing javascript: (e.g. background:url(javascript:...))", pattern: /style\s*=[\s\S]{0,60}javascript\s*:/i }], vt = [{ id: "shell-path-traversal-unix", description: "Unix path traversal: ../  \u2014 climbing the directory tree", pattern: /\.\.\// }, { id: "shell-path-traversal-windows", description: "Windows path traversal: ..\\ \u2014 climbing the directory tree", pattern: /\.\.\\/ }, { id: "shell-path-traversal-encoded", description: "URL-encoded path traversal: %2e%2e or %2f variants", pattern: /%2e%2e|%2f\.\.|\.\.%2f/i }, { id: "shell-null-byte", description: "Null byte injection: \\x00 or %00 \u2014 truncates strings in C-backed functions", pattern: /\x00|%00/ }, { id: "shell-semicolon", description: "Semicolon command separator: cmd1; cmd2", pattern: /;/ }, { id: "shell-pipe", description: "Pipe operator: cmd1 | cmd2", pattern: /\|/ }, { id: "shell-and-operator", description: "AND operator: cmd1 && cmd2", pattern: /&&/ }, { id: "shell-or-operator", description: "OR operator: cmd1 || cmd2", pattern: /\|\|/ }, { id: "shell-backtick", description: "Backtick command substitution: `cmd`", pattern: /`/ }, { id: "shell-dollar-paren", description: "Dollar-paren command substitution: $(cmd)", pattern: /\$\(/ }, { id: "shell-dollar-brace", description: "Dollar-brace variable expansion: ${var} \u2014 can be abused for injection", pattern: /\$\{/ }, { id: "shell-redirect-out", description: "Output redirection: cmd > file or cmd >> file", pattern: />{1,2}/ }, { id: "shell-redirect-in", description: "Input redirection: cmd < file", pattern: /</ }, { id: "shell-newline-injection", description: "Newline injection: \\n or \\r \u2014 can inject new shell commands", pattern: /[\n\r]/ }, { id: "shell-glob-star", description: "Glob expansion: * or ? \u2014 can expand to unintended files", pattern: /[/\\][*?]/ }, { id: "shell-absolute-root", description: "Absolute root path injection: string starting with / or \\ (Windows UNC)", pattern: /^(?:\/|\\\\)/ }, { id: "shell-windows-drive", description: "Windows drive letter path injection: C:\\ or D:/", pattern: /^[a-zA-Z]:[/\\]/ }, { id: "shell-curl-wget", description: "curl/wget with URL or flags \u2014 can exfiltrate data or download payloads", pattern: /\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i }], St = [{ id: "redos-nested-quantifier-plus", description: "Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.", pattern: /\([^)]*\+[^)]*\)[+*]/ }, { id: "redos-nested-quantifier-star", description: "Nested * quantifier: (a*)* or (a*)+ \u2014 catastrophic backtracking", pattern: /\([^)]*\*[^)]*\)[*+]/ }, { id: "redos-nested-groups", description: "Doubly nested quantified groups: ((a+)+) \u2014 guaranteed catastrophic", pattern: /\(\([^)]{0,40}\)[+*]\)[+*]/ }, { id: "redos-alternation-overlap", description: "Overlapping alternation under quantifier: (a|a)+ \u2014 ambiguous NFA paths", pattern: /\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/ }, { id: "redos-star-plus-concat", description: "(x*x)+ pattern \u2014 triggers super-linear backtracking", pattern: /\([^)]{0,10}\*[^)]{0,10}\)[+*]/ }, { id: "redos-dot-star-greedy", description: "(.*){n,} or (.+){n,} \u2014 repeated greedy dot quantifiers", pattern: /\(\.[*+]\)\{?\d/ }, { id: "redos-large-repetition", description: "Very large fixed or range repetition count {1000,} or {1000,n} \u2014 denial of service via backtracking", pattern: /\{\d{4,}(?:,\d*)?\}/ }, { id: "redos-catastrophic-alternation", description: "Long alternation with many similar branches \u2014 polynomial backtracking risk", pattern: /\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/ }], At = `["'\\s]*:`, Tt = [{ id: "nosql-where-operator", description: "$where \u2014 executes arbitrary JavaScript server-side in MongoDB", pattern: new RegExp(`\\$where${At}`, "i") }, { id: "nosql-ne-operator", description: '$ne \u2014 "not equal" operator used to bypass equality checks', pattern: new RegExp(`\\$ne${At}`, "i") }, { id: "nosql-gt-operator", description: '$gt \u2014 "greater than" used to bypass password/value checks', pattern: new RegExp(`\\$gte?${At}`, "i") }, { id: "nosql-lt-operator", description: '$lt / $lte \u2014 "less than" bypass variants', pattern: new RegExp(`\\$lte?${At}`, "i") }, { id: "nosql-regex-operator", description: "$regex \u2014 can be used to extract data character by character (blind injection)", pattern: new RegExp(`\\$regex${At}`, "i") }, { id: "nosql-or-operator", description: "$or \u2014 logical OR; used to create always-true conditions", pattern: new RegExp(`\\$or${At}\\s*\\[`, "i") }, { id: "nosql-and-operator", description: "$and \u2014 logical AND operator injection", pattern: new RegExp(`\\$and${At}\\s*\\[`, "i") }, { id: "nosql-nor-operator", description: "$nor \u2014 logical NOR operator injection", pattern: new RegExp(`\\$nor${At}\\s*\\[`, "i") }, { id: "nosql-exists-operator", description: "$exists \u2014 can enumerate fields to determine schema", pattern: new RegExp(`\\$exists${At}`, "i") }, { id: "nosql-in-operator", description: "$in \u2014 matches any value in a list; can enumerate values", pattern: new RegExp(`\\$in${At}\\s*\\[`, "i") }, { id: "nosql-expr-operator", description: "$expr \u2014 allows aggregation expressions in queries (MongoDB 3.6+)", pattern: new RegExp(`\\$expr${At}`, "i") }, { id: "nosql-function-operator", description: "$function \u2014 executes arbitrary JavaScript in MongoDB 4.4+", pattern: new RegExp(`\\$function${At}`, "i") }, { id: "nosql-accumulator-operator", description: "$accumulator \u2014 custom aggregation with arbitrary JS execution", pattern: new RegExp(`\\$accumulator${At}`, "i") }, { id: "nosql-proto-pollution", description: "__proto__ \u2014 prototype pollution via object key injection", pattern: /__proto__/ }, { id: "nosql-constructor-prototype", description: "constructor.prototype \u2014 alternative prototype pollution vector (dot notation or JSON key)", pattern: /constructor[\s"':.,{\[]*prototype/i }, { id: "nosql-proto-bracket", description: '["__proto__"] \u2014 bracket-notation prototype pollution', pattern: /\[["']__proto__["']\]/ }], _t = [{ id: "log-crlf-injection", description: "CRLF injection: literal \\r or \\n embeds fake log lines", pattern: /[\r\n]/ }, { id: "log-url-encoded-crlf", description: "URL-encoded CRLF: %0d, %0a, %0D, %0A \u2014 decoded by some log parsers", pattern: /%0[dDaA]/ }, { id: "log-unicode-newline", description: "Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)", pattern: /[\u2028\u2029]/ }, { id: "log-log4shell-jndi", description: "Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j", pattern: /\$\{jndi\s*:/i }, { id: "log-log4shell-obfuscated", description: "Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection", pattern: /\$\{::-/ }, { id: "log-log4j-lookup", description: "Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} \u2014 data exfiltration", pattern: /\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i }, { id: "log-ssti-double-brace", description: "SSTI double-brace: {{expression}} \u2014 Jinja2, Twig, Handlebars, etc.", pattern: /\{\{[\s\S]{0,80}\}\}/ }, { id: "log-ssti-hash-brace", description: "SSTI hash-brace: #{expression} \u2014 Thymeleaf, Velocity, Ruby ERB", pattern: /#\{[\s\S]{0,80}\}/ }, { id: "log-ssti-dollar-brace", description: "SSTI/EL injection: ${expression with operators or method calls} \u2014 JSP EL, Freemarker, SpEL", pattern: /\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i }, { id: "log-ssti-percent-tag", description: "SSTI ERB/ASP tag: <%= expression %> \u2014 Ruby ERB, ASP", pattern: /<%=[\s\S]{0,80}%>/ }, { id: "log-null-byte", description: "Null byte: \\x00 or %00 \u2014 can truncate log entries in C-backed loggers", pattern: /\x00|%00/ }, { id: "log-ansi-escape", description: "ANSI escape sequence: ESC[ \u2014 can manipulate terminal output when logs are tailed", pattern: /\x1b\[/ }];
      function Ct(t2, e2) {
        const i2 = e2.label ?? "CUSTOM";
        for (const n2 of e2) if (n2.pattern.test(t2)) return { context: i2, id: n2.id, description: n2.description, pattern: n2.pattern };
        return null;
      }
      function $t(t2, e2) {
        (function(t3) {
          if ("string" != typeof t3) throw new TypeError("is-unsafe: first argument must be a string, got " + typeof t3);
        })(t2), (function(t3) {
          if (!(t3 instanceof RegExp)) {
            if (!Array.isArray(t3)) throw new TypeError("is-unsafe: second argument must be a PatternList (e.g. HTML), an array of PatternLists (e.g. [HTML, XML]), or a RegExp. Got: " + typeof t3);
            if (0 === t3.length) throw new TypeError("is-unsafe: context must not be an empty array");
            if (Array.isArray(t3[0])) {
              for (const e3 of t3) if (!Array.isArray(e3) || 0 === e3.length) throw new TypeError("is-unsafe: each context in the array must be a non-empty pattern array (PatternList)");
            }
          }
        })(e2);
        const { lists: i2, regex: n2 } = (function(t3) {
          return t3 instanceof RegExp ? { lists: null, regex: t3 } : Array.isArray(t3[0]) ? { lists: t3, regex: null } : { lists: [t3], regex: null };
        })(e2);
        if (n2) return n2.test(t2);
        for (const e3 of i2) if (null !== Ct(t2, e3)) return true;
        return false;
      }
      function Pt(t2, e2) {
        if (!t2) return {};
        const i2 = e2.attributesGroupName ? t2[e2.attributesGroupName] : t2;
        if (!i2) return {};
        const n2 = {};
        for (const t3 in i2) t3.startsWith(e2.attributeNamePrefix) ? n2[t3.substring(e2.attributeNamePrefix.length)] = i2[t3] : n2[t3] = i2[t3];
        return n2;
      }
      function Ot(t2) {
        if (!t2 || "string" != typeof t2) return;
        const e2 = t2.indexOf(":");
        if (-1 !== e2 && e2 > 0) {
          const i2 = t2.substring(0, e2);
          if ("xmlns" !== i2) return i2;
        }
      }
      Nt.label = "HTML", Et.label = "XML", wt.label = "SVG", bt.label = "SQL", yt.label = "SQL-STRICT", vt.label = "SHELL", St.label = "REDOS", Tt.label = "NOSQL", _t.label = "LOG", Object.freeze({ HTML: Nt, XML: Et, SVG: wt, SQL: bt, "SQL-STRICT": yt, SHELL: vt, REDOS: St, NOSQL: Tt, LOG: _t });
      class It {
        constructor(t2, e2) {
          var i2;
          this.options = t2, this.currentNode = null, this.tagsNodeStack = [], this.parseXml = Mt, this.parseTextData = jt, this.resolveNameSpace = kt, this.buildAttributesMap = Dt, this.isItStopNode = Ut, this.replaceEntitiesValue = Vt, this.readStopNodeData = Xt, this.saveTextToParentTag = qt, this.addChild = Rt, this.ignoreAttributesFn = "function" == typeof (i2 = this.options.ignoreAttributes) ? i2 : Array.isArray(i2) ? (t3) => {
            for (const e3 of i2) {
              if ("string" == typeof e3 && t3 === e3) return true;
              if (e3 instanceof RegExp && e3.test(t3)) return true;
            }
          } : () => false, this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = false;
          let n2 = { ...ot };
          this.options.entityDecoder ? this.entityDecoder = this.options.entityDecoder : ("object" == typeof this.options.htmlEntities ? n2 = this.options.htmlEntities : true === this.options.htmlEntities && (n2 = { ...at, ...st }), this.entityDecoder = new xt({ namedEntities: { ...n2, ...e2 }, numericAllowed: this.options.htmlEntities, limit: { maxTotalExpansions: this.options.processEntities.maxTotalExpansions, maxExpandedLength: this.options.processEntities.maxExpandedLength, applyLimitsTo: this.options.processEntities.appliesTo }, onInputEntity: (t3, e3) => $t(e3, [Nt, Et]) ? lt.BLOCK : lt.ALLOW })), this.matcher = new it(), this.readonlyMatcher = this.matcher.readOnly(), this.isCurrentNodeStopNode = false, this.stopNodeExpressionsSet = new rt();
          const r2 = this.options.stopNodes;
          if (r2 && r2.length > 0) {
            for (let t3 = 0; t3 < r2.length; t3++) {
              const e3 = r2[t3];
              "string" == typeof e3 ? this.stopNodeExpressionsSet.add(new nt(e3)) : e3 instanceof nt && this.stopNodeExpressionsSet.add(e3);
            }
            this.stopNodeExpressionsSet.seal();
          }
        }
      }
      function jt(t2, e2, i2, n2, r2, s2, o2) {
        const a2 = this.options;
        if (void 0 !== t2 && (a2.trimValues && !n2 && (t2 = t2.trim()), t2.length > 0)) {
          o2 || (t2 = this.replaceEntitiesValue(t2, e2, i2));
          const n3 = a2.jPath ? i2.toString() : i2, l2 = a2.tagValueProcessor(e2, t2, n3, r2, s2);
          return null == l2 ? t2 : typeof l2 != typeof t2 || l2 !== t2 ? l2 : a2.trimValues || t2.trim() === t2 ? Wt(t2, a2.parseTagValue, a2.numberParseOptions) : t2;
        }
      }
      function kt(t2) {
        if (this.options.removeNSPrefix) {
          const e2 = t2.split(":"), i2 = "/" === t2.charAt(0) ? "/" : "";
          if ("xmlns" === e2[0]) return "";
          2 === e2.length && (t2 = i2 + e2[1]);
        }
        return t2;
      }
      const Lt = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
      function Dt(t2, e2, i2, n2 = false) {
        const r2 = this.options;
        if (true === n2 || true !== r2.ignoreAttributes && "string" == typeof t2) {
          const n3 = (function(t3, e3) {
            const i3 = [];
            let n4 = e3.exec(t3);
            for (; n4; ) {
              const r3 = [];
              r3.startIndex = e3.lastIndex - n4[0].length;
              const s3 = n4.length;
              for (let t4 = 0; t4 < s3; t4++) r3.push(n4[t4]);
              i3.push(r3), n4 = e3.exec(t3);
            }
            return i3;
          })(t2, Lt), s2 = n3.length, o2 = {}, a2 = new Array(s2);
          let l2 = false;
          const p2 = {};
          for (let t3 = 0; t3 < s2; t3++) {
            const e3 = this.resolveNameSpace(n3[t3][1]), s3 = n3[t3][4];
            if (e3.length && void 0 !== s3) {
              let n4 = s3;
              r2.trimValues && (n4 = n4.trim()), n4 = this.replaceEntitiesValue(n4, i2, this.readonlyMatcher), a2[t3] = n4, p2[e3] = n4, l2 = true;
            }
          }
          l2 && "object" == typeof e2 && e2.updateCurrent && e2.updateCurrent(p2);
          const c2 = r2.jPath ? e2.toString() : this.readonlyMatcher;
          let h2 = false;
          for (let t3 = 0; t3 < s2; t3++) {
            const e3 = this.resolveNameSpace(n3[t3][1]);
            if (this.ignoreAttributesFn(e3, c2)) continue;
            let i3 = r2.attributeNamePrefix + e3;
            if (e3.length) if (r2.transformAttributeName && (i3 = r2.transformAttributeName(i3)), i3 = Yt(i3, r2), void 0 !== n3[t3][4]) {
              const n4 = a2[t3], s3 = r2.attributeValueProcessor(e3, n4, c2);
              o2[i3] = null == s3 ? n4 : typeof s3 != typeof n4 || s3 !== n4 ? s3 : Wt(n4, r2.parseAttributeValue, r2.numberParseOptions), h2 = true;
            } else r2.allowBooleanAttributes && (o2[i3] = true, h2 = true);
          }
          if (!h2) return;
          if (r2.attributesGroupName && !r2.preserveOrder) {
            const t3 = {};
            return t3[r2.attributesGroupName] = o2, t3;
          }
          return o2;
        }
      }
      const Mt = function(t2) {
        t2 = t2.replace(/\r\n?/g, "\n");
        const e2 = new C("!xml");
        let i2 = e2, n2 = "";
        this.matcher.reset(), this.entityDecoder.reset(), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.doctypefound = false;
        const r2 = this.options, s2 = new R(r2.processEntities), o2 = t2.length;
        for (let a2 = 0; a2 < o2; a2++) if ("<" === t2[a2]) {
          const l2 = t2.charCodeAt(a2 + 1);
          if (47 === l2) {
            const s3 = Bt(t2, ">", a2, "Closing Tag is not closed.");
            let o3 = t2.substring(a2 + 2, s3).trim();
            if (r2.removeNSPrefix) {
              const t3 = o3.indexOf(":");
              -1 !== t3 && (o3 = o3.substr(t3 + 1));
            }
            o3 = zt(r2.transformTagName, o3, "", r2).tagName, i2 && (n2 = this.saveTextToParentTag(n2, i2, this.readonlyMatcher));
            const l3 = this.matcher.getCurrentTag();
            if (o3 && r2.unpairedTagsSet.has(o3)) throw new Error(`Unpaired tag can not be used as closing tag: </${o3}>`);
            l3 && r2.unpairedTagsSet.has(l3) && (this.matcher.pop(), this.tagsNodeStack.pop()), this.matcher.pop(), this.isCurrentNodeStopNode = false, i2 = this.tagsNodeStack.pop() || e2, r2.captureMetaData && i2 && i2.addEndIndex(s3 + 1), n2 = "", a2 = s3;
          } else if (63 === l2) {
            let e3 = Gt(t2, a2, false, "?>");
            if (!e3) throw new Error("Pi Tag is not closed.");
            n2 = this.saveTextToParentTag(n2, i2, this.readonlyMatcher);
            const o3 = this.buildAttributesMap(e3.tagExp, this.matcher, e3.tagName, true);
            if (o3) {
              const t3 = o3[this.options.attributeNamePrefix + "version"];
              this.entityDecoder.setXmlVersion(Number(t3) || 1), s2.setXmlVersion(Number(t3) || 1);
            }
            if (r2.ignoreDeclaration && "?xml" === e3.tagName || r2.ignorePiTags) ;
            else {
              const t3 = new C(e3.tagName);
              t3.add(r2.textNodeName, ""), e3.tagName !== e3.tagExp && e3.attrExpPresent && true !== r2.ignoreAttributes && (t3[":@"] = o3), this.addChild(i2, t3, this.readonlyMatcher, a2), r2.captureMetaData && i2.addEndIndex(e3.closeIndex + 2);
            }
            a2 = e3.closeIndex + 1;
          } else if (33 === l2 && 45 === t2.charCodeAt(a2 + 2) && 45 === t2.charCodeAt(a2 + 3)) {
            const e3 = Bt(t2, "-->", a2 + 4, "Comment is not closed.");
            if (r2.commentPropName) {
              const s3 = t2.substring(a2 + 4, e3 - 2);
              n2 = this.saveTextToParentTag(n2, i2, this.readonlyMatcher), i2.add(r2.commentPropName, [{ [r2.textNodeName]: s3 }]);
            }
            a2 = e3;
          } else if (33 === l2 && 68 === t2.charCodeAt(a2 + 2)) {
            if (this.doctypefound) throw new Error("Multiple DOCTYPE declarations found.");
            this.doctypefound = true;
            const e3 = s2.readDocType(t2, a2);
            this.entityDecoder.addInputEntities(e3.entities), a2 = e3.i;
          } else if (33 === l2 && 91 === t2.charCodeAt(a2 + 2)) {
            const e3 = Bt(t2, "]]>", a2, "CDATA is not closed.") - 2, s3 = t2.substring(a2 + 9, e3);
            n2 = this.saveTextToParentTag(n2, i2, this.readonlyMatcher);
            let o3 = this.parseTextData(s3, i2.tagname, this.readonlyMatcher, true, false, true, true);
            null == o3 && (o3 = ""), r2.cdataPropName ? i2.add(r2.cdataPropName, [{ [r2.textNodeName]: s3 }]) : i2.add(r2.textNodeName, o3), a2 = e3 + 2;
          } else {
            let s3 = Gt(t2, a2, r2.removeNSPrefix);
            if (!s3) {
              const e3 = t2.substring(Math.max(0, a2 - 50), Math.min(o2, a2 + 50));
              throw new Error(`readTagExp returned undefined at position ${a2}. Context: "${e3}"`);
            }
            let l3 = s3.tagName;
            const p2 = s3.rawTagName;
            let c2 = s3.tagExp, h2 = s3.attrExpPresent, d2 = s3.closeIndex;
            if ({ tagName: l3, tagExp: c2 } = zt(r2.transformTagName, l3, c2, r2), r2.strictReservedNames && (l3 === r2.commentPropName || l3 === r2.cdataPropName || l3 === r2.textNodeName || l3 === r2.attributesGroupName)) throw new Error(`Invalid tag name: ${l3}`);
            i2 && n2 && "!xml" !== i2.tagname && (n2 = this.saveTextToParentTag(n2, i2, this.readonlyMatcher, false));
            const u2 = i2;
            u2 && r2.unpairedTagsSet.has(u2.tagname) && (i2 = this.tagsNodeStack.pop(), this.matcher.pop());
            let f2 = false;
            c2.length > 0 && c2.lastIndexOf("/") === c2.length - 1 && (f2 = true, "/" === l3[l3.length - 1] ? (l3 = l3.substr(0, l3.length - 1), c2 = l3) : c2 = c2.substr(0, c2.length - 1), h2 = l3 !== c2);
            let g2, m2 = null, x2 = {};
            g2 = Ot(p2), l3 !== e2.tagname && this.matcher.push(l3, {}, g2), l3 !== c2 && h2 && (m2 = this.buildAttributesMap(c2, this.matcher, l3), m2 && (x2 = Pt(m2, r2))), l3 !== e2.tagname && (this.isCurrentNodeStopNode = this.isItStopNode());
            const b2 = a2;
            if (this.isCurrentNodeStopNode) {
              let e3 = "";
              if (f2) a2 = s3.closeIndex;
              else if (r2.unpairedTagsSet.has(l3)) a2 = s3.closeIndex;
              else {
                const i3 = this.readStopNodeData(t2, p2, d2 + 1);
                if (!i3) throw new Error(`Unexpected end of ${p2}`);
                a2 = i3.i, e3 = i3.tagContent;
              }
              const n3 = new C(l3);
              m2 && (n3[":@"] = m2), n3.add(r2.textNodeName, e3), this.matcher.pop(), this.isCurrentNodeStopNode = false, this.addChild(i2, n3, this.readonlyMatcher, b2), r2.captureMetaData && i2.addEndIndex(a2 + 1);
            } else {
              if (f2) {
                ({ tagName: l3, tagExp: c2 } = zt(r2.transformTagName, l3, c2, r2));
                const t3 = new C(l3);
                m2 && (t3[":@"] = m2), this.addChild(i2, t3, this.readonlyMatcher, b2), r2.captureMetaData && i2.addEndIndex(d2 + 1), this.matcher.pop(), this.isCurrentNodeStopNode = false;
              } else {
                if (r2.unpairedTagsSet.has(l3)) {
                  const t3 = new C(l3);
                  m2 && (t3[":@"] = m2), this.addChild(i2, t3, this.readonlyMatcher, b2), r2.captureMetaData && i2.addEndIndex(s3.closeIndex + 1), this.matcher.pop(), this.isCurrentNodeStopNode = false, a2 = s3.closeIndex;
                  continue;
                }
                {
                  const t3 = new C(l3);
                  if (this.tagsNodeStack.length > r2.maxNestedTags) throw new Error("Maximum nested tags exceeded");
                  this.tagsNodeStack.push(i2), m2 && (t3[":@"] = m2), this.addChild(i2, t3, this.readonlyMatcher, b2), i2 = t3;
                }
              }
              n2 = "", a2 = d2;
            }
          }
        } else n2 += t2[a2];
        return e2.child;
      };
      function Rt(t2, e2, i2, n2) {
        this.options.captureMetaData || (n2 = void 0);
        const r2 = this.options.jPath ? i2.toString() : i2, s2 = this.options.updateTag(e2.tagname, r2, e2[":@"]);
        false === s2 || ("string" == typeof s2 ? (e2.tagname = s2, t2.addChild(e2, n2)) : t2.addChild(e2, n2));
      }
      function Vt(t2, e2, i2) {
        const n2 = this.options.processEntities;
        if (!n2 || !n2.enabled) return t2;
        if (n2.allowedTags) {
          const r2 = this.options.jPath ? i2.toString() : i2;
          if (!(Array.isArray(n2.allowedTags) ? n2.allowedTags.includes(e2) : n2.allowedTags(e2, r2))) return t2;
        }
        if (n2.tagFilter) {
          const r2 = this.options.jPath ? i2.toString() : i2;
          if (!n2.tagFilter(e2, r2)) return t2;
        }
        return this.entityDecoder.decode(t2);
      }
      function qt(t2, e2, i2, n2) {
        return t2 && (void 0 === n2 && (n2 = 0 === e2.child.length), void 0 !== (t2 = this.parseTextData(t2, e2.tagname, i2, false, !!e2[":@"] && 0 !== Object.keys(e2[":@"]).length, n2)) && "" !== t2 && e2.add(this.options.textNodeName, t2), t2 = ""), t2;
      }
      function Ut() {
        return 0 !== this.stopNodeExpressionsSet.size && this.matcher.matchesAny(this.stopNodeExpressionsSet);
      }
      function Bt(t2, e2, i2, n2) {
        const r2 = t2.indexOf(e2, i2);
        if (-1 === r2) throw new Error(n2);
        return r2 + e2.length - 1;
      }
      function Ft(t2, e2, i2, n2) {
        const r2 = t2.indexOf(e2, i2);
        if (-1 === r2) throw new Error(n2);
        return r2;
      }
      function Gt(t2, e2, i2, n2 = ">") {
        const r2 = (function(t3, e3, i3 = ">") {
          let n3 = 0;
          const r3 = t3.length, s3 = i3.charCodeAt(0), o3 = i3.length > 1 ? i3.charCodeAt(1) : -1;
          let a3 = "", l3 = e3;
          for (let i4 = e3; i4 < r3; i4++) {
            const e4 = t3.charCodeAt(i4);
            if (n3) e4 === n3 && (n3 = 0);
            else if (34 === e4 || 39 === e4) n3 = e4;
            else if (e4 === s3) {
              if (-1 === o3) return a3 += t3.substring(l3, i4), { data: a3, index: i4 };
              if (t3.charCodeAt(i4 + 1) === o3) return a3 += t3.substring(l3, i4), { data: a3, index: i4 };
            } else 9 !== e4 || n3 || (a3 += t3.substring(l3, i4) + " ", l3 = i4 + 1);
          }
        })(t2, e2 + 1, n2);
        if (!r2) return;
        let s2 = r2.data;
        const o2 = r2.index, a2 = s2.search(/\s/);
        let l2 = s2, p2 = true;
        -1 !== a2 && (l2 = s2.substring(0, a2), s2 = s2.substring(a2 + 1).trimStart());
        const c2 = l2;
        if (i2) {
          const t3 = l2.indexOf(":");
          -1 !== t3 && (l2 = l2.substr(t3 + 1), p2 = l2 !== r2.data.substr(t3 + 1));
        }
        return { tagName: l2, tagExp: s2, closeIndex: o2, attrExpPresent: p2, rawTagName: c2 };
      }
      function Xt(t2, e2, i2) {
        const n2 = i2;
        let r2 = 1;
        const s2 = t2.length;
        for (; i2 < s2; i2++) if ("<" === t2[i2]) {
          const s3 = t2.charCodeAt(i2 + 1);
          if (47 === s3) {
            const s4 = Ft(t2, ">", i2, `${e2} is not closed`);
            if (t2.substring(i2 + 2, s4).trim() === e2 && (r2--, 0 === r2)) return { tagContent: t2.substring(n2, i2), i: s4 };
            i2 = s4;
          } else if (63 === s3) i2 = Bt(t2, "?>", i2 + 1, "StopNode is not closed.");
          else if (33 === s3 && 45 === t2.charCodeAt(i2 + 2) && 45 === t2.charCodeAt(i2 + 3)) i2 = Bt(t2, "-->", i2 + 3, "StopNode is not closed.");
          else if (33 === s3 && 91 === t2.charCodeAt(i2 + 2)) i2 = Bt(t2, "]]>", i2, "StopNode is not closed.") - 2;
          else {
            const n3 = Gt(t2, i2, false);
            n3 && ((n3 && n3.tagName) === e2 && "/" !== n3.tagExp[n3.tagExp.length - 1] && r2++, i2 = n3.closeIndex);
          }
        }
      }
      function Wt(t2, e2, i2) {
        if (e2 && "string" == typeof t2) {
          const e3 = t2.trim();
          return "true" === e3 || "false" !== e3 && Z(t2, i2);
        }
        return void 0 !== t2 ? t2 : "";
      }
      function zt(t2, e2, i2, n2) {
        if (t2) {
          const n3 = t2(e2);
          i2 === e2 && (i2 = n3), e2 = n3;
        }
        return { tagName: e2 = Yt(e2, n2), tagExp: i2 };
      }
      function Yt(t2, e2) {
        if (o.includes(t2)) throw new Error(`[SECURITY] Invalid name: "${t2}" is a reserved JavaScript keyword that could cause prototype pollution`);
        return s.includes(t2) ? e2.onDangerousProperty(t2) : t2;
      }
      const Ht = C.getMetaDataSymbol();
      function Qt(t2, e2) {
        if (!t2 || "object" != typeof t2) return {};
        if (!e2) return t2;
        const i2 = {};
        for (const n2 in t2) n2.startsWith(e2) ? i2[n2.substring(e2.length)] = t2[n2] : i2[n2] = t2[n2];
        return i2;
      }
      function Jt(t2, e2, i2, n2) {
        return Zt(t2, e2, i2, n2);
      }
      function Zt(t2, e2, i2, n2) {
        let r2;
        const s2 = {};
        for (let o2 = 0; o2 < t2.length; o2++) {
          const a2 = t2[o2], l2 = Kt(a2);
          if (void 0 !== l2 && l2 !== e2.textNodeName) {
            const t3 = Qt(a2[":@"] || {}, e2.attributeNamePrefix);
            i2.push(l2, t3);
          }
          if (l2 === e2.textNodeName) void 0 === r2 ? r2 = a2[l2] : r2 += "" + a2[l2];
          else {
            if (void 0 === l2) continue;
            if (a2[l2]) {
              let t3 = Zt(a2[l2], e2, i2, n2);
              const r3 = ee(t3, e2);
              if (0 === Object.keys(t3).length && e2.alwaysCreateTextNode && (t3[e2.textNodeName] = ""), a2[":@"] ? te(t3, a2[":@"], n2, e2) : 1 !== Object.keys(t3).length || void 0 === t3[e2.textNodeName] || e2.alwaysCreateTextNode ? 0 === Object.keys(t3).length && (e2.alwaysCreateTextNode ? t3[e2.textNodeName] = "" : t3 = "") : t3 = t3[e2.textNodeName], void 0 !== a2[Ht] && "object" == typeof t3 && null !== t3 && (t3[Ht] = a2[Ht]), void 0 !== s2[l2] && Object.prototype.hasOwnProperty.call(s2, l2)) Array.isArray(s2[l2]) || (s2[l2] = [s2[l2]]), s2[l2].push(t3);
              else {
                const i3 = e2.jPath ? n2.toString() : n2;
                e2.isArray(l2, i3, r3) ? s2[l2] = [t3] : s2[l2] = t3;
              }
              void 0 !== l2 && l2 !== e2.textNodeName && i2.pop();
            }
          }
        }
        return "string" == typeof r2 ? r2.length > 0 && (s2[e2.textNodeName] = r2) : void 0 !== r2 && (s2[e2.textNodeName] = r2), s2;
      }
      function Kt(t2) {
        const e2 = Object.keys(t2);
        for (let t3 = 0; t3 < e2.length; t3++) {
          const i2 = e2[t3];
          if (":@" !== i2) return i2;
        }
      }
      function te(t2, e2, i2, n2) {
        if (e2) {
          const r2 = Object.keys(e2), s2 = r2.length;
          for (let o2 = 0; o2 < s2; o2++) {
            const s3 = r2[o2], a2 = s3.startsWith(n2.attributeNamePrefix) ? s3.substring(n2.attributeNamePrefix.length) : s3, l2 = n2.jPath ? i2.toString() + "." + a2 : i2;
            n2.isArray(s3, l2, true, true) ? t2[s3] = [e2[s3]] : t2[s3] = e2[s3];
          }
        }
      }
      function ee(t2, e2) {
        const { textNodeName: i2 } = e2, n2 = Object.keys(t2).length;
        return 0 === n2 || !(1 !== n2 || !t2[i2] && "boolean" != typeof t2[i2] && 0 !== t2[i2]);
      }
      class ie {
        constructor(t2) {
          this.externalEntities = {}, this.options = T(t2);
        }
        parse(t2, e2) {
          if ("string" != typeof t2 && t2.toString) t2 = t2 instanceof Uint8Array && ("undefined" == typeof Buffer || !Buffer.isBuffer(t2)) ? new TextDecoder("utf-8", { ignoreBOM: true }).decode(t2) : t2.toString();
          else if ("string" != typeof t2) throw new Error("XML data is accepted in String or Bytes[] form.");
          if (e2) {
            true === e2 && (e2 = {});
            const i3 = l(t2, e2);
            if (true !== i3) throw Error(`${i3.err.msg}:${i3.err.line}:${i3.err.col}`);
          }
          const i2 = new It(this.options, this.externalEntities), n2 = i2.parseXml(t2);
          return this.options.preserveOrder || void 0 === n2 ? n2 : Jt(n2, this.options, i2.matcher, i2.readonlyMatcher);
        }
        addEntity(t2, e2) {
          if (-1 !== e2.indexOf("&")) throw new Error("Entity value can't have '&'");
          if (-1 !== t2.indexOf("&") || -1 !== t2.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
          if ("&" === e2) throw new Error("An entity with value '&' is not permitted");
          this.externalEntities[t2] = e2;
        }
        static getMetaDataSymbol() {
          return C.getMetaDataSymbol();
        }
      }
      function ne(t2) {
        return String(t2).replace(/--/g, "- -").replace(/--/g, "- -").replace(/-$/, "- ");
      }
      function re(t2) {
        return String(t2).replace(/\]\]>/g, "]]]]><![CDATA[>");
      }
      function se(t2) {
        return String(t2).replace(/"/g, "&quot;").replace(/'/g, "&apos;");
      }
      const oe = ":A-Za-z_\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD", ae = ":A-Za-z_\xC0-\u02FF\u0370-\u037D\u037F-\u0486\u0488-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}", le = ae + "\\-\\.\\d\xB7\u0300-\u036F\u0487\u203F-\u2040", pe = (t2, e2, i2 = "") => {
        const n2 = `[${t2.replace(":", "")}][${e2.replace(":", "")}]*`;
        return { name: new RegExp(`^[${t2}][${e2}]*$`, i2), ncName: new RegExp(`^${n2}$`, i2), qName: new RegExp(`^${n2}(?::${n2})?$`, i2), nmToken: new RegExp(`^[${e2}]+$`, i2), nmTokens: new RegExp(`^[${e2}]+(?:\\s+[${e2}]+)*$`, i2) };
      }, ce = pe(oe, oe + "\\-\\.\\d\xB7\u0300-\u036F\u203F-\u2040"), he = pe(ae, le, "u"), de = (t2, { xmlVersion: e2 = "1.0" } = {}) => (/* @__PURE__ */ ((t3 = "1.0") => "1.1" === t3 ? he : ce)(e2)).qName.test(t2);
      function ue(t2, e2, i2, n2, r2) {
        return i2.sanitizeName ? de(t2, { xmlVersion: r2 }) ? t2 : i2.sanitizeName(t2, { isAttribute: e2, matcher: n2.readOnly() }) : t2;
      }
      function fe(t2, e2) {
        let i2 = "";
        e2.format && (i2 = "\n");
        const n2 = [];
        if (e2.stopNodes && Array.isArray(e2.stopNodes)) for (let t3 = 0; t3 < e2.stopNodes.length; t3++) {
          const i3 = e2.stopNodes[t3];
          "string" == typeof i3 ? n2.push(new nt(i3)) : i3 instanceof nt && n2.push(i3);
        }
        const r2 = (function(t3, e3) {
          if (!Array.isArray(t3) || 0 === t3.length) return "1.0";
          const i3 = t3[0];
          if ("?xml" === ye(i3)) {
            const t4 = i3[":@"];
            if (t4) {
              const i4 = e3.attributeNamePrefix + "version";
              if (t4[i4]) return t4[i4];
            }
          }
          return "1.0";
        })(t2, e2);
        return ge(t2, e2, i2, new it(), n2, r2);
      }
      function ge(t2, e2, i2, n2, r2, s2) {
        let o2 = "", a2 = false;
        if (e2.maxNestedTags && n2.getDepth() > e2.maxNestedTags) throw new Error("Maximum nested tags exceeded");
        if (!Array.isArray(t2)) {
          if (null != t2) {
            let i3 = t2.toString();
            return i3 = we(i3, e2), i3;
          }
          return "";
        }
        for (let l2 = 0; l2 < t2.length; l2++) {
          const p2 = t2[l2], c2 = ye(p2);
          if (void 0 === c2) continue;
          const h2 = c2 === e2.textNodeName || c2 === e2.cdataPropName || c2 === e2.commentPropName || "?" === c2[0] ? c2 : ue(c2, false, e2, n2, s2), d2 = me(p2[":@"], e2);
          n2.push(h2, d2);
          const u2 = Ee(n2, r2);
          if (h2 === e2.textNodeName) {
            let t3 = p2[c2];
            u2 || (t3 = e2.tagValueProcessor(h2, t3), t3 = we(t3, e2)), a2 && (o2 += i2), o2 += t3, a2 = false, n2.pop();
            continue;
          }
          if (h2 === e2.cdataPropName) {
            a2 && (o2 += i2), o2 += `<![CDATA[${re(p2[c2][0][e2.textNodeName])}]]>`, a2 = false, n2.pop();
            continue;
          }
          if (h2 === e2.commentPropName) {
            o2 += i2 + `<!--${ne(p2[c2][0][e2.textNodeName])}-->`, a2 = true, n2.pop();
            continue;
          }
          if ("?" === h2[0]) {
            o2 += ("?xml" === h2 ? "" : i2) + `<${h2}${Ne(p2[":@"], e2, u2, n2, s2)}?>`, a2 = true, n2.pop();
            continue;
          }
          let f2 = i2;
          "" !== f2 && (f2 += e2.indentBy);
          const g2 = i2 + `<${h2}${Ne(p2[":@"], e2, u2, n2, s2)}`;
          let m2;
          m2 = u2 ? xe(p2[c2], e2) : ge(p2[c2], e2, f2, n2, r2, s2), -1 !== e2.unpairedTags.indexOf(h2) ? e2.suppressUnpairedNode ? o2 += g2 + ">" : o2 += g2 + "/>" : m2 && 0 !== m2.length || !e2.suppressEmptyNode ? m2 && m2.endsWith(">") ? o2 += g2 + `>${m2}${i2}</${h2}>` : (o2 += g2 + ">", m2 && "" !== i2 && (m2.includes("/>") || m2.includes("</")) ? o2 += i2 + e2.indentBy + m2 + i2 : o2 += m2, o2 += `</${h2}>`) : o2 += g2 + "/>", a2 = true, n2.pop();
        }
        return o2;
      }
      function me(t2, e2) {
        if (!t2 || e2.ignoreAttributes) return null;
        const i2 = {};
        let n2 = false;
        for (let r2 in t2) Object.prototype.hasOwnProperty.call(t2, r2) && (i2[r2.startsWith(e2.attributeNamePrefix) ? r2.substr(e2.attributeNamePrefix.length) : r2] = se(t2[r2]), n2 = true);
        return n2 ? i2 : null;
      }
      function xe(t2, e2) {
        if (!Array.isArray(t2)) return null != t2 ? t2.toString() : "";
        let i2 = "";
        for (let n2 = 0; n2 < t2.length; n2++) {
          const r2 = t2[n2], s2 = ye(r2);
          if (s2 === e2.textNodeName) i2 += r2[s2];
          else if (s2 === e2.cdataPropName) i2 += r2[s2][0][e2.textNodeName];
          else if (s2 === e2.commentPropName) i2 += r2[s2][0][e2.textNodeName];
          else {
            if (s2 && "?" === s2[0]) continue;
            if (s2) {
              const t3 = be(r2[":@"], e2), n3 = xe(r2[s2], e2);
              n3 && 0 !== n3.length ? i2 += `<${s2}${t3}>${n3}</${s2}>` : i2 += `<${s2}${t3}/>`;
            }
          }
        }
        return i2;
      }
      function be(t2, e2) {
        let i2 = "";
        if (t2 && !e2.ignoreAttributes) for (let n2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, n2)) continue;
          let r2 = t2[n2];
          true === r2 && e2.suppressBooleanAttributes ? i2 += ` ${n2.substr(e2.attributeNamePrefix.length)}` : i2 += ` ${n2.substr(e2.attributeNamePrefix.length)}="${se(r2)}"`;
        }
        return i2;
      }
      function ye(t2) {
        const e2 = Object.keys(t2);
        for (let i2 = 0; i2 < e2.length; i2++) {
          const n2 = e2[i2];
          if (Object.prototype.hasOwnProperty.call(t2, n2) && ":@" !== n2) return n2;
        }
      }
      function Ne(t2, e2, i2, n2, r2) {
        let s2 = "";
        if (t2 && !e2.ignoreAttributes) for (let o2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, o2)) continue;
          const a2 = o2.substr(e2.attributeNamePrefix.length), l2 = i2 ? a2 : ue(a2, true, e2, n2, r2);
          let p2;
          i2 ? p2 = t2[o2] : (p2 = e2.attributeValueProcessor(o2, t2[o2]), p2 = we(p2, e2)), true === p2 && e2.suppressBooleanAttributes ? s2 += ` ${l2}` : s2 += ` ${l2}="${se(p2)}"`;
        }
        return s2;
      }
      function Ee(t2, e2) {
        if (!e2 || 0 === e2.length) return false;
        for (let i2 = 0; i2 < e2.length; i2++) if (t2.matches(e2[i2])) return true;
        return false;
      }
      function we(t2, e2) {
        if (t2 && t2.length > 0 && e2.processEntities) for (let i2 = 0; i2 < e2.entities.length; i2++) {
          const n2 = e2.entities[i2];
          t2 = t2.replace(n2.regex, n2.val);
        }
        return t2;
      }
      const ve = { attributeNamePrefix: "@_", attributesGroupName: false, textNodeName: "#text", ignoreAttributes: true, cdataPropName: false, format: false, indentBy: "  ", suppressEmptyNode: false, suppressUnpairedNode: true, suppressBooleanAttributes: true, tagValueProcessor: function(t2, e2) {
        return e2;
      }, attributeValueProcessor: function(t2, e2) {
        return e2;
      }, preserveOrder: false, commentPropName: false, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: true, stopNodes: [], oneListGroup: false, maxNestedTags: 100, jPath: true, sanitizeName: false };
      function Se(t2) {
        if (this.options = Object.assign({}, ve, t2), this.options.stopNodes && Array.isArray(this.options.stopNodes) && (this.options.stopNodes = this.options.stopNodes.map((t3) => "string" == typeof t3 && t3.startsWith("*.") ? ".." + t3.substring(2) : t3)), this.stopNodeExpressions = [], this.options.stopNodes && Array.isArray(this.options.stopNodes)) for (let t3 = 0; t3 < this.options.stopNodes.length; t3++) {
          const e3 = this.options.stopNodes[t3];
          "string" == typeof e3 ? this.stopNodeExpressions.push(new nt(e3)) : e3 instanceof nt && this.stopNodeExpressions.push(e3);
        }
        var e2;
        true === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
          return false;
        } : (this.ignoreAttributesFn = "function" == typeof (e2 = this.options.ignoreAttributes) ? e2 : Array.isArray(e2) ? (t3) => {
          for (const i2 of e2) {
            if ("string" == typeof i2 && t3 === i2) return true;
            if (i2 instanceof RegExp && i2.test(t3)) return true;
          }
        } : () => false, this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = Ce), this.processTextOrObjNode = Te, this.options.format ? (this.indentate = _e, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function() {
          return "";
        }, this.tagEndChar = ">", this.newLine = "");
      }
      function Ae(t2, e2, i2, n2, r2) {
        return i2.sanitizeName ? de(t2, { xmlVersion: r2 }) ? t2 : i2.sanitizeName(t2, { isAttribute: e2, matcher: n2.readOnly() }) : t2;
      }
      function Te(t2, e2, i2, n2, r2) {
        const s2 = this.extractAttributes(t2);
        if (n2.push(e2, s2), this.checkStopNode(n2)) {
          const r3 = this.buildRawContent(t2), s3 = this.buildAttributesForStopNode(t2);
          return n2.pop(), this.buildObjectNode(r3, e2, s3, i2);
        }
        const o2 = this.j2x(t2, i2 + 1, n2, r2);
        return n2.pop(), "?" === e2[0] ? this.buildTextValNode("", e2, o2.attrStr, i2, n2) : void 0 !== t2[this.options.textNodeName] && 1 === Object.keys(t2).length ? this.buildTextValNode(t2[this.options.textNodeName], e2, o2.attrStr, i2, n2) : this.buildObjectNode(o2.val, e2, o2.attrStr, i2);
      }
      function _e(t2) {
        return this.options.indentBy.repeat(t2);
      }
      function Ce(t2) {
        return !(!t2.startsWith(this.options.attributeNamePrefix) || t2 === this.options.textNodeName) && t2.substr(this.attrPrefixLen);
      }
      Se.prototype.build = function(t2) {
        if (this.options.preserveOrder) return fe(t2, this.options);
        {
          Array.isArray(t2) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t2 = { [this.options.arrayNodeName]: t2 });
          const e2 = new it(), i2 = (function(t3, e3) {
            const i3 = t3["?xml"];
            if (i3 && "object" == typeof i3) {
              if (e3.attributesGroupName && i3[e3.attributesGroupName]) {
                const t5 = i3[e3.attributesGroupName][e3.attributeNamePrefix + "version"];
                if (t5) return t5;
              }
              const t4 = i3[e3.attributeNamePrefix + "version"];
              if (t4) return t4;
            }
            return "1.0";
          })(t2, this.options);
          return this.j2x(t2, 0, e2, i2).val;
        }
      }, Se.prototype.j2x = function(t2, e2, i2, n2) {
        let r2 = "", s2 = "";
        if (this.options.maxNestedTags && i2.getDepth() >= this.options.maxNestedTags) throw new Error("Maximum nested tags exceeded");
        const o2 = this.options.jPath ? i2.toString() : i2, a2 = this.checkStopNode(i2);
        for (let l2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, l2)) continue;
          const p2 = l2 === this.options.textNodeName || l2 === this.options.cdataPropName || l2 === this.options.commentPropName || this.options.attributesGroupName && l2 === this.options.attributesGroupName || this.isAttribute(l2) || "?" === l2[0] ? l2 : Ae(l2, false, this.options, i2, n2);
          if (void 0 === t2[l2]) this.isAttribute(l2) && (s2 += "");
          else if (null === t2[l2]) this.isAttribute(l2) || p2 === this.options.cdataPropName || p2 === this.options.commentPropName ? s2 += "" : "?" === p2[0] ? s2 += this.indentate(e2) + "<" + p2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + p2 + "/" + this.tagEndChar;
          else if (t2[l2] instanceof Date) s2 += this.buildTextValNode(t2[l2], p2, "", e2, i2);
          else if ("object" != typeof t2[l2]) {
            const c2 = this.isAttribute(l2);
            if (c2 && !this.ignoreAttributesFn(c2, o2)) {
              const e3 = Ae(c2, true, this.options, i2, n2);
              r2 += this.buildAttrPairStr(e3, "" + t2[l2], a2);
            } else if (!c2) if (l2 === this.options.textNodeName) {
              let e3 = this.options.tagValueProcessor(l2, "" + t2[l2]);
              s2 += this.replaceEntitiesValue(e3);
            } else {
              i2.push(p2);
              const n3 = this.checkStopNode(i2);
              if (i2.pop(), n3) {
                const i3 = "" + t2[l2];
                s2 += "" === i3 ? this.indentate(e2) + "<" + p2 + this.closeTag(p2) + this.tagEndChar : this.indentate(e2) + "<" + p2 + ">" + i3 + "</" + p2 + this.tagEndChar;
              } else s2 += this.buildTextValNode(t2[l2], p2, "", e2, i2);
            }
          } else if (Array.isArray(t2[l2])) {
            const r3 = t2[l2].length;
            let o3 = "", a3 = "";
            for (let c2 = 0; c2 < r3; c2++) {
              const r4 = t2[l2][c2];
              if (void 0 === r4) ;
              else if (null === r4) "?" === p2[0] ? s2 += this.indentate(e2) + "<" + p2 + "?" + this.tagEndChar : s2 += this.indentate(e2) + "<" + p2 + "/" + this.tagEndChar;
              else if ("object" == typeof r4) if (this.options.oneListGroup) {
                i2.push(p2);
                const t3 = this.j2x(r4, e2 + 1, i2, n2);
                i2.pop(), o3 += t3.val, this.options.attributesGroupName && r4.hasOwnProperty(this.options.attributesGroupName) && (a3 += t3.attrStr);
              } else o3 += this.processTextOrObjNode(r4, p2, e2, i2, n2);
              else if (this.options.oneListGroup) {
                let t3 = this.options.tagValueProcessor(p2, r4);
                t3 = this.replaceEntitiesValue(t3), o3 += t3;
              } else {
                i2.push(p2);
                const t3 = this.checkStopNode(i2);
                if (i2.pop(), t3) {
                  const t4 = "" + r4;
                  o3 += "" === t4 ? this.indentate(e2) + "<" + p2 + this.closeTag(p2) + this.tagEndChar : this.indentate(e2) + "<" + p2 + ">" + t4 + "</" + p2 + this.tagEndChar;
                } else o3 += this.buildTextValNode(r4, p2, "", e2, i2);
              }
            }
            this.options.oneListGroup && (o3 = this.buildObjectNode(o3, p2, a3, e2)), s2 += o3;
          } else if (this.options.attributesGroupName && l2 === this.options.attributesGroupName) {
            const e3 = Object.keys(t2[l2]), s3 = e3.length;
            for (let o3 = 0; o3 < s3; o3++) {
              const s4 = Ae(e3[o3], true, this.options, i2, n2);
              r2 += this.buildAttrPairStr(s4, "" + t2[l2][e3[o3]], a2);
            }
          } else s2 += this.processTextOrObjNode(t2[l2], p2, e2, i2, n2);
        }
        return { attrStr: r2, val: s2 };
      }, Se.prototype.buildAttrPairStr = function(t2, e2, i2) {
        return i2 || (e2 = this.options.attributeValueProcessor(t2, "" + e2), e2 = this.replaceEntitiesValue(e2)), this.options.suppressBooleanAttributes && "true" === e2 ? " " + t2 : " " + t2 + '="' + se(e2) + '"';
      }, Se.prototype.extractAttributes = function(t2) {
        if (!t2 || "object" != typeof t2) return null;
        const e2 = {};
        let i2 = false;
        if (this.options.attributesGroupName && t2[this.options.attributesGroupName]) {
          const n2 = t2[this.options.attributesGroupName];
          for (let t3 in n2) Object.prototype.hasOwnProperty.call(n2, t3) && (e2[t3.startsWith(this.options.attributeNamePrefix) ? t3.substring(this.options.attributeNamePrefix.length) : t3] = se(n2[t3]), i2 = true);
        } else for (let n2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, n2)) continue;
          const r2 = this.isAttribute(n2);
          r2 && (e2[r2] = se(t2[n2]), i2 = true);
        }
        return i2 ? e2 : null;
      }, Se.prototype.buildRawContent = function(t2) {
        if ("string" == typeof t2) return t2;
        if ("object" != typeof t2 || null === t2) return String(t2);
        if (void 0 !== t2[this.options.textNodeName]) return t2[this.options.textNodeName];
        let e2 = "";
        for (let i2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, i2)) continue;
          if (this.isAttribute(i2)) continue;
          if (this.options.attributesGroupName && i2 === this.options.attributesGroupName) continue;
          const n2 = t2[i2];
          if (i2 === this.options.textNodeName) e2 += n2;
          else if (Array.isArray(n2)) {
            for (let t3 of n2) if ("string" == typeof t3 || "number" == typeof t3) e2 += `<${i2}>${t3}</${i2}>`;
            else if ("object" == typeof t3 && null !== t3) {
              const n3 = this.buildRawContent(t3), r2 = this.buildAttributesForStopNode(t3);
              e2 += "" === n3 ? `<${i2}${r2}/>` : `<${i2}${r2}>${n3}</${i2}>`;
            }
          } else if ("object" == typeof n2 && null !== n2) {
            const t3 = this.buildRawContent(n2), r2 = this.buildAttributesForStopNode(n2);
            e2 += "" === t3 ? `<${i2}${r2}/>` : `<${i2}${r2}>${t3}</${i2}>`;
          } else e2 += `<${i2}>${n2}</${i2}>`;
        }
        return e2;
      }, Se.prototype.buildAttributesForStopNode = function(t2) {
        if (!t2 || "object" != typeof t2) return "";
        let e2 = "";
        if (this.options.attributesGroupName && t2[this.options.attributesGroupName]) {
          const i2 = t2[this.options.attributesGroupName];
          for (let t3 in i2) {
            if (!Object.prototype.hasOwnProperty.call(i2, t3)) continue;
            const n2 = t3.startsWith(this.options.attributeNamePrefix) ? t3.substring(this.options.attributeNamePrefix.length) : t3, r2 = i2[t3];
            true === r2 && this.options.suppressBooleanAttributes ? e2 += " " + n2 : e2 += " " + n2 + '="' + r2 + '"';
          }
        } else for (let i2 in t2) {
          if (!Object.prototype.hasOwnProperty.call(t2, i2)) continue;
          const n2 = this.isAttribute(i2);
          if (n2) {
            const r2 = t2[i2];
            true === r2 && this.options.suppressBooleanAttributes ? e2 += " " + n2 : e2 += " " + n2 + '="' + r2 + '"';
          }
        }
        return e2;
      }, Se.prototype.buildObjectNode = function(t2, e2, i2, n2) {
        if ("" === t2) return "?" === e2[0] ? this.indentate(n2) + "<" + e2 + i2 + "?" + this.tagEndChar : this.indentate(n2) + "<" + e2 + i2 + this.closeTag(e2) + this.tagEndChar;
        if ("?" === e2[0]) return this.indentate(n2) + "<" + e2 + i2 + "?" + this.tagEndChar;
        {
          let r2 = "</" + e2 + this.tagEndChar, s2 = "";
          return "?" === e2[0] && (s2 = "?", r2 = ""), !i2 && "" !== i2 || -1 !== t2.indexOf("<") ? false !== this.options.commentPropName && e2 === this.options.commentPropName && 0 === s2.length ? this.indentate(n2) + `<!--${t2}-->` + this.newLine : this.indentate(n2) + "<" + e2 + i2 + s2 + this.tagEndChar + t2 + this.indentate(n2) + r2 : this.indentate(n2) + "<" + e2 + i2 + s2 + ">" + t2 + r2;
        }
      }, Se.prototype.closeTag = function(t2) {
        let e2 = "";
        return -1 !== this.options.unpairedTags.indexOf(t2) ? this.options.suppressUnpairedNode || (e2 = "/") : e2 = this.options.suppressEmptyNode ? "/" : `></${t2}`, e2;
      }, Se.prototype.checkStopNode = function(t2) {
        if (!this.stopNodeExpressions || 0 === this.stopNodeExpressions.length) return false;
        for (let e2 = 0; e2 < this.stopNodeExpressions.length; e2++) if (t2.matches(this.stopNodeExpressions[e2])) return true;
        return false;
      }, Se.prototype.buildTextValNode = function(t2, e2, i2, n2, r2) {
        if (false !== this.options.cdataPropName && e2 === this.options.cdataPropName) {
          const e3 = re(t2);
          return this.indentate(n2) + `<![CDATA[${e3}]]>` + this.newLine;
        }
        if (false !== this.options.commentPropName && e2 === this.options.commentPropName) {
          const e3 = ne(t2);
          return this.indentate(n2) + `<!--${e3}-->` + this.newLine;
        }
        if ("?" === e2[0]) return this.indentate(n2) + "<" + e2 + i2 + "?" + this.tagEndChar;
        {
          let r3 = this.options.tagValueProcessor(e2, t2);
          return r3 = this.replaceEntitiesValue(r3), "" === r3 ? this.indentate(n2) + "<" + e2 + i2 + this.closeTag(e2) + this.tagEndChar : this.indentate(n2) + "<" + e2 + i2 + ">" + r3 + "</" + e2 + this.tagEndChar;
        }
      }, Se.prototype.replaceEntitiesValue = function(t2) {
        if (t2 && t2.length > 0 && this.options.processEntities) for (let e2 = 0; e2 < this.options.entities.length; e2++) {
          const i2 = this.options.entities[e2];
          t2 = t2.replace(i2.regex, i2.val);
        }
        return t2;
      };
      const $e = Se, Pe = { validate: l };
      module2.exports = e;
    })();
  }
});

// schema/parse.js
var require_parse = __commonJS({
  "schema/parse.js"(exports2, module2) {
    var { XMLParser } = require_fxp();
    var { TYPES } = require_catalog();
    var { outputKey } = require_ports();
    var parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      isArray: (name) => name === "mxCell" || name === "mxPoint"
    });
    var BLOCK_TYPES = new Set(TYPES);
    function parseModule(module3, template) {
      const visual = parseTemplate(template || module3.Template || "");
      const visualByCell = new Map(visual.blocks.map((block) => [block.cellId, block]));
      const blocks = (module3.Blocks || []).map((block) => logicalBlock(block, visualByCell.get(Number(block.CellID))));
      const byId = new Map(blocks.map((block) => [block.id, block]));
      return {
        id: module3.ID,
        dataId: module3.DataID,
        applicationDataId: module3.ApplicationDataID ?? null,
        name: module3.Name,
        description: module3.Description || "",
        variables: module3.Variables || [],
        blocks,
        edges: logicalEdges(module3.Blocks || [], byId)
      };
    }
    function logicalBlock(block, visual) {
      return {
        key: `b${block.ID}`,
        id: block.ID,
        cellId: block.CellID,
        type: block.Type,
        name: block.Name,
        description: block.Description || "",
        log: !!block.Log,
        x: visual?.x ?? null,
        y: visual?.y ?? null,
        width: visual?.width || null,
        height: visual?.height || null,
        stack: visual?.stack || 0,
        params: parseExt(block.ExtData),
        outputIds: Object.fromEntries((block.Outputs || []).map((output) => [output.OutputID ?? "", output.ID]))
      };
    }
    function logicalEdges(blocks, byId) {
      const edges = [];
      blocks.forEach((block) => {
        (block.Outputs || []).forEach((output) => {
          const target = byId.get(output.NextBlockID);
          if (!target) return;
          edges.push({
            from: `b${block.ID}`,
            to: target.key,
            output: output.OutputID ? output.OutputID : null
          });
        });
      });
      return edges;
    }
    function parseTemplate(xml) {
      if (!xml) return { blocks: [], edges: [] };
      const document = parser.parse(xml);
      const root = cellsOf(document.mxGraphModel?.root);
      const blocks = root.filter((cell) => BLOCK_TYPES.has(attr(cell, "componentType"))).map((cell) => visualBlock(cell, root));
      const ports = /* @__PURE__ */ new Map();
      blocks.forEach((block) => block.outputs.forEach((port) => ports.set(port.cellId, { block, port })));
      const inputs = /* @__PURE__ */ new Map();
      blocks.forEach((block) => {
        if (block.inputCellId) inputs.set(block.inputCellId, block);
      });
      const edges = root.filter((cell) => attr(cell, "edge") != null).map((cell) => ({
        source: ports.get(numberAttr(cell, "source")),
        target: inputs.get(numberAttr(cell, "target"))
      })).filter((edge) => edge.source && edge.target);
      return { blocks, edges };
    }
    function visualBlock(cell, root) {
      const geometry = cell.mxGeometry || {};
      const children = childrenOf(cell, root);
      const outputs = children.filter((child) => attr(child, "componentType") === "OutputPoint").map(visualPort);
      const input = children.find((child) => attr(child, "componentType") === "InputPoint");
      return {
        cellId: numberAttr(cell, "id"),
        type: attr(cell, "componentType"),
        style: attr(cell, "style") || "",
        x: numberAttr(geometry, "x"),
        y: numberAttr(geometry, "y"),
        width: numberAttr(geometry, "width"),
        height: numberAttr(geometry, "height"),
        inputCellId: input ? numberAttr(input, "id") : null,
        outputs,
        stack: outputs.filter((port) => port.stacked).length
      };
    }
    function childrenOf(cell, root) {
      const id = attr(cell, "id");
      const flat = root.filter((item) => attr(item, "parent") === id);
      return flat.length ? flat : cellsOf(cell);
    }
    function visualPort(cell) {
      const geometry = cell.mxGeometry || {};
      const offset = (geometry.mxPoint || [])[0] || {};
      const offsetY = numberAttr(offset, "y");
      return {
        cellId: numberAttr(cell, "id"),
        value: attr(cell, "outputValue") ?? null,
        stacked: numberAttr(geometry, "y") === 1 && offsetY > 0
      };
    }
    function parseExt(value) {
      if (!value) return {};
      try {
        return JSON.parse(value);
      } catch {
        return {};
      }
    }
    function cellsOf(node) {
      if (!node?.mxCell) return [];
      return Array.isArray(node.mxCell) ? node.mxCell : [node.mxCell];
    }
    function attr(node, name) {
      if (!node) return null;
      const value = node[`@_${name}`];
      return value == null ? null : String(value);
    }
    function numberAttr(node, name) {
      const value = attr(node, name);
      return value == null ? 0 : Number(value);
    }
    module2.exports = { parseModule, parseTemplate, outputKey };
  }
});

// modules.js
var require_modules = __commonJS({
  "modules.js"(exports2, module2) {
    var { callOperation } = require_client();
    var { compile } = require_compile();
    var { parseModule } = require_parse();
    async function getModule(id) {
      const response = await callOperation("Designer_Get", { body: { id } });
      const module3 = response?.Module || response;
      if (!module3?.ID) throw new Error(`\u041C\u043E\u0434\u0443\u043B\u044C ${id} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D`);
      return {
        raw: module3,
        graph: parseModule(module3, response.Template || module3.Template)
      };
    }
    async function saveModule(graph) {
      assertSingleModule(graph);
      const layout = graph.layout || "keep";
      const loaded = await getModule(graph.id);
      const compiled = compile({ ...graph, layout }, loaded?.graph);
      const menu = menuPayload(graph, loaded?.raw, compiled);
      const saved = await callOperation("Designer_Save", { body: { Menu: menu, AsVersion: !!graph.asVersion } });
      const savedId = saved?.Part?.ID || menu.ID;
      const reloaded = await getModule(savedId);
      const validation = await callOperation("Designer_Validate", { body: { Menu: reloaded.raw } });
      return { id: savedId, validation, graph: reloaded.graph };
    }
    function assertSingleModule(graph) {
      if (!graph.id) {
        throw new Error("\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F: \u043E\u0434\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2014 \u043E\u0434\u0438\u043D \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u043C\u043E\u0434\u0443\u043B\u044C. \u041F\u0435\u0440\u0435\u0434\u0430\u0439 id RootModule \u0438\u0437 Application_Edit \u0438\u043B\u0438 Application_Get.");
      }
      const transfer = (graph.blocks || []).find((block) => block.type === "Transfer" && !block.id);
      if (transfer) {
        throw new Error(`\u0411\u043B\u043E\u043A ${transfer.key}: \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043C\u043E\u0434\u0443\u043B\u044E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u0412\u0441\u0442\u0440\u043E\u0439 \u043B\u043E\u0433\u0438\u043A\u0443 \u0432 \u043C\u043E\u0434\u0443\u043B\u044C \u0447\u0435\u0440\u0435\u0437 Marker/GoTo \u0438\u043B\u0438 \u0432\u044B\u043D\u0435\u0441\u0438 \u0435\u0451 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438 \u0432\u044B\u0437\u043E\u0432\u0438 TransferToApp.`);
      }
    }
    function menuPayload(graph, raw, compiled) {
      return {
        ID: graph.id || 0,
        DataID: raw?.DataID || 0,
        Name: graph.name,
        Description: graph.description ?? raw?.Description ?? "",
        ApplicationDataID: graph.applicationDataId ?? raw?.ApplicationDataID ?? null,
        Variables: graph.variables ?? raw?.Variables ?? [],
        Template: compiled.template,
        Blocks: compiled.blocks
      };
    }
    module2.exports = { getModule, saveModule };
  }
});

// sounds.js
var require_sounds = __commonJS({
  "sounds.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var { accessToken } = require_auth();
    var { baseUrl } = require_client();
    async function uploadSound(args) {
      const file = await uploadFile(args.filePath);
      return saveSoundGroup({
        ID: 0,
        Name: args.name,
        Description: args.description || "",
        Tags: args.tags || "",
        ApplicationDataID: args.applicationDataId,
        FileId: file.ID
      });
    }
    async function uploadFile(filePath) {
      const form = new FormData();
      const data = fs.readFileSync(filePath);
      form.append("file", new Blob([data]), path.basename(filePath));
      return postAudio("UploadFile", form);
    }
    async function saveSoundGroup(group) {
      return postAudio("EditGroup", JSON.stringify(group), { "Content-Type": "application/json" });
    }
    async function postAudio(action, body, extraHeaders = {}) {
      const token = await accessToken();
      const response = await fetch(`${baseUrl()}/Audio/${action}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, Accept: "application/json", ...extraHeaders },
        body
      });
      const text = await response.text();
      if (!response.ok) throw new Error(`Audio/${action} \u0432\u0435\u0440\u043D\u0443\u043B ${response.status}: ${text.slice(0, 800)}`);
      return JSON.parse(text);
    }
    module2.exports = { uploadSound };
  }
});

// tools.js
var require_tools = __commonJS({
  "tools.js"(exports2, module2) {
    var { searchOperations, callOperation } = require_client();
    var { getModule, saveModule } = require_modules();
    var { uploadSound } = require_sounds();
    var tools = [
      tool("isivr_operations", "\u041D\u0430\u0439\u0442\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E API ISIVR \u043F\u043E \u0438\u043C\u0435\u043D\u0438, \u043F\u0443\u0442\u0438 \u0438\u043B\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044E. \u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u2014 swagger \u043F\u043B\u044E\u0441 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0438\u0437 extra-operations.json, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0432 swagger \u043D\u0435\u0442: \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0438, \u0437\u0432\u0443\u043A\u0438, \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438.", {
        type: "object",
        properties: {
          query: { type: "string", description: "\u0427\u0430\u0441\u0442\u044C operationId, \u043F\u0443\u0442\u0438 \u0438\u043B\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F. \u041F\u0443\u0441\u0442\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A." }
        }
      }, (args) => searchOperations(args.query)),
      tool("isivr_call", "\u0412\u044B\u0437\u0432\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E API ISIVR \u043F\u043E operationId \u0438\u0437 isivr_operations. \u0422\u0435\u043B\u043E \u2014 JSON, \u0438\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0435\u0439 \u043A\u0430\u043A \u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F.", {
        type: "object",
        properties: {
          operation: { type: "string", description: "operationId, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 Application_Edit \u0438\u043B\u0438 Designer_Get" },
          body: { type: "object", description: "JSON-\u0442\u0435\u043B\u043E POST" },
          query: { type: "object", description: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B query string" }
        },
        required: ["operation"]
      }, (args) => callOperation(args.operation, args)),
      tool("isivr_get_module", "\u041F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043C\u043E\u0434\u0443\u043B\u044C \u043A\u0430\u043A \u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0445\u0435\u043C\u0443: \u0431\u043B\u043E\u043A\u0438, \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0440\u0451\u0431\u0440\u0430 \u0438 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B. XML Template \u043D\u0435 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442.", {
        type: "object",
        properties: {
          id: { type: "number", description: "ID \u043C\u043E\u0434\u0443\u043B\u044F" }
        },
        required: ["id"]
      }, (args) => getModule(args.id).then((loaded) => loaded.graph)),
      tool("isivr_save_module", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u043C\u043E\u0434\u0443\u043B\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041E\u0434\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2014 \u043E\u0434\u0438\u043D \u043C\u043E\u0434\u0443\u043B\u044C: \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u043E\u0434\u0443\u043B\u0438 \u0438 \u043D\u043E\u0432\u044B\u0435 \u0431\u043B\u043E\u043A\u0438 Transfer \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F; \u043E\u0431\u0449\u0443\u044E \u043B\u043E\u0433\u0438\u043A\u0443 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0439 \u0447\u0435\u0440\u0435\u0437 Marker/GoTo \u0438\u043B\u0438 \u0432\u044B\u043D\u043E\u0441\u0438 \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 TransferToApp. \u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440. layout=full \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0435\u0442 \u0437\u0430\u043D\u043E\u0432\u043E, keep \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438, incremental \u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u043E\u0432\u044B\u0435 \u0431\u043B\u043E\u043A\u0438. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E keep.", {
        type: "object",
        properties: {
          id: { type: "number", description: "ID \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F (RootModule.ID \u0438\u0437 Application_Edit \u0438\u043B\u0438 Application_Get)" },
          applicationDataId: { type: "number", description: "DataID \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F" },
          name: { type: "string" },
          description: { type: "string" },
          layout: { type: "string", enum: ["full", "keep", "incremental"] },
          variables: { type: "array" },
          blocks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                key: { type: "string" },
                id: { type: "number" },
                cellId: { type: "number", description: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u044F\u0447\u0435\u0439\u043A\u0438. \u0417\u0430\u0434\u0430\u0439 \u0435\u0433\u043E \u043C\u0435\u0442\u043A\u0435, \u0447\u0442\u043E\u0431\u044B GoTo \u043C\u043E\u0433 \u0441\u043E\u0441\u043B\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u0435\u0451 \u0447\u0435\u0440\u0435\u0437 MarkerBlockCellID \u0432 \u0442\u043E\u043C \u0436\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438. \u0414\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u0432 \u043C\u043E\u0434\u0443\u043B\u0435." },
                type: { type: "string" },
                name: { type: "string" },
                description: { type: "string" },
                params: { type: "object" }
              },
              required: ["key", "type"]
            }
          },
          edges: {
            type: "array",
            items: {
              type: "object",
              properties: {
                from: { type: "string" },
                to: { type: "string" },
                output: { type: "string", description: "\u0418\u043C\u044F \u0432\u044B\u0445\u043E\u0434\u0430. null \u0438\u043B\u0438 \u043F\u0443\u0441\u0442\u043E \u2014 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0445\u043E\u0434" }
              },
              required: ["from", "to"]
            }
          }
        },
        required: ["id", "name", "blocks", "edges"]
      }, (args) => saveModule(args)),
      tool("isivr_upload_sound", "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0432\u0443\u043A \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438. \u0421\u0435\u0440\u0432\u0435\u0440 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0444\u0430\u0439\u043B \u0432 WAV. \u0412 \u0431\u043B\u043E\u043A\u0430\u0445 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 DataID \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u0430.", {
        type: "object",
        properties: {
          filePath: { type: "string", description: "\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u043A \u0430\u0443\u0434\u0438\u043E\u0444\u0430\u0439\u043B\u0443" },
          applicationDataId: { type: "number", description: "DataID \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F" },
          name: { type: "string", description: "\u0418\u043C\u044F \u0437\u0432\u0443\u043A\u0430, \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u0434\u043E 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" },
          description: { type: "string", description: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435, \u0434\u043E 100 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" },
          tags: { type: "string", description: "\u0422\u0435\u0433\u0438, \u0434\u043E 50 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }
        },
        required: ["filePath", "applicationDataId", "name"]
      }, (args) => uploadSound(args))
    ];
    function tool(name, description, inputSchema, handler) {
      return { name, description, inputSchema, handler };
    }
    function listTools2() {
      return tools.map(({ name, description, inputSchema }) => ({ name, description, inputSchema }));
    }
    async function callTool2(name, args) {
      const found = tools.find((item) => item.name === name);
      if (!found) throw new Error(`\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D: ${name}`);
      const result = await found.handler(args || {});
      return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
    }
    module2.exports = { listTools: listTools2, callTool: callTool2 };
  }
});

// server.js
var { loadEnv } = require_env();
loadEnv();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var { listTools, callTool } = require_tools();
var SUPPORTED_PROTOCOLS = ["2024-11-05", "2025-03-26", "2025-06-18"];
var buffer = Buffer.alloc(0);
process.stderr.write("isivr listening\n");
process.stdin.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  try {
    drain();
  } catch (error) {
    process.stderr.write(`${error.message}
`);
  }
});
function drain() {
  const end = buffer.indexOf("\n");
  if (end === -1) return;
  const line = buffer.slice(0, end).toString("utf8").replace(/\r$/, "");
  buffer = buffer.slice(end + 1);
  if (line.trim()) handleMessage(JSON.parse(line));
  drain();
}
function handleMessage(message) {
  process.stderr.write(`isivr ${message.method || "response"}
`);
  if (message.id == null) return;
  dispatch(message).then(
    (result) => send({ jsonrpc: "2.0", id: message.id, result }),
    (error) => send({ jsonrpc: "2.0", id: message.id, error: { code: -32603, message: error.message } })
  );
}
async function dispatch(message) {
  if (message.method === "initialize") return initialize(message.params || {});
  if (message.method === "ping") return {};
  if (message.method === "tools/list") return { tools: listTools() };
  if (message.method === "tools/call") return callTool(message.params.name, message.params.arguments);
  throw new Error(`\u041C\u0435\u0442\u043E\u0434 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F: ${message.method}`);
}
function initialize(params) {
  const requested = params.protocolVersion;
  const protocolVersion = SUPPORTED_PROTOCOLS.includes(requested) ? requested : SUPPORTED_PROTOCOLS[0];
  return {
    protocolVersion,
    capabilities: { tools: {} },
    serverInfo: { name: "isivr", version: "0.1.0" }
  };
}
function send(message) {
  process.stdout.write(`${JSON.stringify(message)}
`);
}
