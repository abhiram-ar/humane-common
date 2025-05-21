import { RootAppEvent } from './eventSchema';
export declare enum UserEventsTypes {
    USER_PASSWORD_RECOVERY_REQUESTED = "user.password.recovery-requested",
    USER_SINGUP = "user.singup",
    USER_CREATED = "user.created",
    USER_NAME_BIO_UPDATED = "user.name.bio.updated",
    USER_AVATAR_UPDATED = "user.avatar.updated"
}
export type UserPasswordRecoveryEventPaylaod = {
    email: string;
    data: {
        token: string;
    };
};
export type UserPasswordRecoveryRequestEvent = RootAppEvent<UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED, UserPasswordRecoveryEventPaylaod>;
export type UserSignupEventPayload = {
    email: string;
    data: {
        otp: string;
        firstName: string;
    };
};
export type UserSignupEvent = RootAppEvent<UserEventsTypes.USER_SINGUP, UserSignupEventPayload>;
export type UserCreatedEventPayload = {
    id: string;
    firstName: string;
    email: string;
    lastName: string | null;
    createdAt: string;
    isBlocked: boolean;
    isHotUser: boolean;
};
export type UserCreatedEvent = RootAppEvent<UserEventsTypes.USER_CREATED, UserCreatedEventPayload>;
export type UserNameBioUpdatedEventPayload = {
    id: string;
    firstName: string;
    lastName: string | null;
    bio: string | null;
};
export type UserNameBioUpdatedEvent = RootAppEvent<UserEventsTypes.USER_NAME_BIO_UPDATED, UserNameBioUpdatedEventPayload>;
export type UpdateUserAvatarURLEventPayload = {
    id: string;
    avatarKey: string | null;
};
export type UserAvatarURLUpdatedEvent = RootAppEvent<UserEventsTypes.USER_AVATAR_UPDATED, UpdateUserAvatarURLEventPayload>;
