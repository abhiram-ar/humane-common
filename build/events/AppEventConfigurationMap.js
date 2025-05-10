"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEventConfigurations = void 0;
// central event registry
const AppEventSource_1 = require("./AppEventSource");
const user_service_events_1 = require("./user-service.events");
exports.appEventConfigurations = {
    [user_service_events_1.UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED]: {
        source: AppEventSource_1.AppEventSource.USER_SERVICE,
    },
    [user_service_events_1.UserEventsTypes.USER_SINGUP]: {
        source: AppEventSource_1.AppEventSource.USER_SERVICE,
    },
};
