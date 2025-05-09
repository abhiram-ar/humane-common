import { RootAppEvent } from './eventSchema';
import { AppEventSource } from './index';
export declare enum UserEventsTypes {
    USER_PASSWORD_RECOVERY_REQUESTED = "user.password.recovery-requested",
    USER_SINGUP = "user.singup"
}
export type UserPasswordRecoveryEventPaylaod = {
    email: string;
    data: {
        token: string;
    };
};
export type UserPasswordRecoveryRequestEvent = RootAppEvent<UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED, typeof AppEventSource.USER_SERVICE, UserPasswordRecoveryEventPaylaod>;
export type UserSignupEventPayload = {
    email: string;
    data: {
        otp: string;
        firstName: string;
    };
};
export type UserSignupEvent = RootAppEvent<UserEventsTypes.USER_SINGUP, typeof AppEventSource.USER_SERVICE, UserSignupEventPayload>;
