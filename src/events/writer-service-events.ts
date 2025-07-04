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

   COMMENT_LIKED_BY_POST_AUTHUR: 'comment.liked.by.post.author',
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

export const PostAttachmentStatus = {
   READY: 'ready',
   PROCESSING: 'processing',
   ERROR: 'error',
} as const;

export type PostEventPayload = {
   id: string;
   authorId: string;
   content: string;
   visibility: (typeof PostVisibility)[keyof typeof PostVisibility];
   hashtags: string[];

   createdAt: Date;
   updatedAt: Date;

   moderationStatus: (typeof ModerationStatus)[keyof typeof ModerationStatus];
   moderationMetadata: any | null;

   attachmentStatus: (typeof PostAttachmentStatus)[keyof typeof PostAttachmentStatus];
   processedAttachmentKey: string | null;
   attachmentType: string;
   rawAttachmentKey: string | null;
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

// ----------------special events -----------------------

export type CommentLikedByPostAuthorPayload = {
   commentId: string;
   commentAutorId: string;

   postId: string;
   postAuthorId: string;
};

export type CommnetLikedByPostAuthorEvent = RootAppEvent<
   typeof WriterEventsTypes.COMMENT_LIKED_BY_POST_AUTHUR,
   CommentLikedByPostAuthorPayload
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
   | CommentUnlikedEvent
   | CommnetLikedByPostAuthorEvent;
