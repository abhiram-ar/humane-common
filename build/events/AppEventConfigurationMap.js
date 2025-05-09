"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEventConfigurations = void 0;
// central event registry
const _1 = require(".");
const user_service_events_1 = require("./user-service.events");
exports.appEventConfigurations = {
    [user_service_events_1.UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED]: {
        source: _1.AppEventSource.USER_SERVICE,
    },
    [user_service_events_1.UserEventsTypes.USER_SINGUP]: {
        source: _1.AppEventSource.USER_SERVICE,
    },
};
