"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEventSource = exports.AppEventsTypes = void 0;
__exportStar(require("./eventSchema"), exports);
__exportStar(require("./user-service.events"), exports);
__exportStar(require("./createEvent"), exports);
__exportStar(require("./kafkaTopics"), exports);
const user_service_events_1 = require("./user-service.events");
exports.AppEventsTypes = Object.assign({}, user_service_events_1.UserEventsTypes);
var AppEventSource;
(function (AppEventSource) {
    AppEventSource["USER_SERVICE"] = "user-service";
    AppEventSource["NOTIFICATION_SERVICE"] = "notification-service";
})(AppEventSource || (exports.AppEventSource = AppEventSource = {}));
