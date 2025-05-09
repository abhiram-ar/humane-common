import { RootAppEvent } from './eventSchema';
import { EventSource } from './index';
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
export type UserPasswordRecoveryRequestEvent = RootAppEvent<UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED, '', UserPasswordRecoveryEventPaylaod>;
export type UserSignupEventPayload = {
    email: string;
    data: {
        otp: string;
        firstName: string;
    };
};
export type UserSignupEvent = RootAppEvent<UserEventsTypes.USER_SINGUP, EventSource.USER_SERVICE, UserSignupEventPayload>;
