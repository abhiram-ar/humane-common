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

// ----------------friendship event-----------------------

export const FriendshipEventsTypes = {
   FRIEND_REQ_SENT: 'friend.req.sent',
   FRIEND_REQ_ACCEPTED: 'friend.req.accepted',
   FRIEND_REQ_CANCELLED: 'friend.req.cancelled',
   FRIEND_REQ_DECLIED: 'friend.req.decliend',
   FRIENDSHIP_DELETED: 'friend.req.deleted',
} as const;

type FriendshipStatus = 'PENDING' | 'ACCEPTED' | 'DECLIEND';
export type FriendshipEventPayload = {
   id: string;
   user1Id: string;
   user2Id: string;
   status: FriendshipStatus;
   requesterId: string;
   receiverId: string;
   createdAt: string;
   updatedAt?: string;
};

export type FriendReqSendEvent = RootAppEvent<
   typeof FriendshipEventsTypes.FRIEND_REQ_SENT,
   FriendshipEventPayload
>;

export type FriendReqCancelledEvent = RootAppEvent<
   typeof FriendshipEventsTypes.FRIEND_REQ_CANCELLED,
   FriendshipEventPayload
>;

export type FriendReqAcceptedEvent = RootAppEvent<
   typeof FriendshipEventsTypes.FRIEND_REQ_ACCEPTED,
   FriendshipEventPayload
>;
export type FriendshipDecliendEvent = RootAppEvent<
   typeof FriendshipEventsTypes.FRIEND_REQ_DECLIED,
   FriendshipEventPayload
>;

export type FriendshipDeletedEvent = RootAppEvent<
   typeof FriendshipEventsTypes.FRIENDSHIP_DELETED,
   FriendshipEventPayload
>;

// -------------------- common export------------------

export type UserServiceEvents =
   | UserPasswordRecoveryRequestEvent
   | UserSignupEvent
   | UserCreatedEvent
   | UserUpdatedEvent
   | UserAvatarKeyUpdatedEvent
   | UserCoverPhotoKeyUpdatedEvent
   | UserBlockStatusUpdatedEvent
   | FriendReqSendEvent
   | FriendReqCancelledEvent
   | FriendReqAcceptedEvent
   | FriendshipDeletedEvent;
