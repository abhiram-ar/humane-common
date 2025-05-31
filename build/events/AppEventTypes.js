"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEventsTypes = void 0;
const user_service_events_1 = require("./user-service.events");
exports.AppEventsTypes = Object.assign(Object.assign({}, user_service_events_1.UserEventsTypes), user_service_events_1.FriendshipEventsTypes);
