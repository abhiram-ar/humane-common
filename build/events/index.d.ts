export * from './eventSchema';
export * from './user-service.events';
export * from './createEvent';
export * from "./kafkaTopics";
import { UserEventsTypes, UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export declare const AppEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED;
    readonly USER_SINGUP: UserEventsTypes.USER_SINGUP;
};
export type AppEventsTypes = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
export declare enum AppEventSource {
    USER_SERVICE = "user-service",
    NOTIFICATION_SERVICE = "notification-service"
}
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
