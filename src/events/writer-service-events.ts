import { RootAppEvent } from './eventSchema';

export const WriterEventsTypes = {
   POST_CREATED: 'post.created',
   POST_UPDATED: 'post.updated',
   POST_DELETED: 'post.deleted',

   COMMENT_CREATED: 'comment.created',
   COMMENT_DELTED: 'comment.deleted',

   ADD_COMMENT_LIKE_REQUESTED: 'comment.like.requested',
   COMMENT_UNLIKE_REQUESTED: 'comment.unlike.requested',

   COMMENT_LIKED: 'comment.liked',
   COMMENT_UNLIKED: 'comment.unliked',
} as const;

// ---------------------post events-------------------
export const PostVisibility = {
   PUBLIC: 'public',
   FRIENDS: 'friends',
} as const;

export const ModerationStatus = {
   PENDING: 'pending',
   OK: 'ok',
   NOT_APPROPRIATE: 'notAppropriate',
} as const;

export type PostEventPayload = {
   id: string;
   authorId: string;
   content: string;
   posterKey: string | null;
   visibility: (typeof PostVisibility)[keyof typeof PostVisibility];

   moderationStatus: (typeof ModerationStatus)[keyof typeof ModerationStatus];
   moderationMetadata: any | null;

   createdAt: Date;
   updatedAt: Date;
};

export type PostCreatedEvent = RootAppEvent<
   typeof WriterEventsTypes.POST_CREATED,
   PostEventPayload
>;

export type PostDeletedEvent = RootAppEvent<
   typeof WriterEventsTypes.POST_DELETED,
   PostEventPayload
>;

export type PostUpdatedEvent = RootAppEvent<
   typeof WriterEventsTypes.POST_UPDATED,
   PostEventPayload
>;

// ---------------------comment events-------------------
export type CommentEventPayload = {
   id: string;
   authorId: string;
   postId: string;
   content: string;
   createdAt: Date;
   updatedAt: Date;
};

export type CommentCreatedEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_CREATED,
   CommentEventPayload
>;

export type CommentDeletedEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_DELTED,
   CommentEventPayload
>;

// --------------------like events-------------------
export type CommentLikeRequestPayload = {
   authorId: string;
   commentId: string;
};
export type AddCommentLikeRequestEvent = RootAppEvent<
   typeof WriterEventsTypes.ADD_COMMENT_LIKE_REQUESTED,
   CommentLikeRequestPayload
>;

export type CommentUnlikeRequestEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_UNLIKE_REQUESTED,
   CommentLikeRequestPayload
>;

export type CommentLikeEventPayload = {
   authorId: string;
   commentId: string;
   createdAt: Date;
   updatedAt: Date;
};
export type CommnetLikedEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_LIKED,
   CommentLikeEventPayload
>;
export type CommentUnlikedEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_UNLIKED,
   CommentLikeEventPayload
>;

// -------------------- common export------------------

export type WriterServiceEvents =
   | PostCreatedEvent
   | PostDeletedEvent
   | PostUpdatedEvent
   | CommentCreatedEvent
   | CommentDeletedEvent
   | AddCommentLikeRequestEvent
   | CommentUnlikeRequestEvent
   | CommnetLikedEvent
   | CommentUnlikedEvent;
