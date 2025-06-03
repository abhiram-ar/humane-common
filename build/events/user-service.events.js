"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendshipEventsTypes = exports.UserEventsTypes = void 0;
exports.UserEventsTypes = {
    USER_PASSWORD_RECOVERY_REQUESTED: 'user.password.recovery-requested',
    USER_SINGUP: 'user.singup',
    USER_CREATED: 'user.created',
    USER_UPDATED: 'user.updated',
    USER_AVATAR_UPDATED: 'user.avatar.updated',
    USER_COVER_PHOTO_UPDATED: 'user.coverphoto.updated',
    USER_BLOCK_STATUS_UPDATED: 'user.isBlocked.updated',
};
// ----------------friendship event-----------------------
exports.FriendshipEventsTypes = {
    FRIEND_REQ_SENT: 'friend.req.sent',
    FRIEND_REQ_ACCEPTED: 'friend.req.accepted',
    FRIEND_REQ_CANCELLED: 'friend.req.cancelled',
    FRIEND_REQ_DECLIED: 'friend.req.decliend',
    FRIENDSHIP_DELETED: 'friend.req.deleted',
};
