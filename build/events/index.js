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
exports.EventSource = exports.AllEventsTypes = void 0;
const user_service_events_1 = require("./user-service.events");
__exportStar(require("./eventSchema"), exports);
__exportStar(require("./user-service.events"), exports);
exports.AllEventsTypes = Object.assign({}, user_service_events_1.UserEventsTypes);
var EventSource;
(function (EventSource) {
    EventSource["USER_SERVICE"] = "user-service";
    EventSource["NOTIFICATION_SERVICE"] = "notification-service";
})(EventSource || (exports.EventSource = EventSource = {}));
