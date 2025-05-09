export * from './eventSchema';
export * from './user-service.events';
export * from './createEvent';
import { UserEventsTypes, UserPasswordRecoveryRequestEvent, UserSignupEvent } from './user-service.events';
export declare const appEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED;
    readonly USER_SINGUP: UserEventsTypes.USER_SINGUP;
};
export type AppEventsTypes = (typeof appEventsTypes)[keyof typeof appEventsTypes];
export declare enum EventSource {
    USER_SERVICE = "user-service",
    NOTIFICATION_SERVICE = "notification-service"
}
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
