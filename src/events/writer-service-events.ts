import { RootAppEvent } from './eventSchema';

export const WriterEventsTypes = {
   POST_CREATED: 'post.created',
   POST_UPDATED: 'post.updated',
   POST_DELETED: 'post.deleted',

   COMMENT_CREATED: 'comment.created',
   COMMENT_DELTED: 'comment.deleted',
} as const;

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

   moderationStatus: (typeof ModerationStatus)[keyof typeof ModerationStatus] | undefined;
   moderationMetadata: any;

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

// comment events
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

// -------------------- common export------------------

export type WriterServiceEvents =
   | PostCreatedEvent
   | PostDeletedEvent
   | PostUpdatedEvent
   | CommentCreatedEvent
   | CommentDeletedEvent;
