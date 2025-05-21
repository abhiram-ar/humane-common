import { RootAppEvent } from './eventSchema';

export const UserEventsTypes = {
   USER_PASSWORD_RECOVERY_REQUESTED: 'user.password.recovery-requested',
   USER_SINGUP: 'user.singup',
   USER_CREATED: 'user.created',
   USER_UPDATED: 'user.updated',
   USER_AVATAR_UPDATED: 'user.avatar.updated',
   USER_COVER_PHOTO_UPDATED: 'user.coverphoto.updated',
   USER_BLOCK_STATUS_UPDATED: 'user.isBlocked.updated',
} as const;

export type UserPasswordRecoveryEventPaylaod = {
   email: string;
   data: { token: string };
};
export type UserPasswordRecoveryRequestEvent = RootAppEvent<
   typeof UserEventsTypes.USER_PASSWORD_RECOVERY_REQUESTED,
   UserPasswordRecoveryEventPaylaod
>;
// -------------------
export type UserSignupEventPayload = {
   email: string;
   data: {
      otp: string;
      firstName: string;
   };
};
export type UserSignupEvent = RootAppEvent<
   typeof UserEventsTypes.USER_SINGUP,
   UserSignupEventPayload
>;
// -------------------
export type UserCreatedEventPayload = {
   id: string;
   firstName: string;
   lastName: string | null;
   email: string;
   bio: string | null;
   avatarKey: string | null;
   coverPhotoKey: string | null;
   createdAt: string;
   lastLoginTime: string | null;
   isBlocked: boolean;
   isHotUser: boolean;
   humaneScore: number;
};
export type UserCreatedEvent = RootAppEvent<
   typeof UserEventsTypes.USER_CREATED,
   UserCreatedEventPayload
>;
// ------------------
export type UserUpdatedEventPayload = {
   id: string;
   firstName: string;
   lastName: string | null;
   email: string;
   bio: string | null;
   avatarKey: string | null;
   coverPhotoKey: string | null;
   createdAt: string;
   lastLoginTime: string | null;
   isBlocked: boolean;
   isHotUser: boolean;
   humaneScore: number;
};
export type UserUpdatedEvent = RootAppEvent<
   typeof UserEventsTypes.USER_UPDATED,
   UserUpdatedEventPayload
>;
// ---------------
export type UpdateUserAvatarKeyEventPayload = {
   id: string;
   avatarKey: string | null;
};
export type UserAvatarKeyUpdatedEvent = RootAppEvent<
   typeof UserEventsTypes.USER_AVATAR_UPDATED,
   UpdateUserAvatarKeyEventPayload
>;
// ---------------
export type UpdateUserCoverPhotoKeyEventPayload = {
   id: string;
   coverPhotoKey: string | null;
};
export type UserCoverPhotoKeyUpdatedEvent = RootAppEvent<
   typeof UserEventsTypes.USER_COVER_PHOTO_UPDATED,
   UpdateUserCoverPhotoKeyEventPayload
>;
// ---------------
export type UpdateUserBlockStatusEventPaylaod = {
   id: string;
   isBlocked: boolean;
};
export type UserBlockStatusUpdatedEvent = RootAppEvent<
   typeof UserEventsTypes.USER_BLOCK_STATUS_UPDATED,
   UpdateUserBlockStatusEventPaylaod
>;
