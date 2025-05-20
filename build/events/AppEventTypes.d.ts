import { UserEventsTypes } from './user-service.events';
export declare const AppEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED;
    readonly USER_SINGUP: UserEventsTypes.USER_SINGUP;
    readonly USER_CREATED: UserEventsTypes.USER_CREATED;
    readonly USER_NAME_BIO_UPDATED: UserEventsTypes.USER_NAME_BIO_UPDATED;
    readonly USER_AVATAR_UPDATED: UserEventsTypes.USER_AVATAR_UPDATED;
};
export type AppEventsTypes = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
