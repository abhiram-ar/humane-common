import { RootAppEvent } from './eventSchema';
export declare const WriterEventsTypes: {
    readonly POST_CREATED: "post.created";
    readonly POST_UPDATED: "post.updated";
    readonly POST_DELETED: "post.deleted";
    readonly COMMENT_CREATED: "comment.created";
    readonly COMMENT_DELTED: "comment.deleted";
};
export declare const PostVisibility: {
    readonly PUBLIC: "public";
    readonly FRIENDS: "friends";
};
export declare const ModerationStatus: {
    readonly PENDING: "pending";
    readonly OK: "ok";
    readonly NOT_APPROPRIATE: "notAppropriate";
};
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
export type PostCreatedEvent = RootAppEvent<typeof WriterEventsTypes.POST_CREATED, PostEventPayload>;
export type PostDeletedEvent = RootAppEvent<typeof WriterEventsTypes.POST_DELETED, PostEventPayload>;
export type PostUpdatedEvent = RootAppEvent<typeof WriterEventsTypes.POST_UPDATED, PostEventPayload>;
export type CommentEventPayload = {
    id: string;
    authorId: string;
    postId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};
export type CommentCreatedEvent = RootAppEvent<typeof WriterEventsTypes.COMMENT_CREATED, CommentEventPayload>;
export type CommentDeletedEvent = RootAppEvent<typeof WriterEventsTypes.COMMENT_DELTED, CommentEventPayload>;
export type WriterServiceEvents = PostCreatedEvent | PostDeletedEvent | PostUpdatedEvent | CommentCreatedEvent | CommentDeletedEvent;
