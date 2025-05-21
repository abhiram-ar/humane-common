import { RootAppEvent } from './eventSchema';
export declare const UserEventsTypes: {
    readonly USER_PASSWORD_RECOVERY_REQUESTED: "user.password.recovery-requested";
    readonly USER_SINGUP: "user.singup";
    readonly USER_CREATED: "user.created";
    readonly USER_NAME_BIO_UPDATED: "user.name.bio.updated";
    readonly USER_AVATAR_UPDATED: "user.avatar.updated";
    readonly USER_COVER_PHOTO_UPDATED: "user.coverphoto.updated";
    readonly USER_BLOCK_STATUS_UPDATED: "user.isBlocked.updated";
};
export type UserPasswordRecoveryEventPaylaod = {
    email: string;
    data: {
        token: string;
    };
};
export type UserPasswordRecoveryRequestEvent = RootAppEvent<typeof UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED, UserPasswordRecoveryEventPaylaod>;
export type UserSignupEventPayload = {
    email: string;
    data: {
        otp: string;
        firstName: string;
    };
};
export type UserSignupEvent = RootAppEvent<typeof UserEventsTypes.USER_SINGUP, UserSignupEventPayload>;
export type UserCreatedEventPayload = {
    id: string;
    firstName: string;
    email: string;
    lastName: string | null;
    createdAt: string;
    isBlocked: boolean;
    isHotUser: boolean;
};
export type UserCreatedEvent = RootAppEvent<typeof UserEventsTypes.USER_CREATED, UserCreatedEventPayload>;
export type UserNameBioUpdatedEventPayload = {
    id: string;
    firstName: string;
    lastName: string | null;
    bio: string | null;
};
export type UserNameBioUpdatedEvent = RootAppEvent<typeof UserEventsTypes.USER_NAME_BIO_UPDATED, UserNameBioUpdatedEventPayload>;
export type UpdateUserAvatarKeyEventPayload = {
    id: string;
    avatarKey: string | null;
};
export type UserAvatarKeyUpdatedEvent = RootAppEvent<typeof UserEventsTypes.USER_AVATAR_UPDATED, UpdateUserAvatarKeyEventPayload>;
export type UpdateUserCoverPhotoKeyEventPayload = {
    id: string;
    coverPhotoKey: string | null;
};
export type UserCoverPhotoKeyUpdatedEvent = RootAppEvent<typeof UserEventsTypes.USER_COVER_PHOTO_UPDATED, UpdateUserCoverPhotoKeyEventPayload>;
export type UpdateUserBlockStatusEventPaylaod = {
    id: string;
    isBlocked: boolean;
};
export type UserBlockStatusUpdatedEvent = RootAppEvent<typeof UserEventsTypes.USER_BLOCK_STATUS_UPDATED, UpdateUserBlockStatusEventPaylaod>;
