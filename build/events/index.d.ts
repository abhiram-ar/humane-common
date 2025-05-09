import { UserEventsTypes, UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export * from './eventSchema';
export * from './user-service.events';
export declare const AllEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED;
    readonly USER_SINGUP: UserEventsTypes.USER_SINGUP;
};
export type AllEventsTypes = (typeof AllEventsTypes)[keyof typeof AllEventsTypes];
export declare enum EventSource {
    USER_SERVICE = "user-service",
    NOTIFICATION_SERVICE = "notification-service"
}
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
