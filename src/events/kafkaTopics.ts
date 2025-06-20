export const MessageBrokerTopics = {
   USER_PASSWORD_RECOVERY_EVENTS_TOPIC: 'user.password-recovery-request.events',
   USER_SINGUP_EVENTS_TOPIC: 'user.signup.events',
   USER_PROFILE_EVENTS_TOPIC: 'user.profile.events',
   FRIENDSHIP_EVENTS_TOPIC: 'friendship.events',

   POST_CREATE_EVENTS_TOPIC: 'post.create.events', // cant update the context/media once updated
   POST_UPDATED_EVENTS_TOPIC: 'post.updated.events', // cant update the context/media once updated
   POST_DELETED_EVENTS_TOPIC: 'post.deleted.events',

   COMMENT_CREATED_EVENTS_TOPIC: 'comment.created.events',
   COMMENT_DELTED_EVENTS_TOPIC: 'comment.delted.events',

   ADD_COMMENT_LIKE_REQUEST_TOPIC: 'comment.like.request',
   REMOVE_COMMENT_LIKE_REQUEST_TOPIC: 'comment.unlike.request',

   COMMENT_LIKED_EVENT_TOPIC: 'comment.liked.events',
   COMMENT_UNLIKED_EVENT_TOPIC: 'comment.unliked.events',

   MODERATION_COMPLETE_POST: 'post.moderation.complete.events',
} as const;
