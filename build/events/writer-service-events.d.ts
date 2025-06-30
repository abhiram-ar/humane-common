import { RootAppEvent } from './eventSchema';
export declare const WriterEventsTypes: {
    readonly POST_CREATED: "post.created";
    readonly POST_UPDATED: "post.updated";
    readonly POST_DELETED: "post.deleted";
    readonly COMMENT_CREATED: "comment.created";
    readonly COMMENT_DELTED: "comment.deleted";
    readonly ADD_COMMENT_LIKE_REQUESTED: "comment.like.requested";
    readonly COMMENT_UNLIKE_REQUESTED: "comment.unlike.requested";
    readonly COMMENT_LIKED: "comment.liked";
    readonly COMMENT_UNLIKED: "comment.unliked";
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
export declare const PostAttachmentStatus: {
    readonly READY: "ready";
    readonly PROCESSING: "processing";
    readonly ERROR: "error";
};
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
export type CommentLikeRequestPayload = {
    authorId: string;
    commentId: string;
};
export type AddCommentLikeRequestEvent = RootAppEvent<typeof WriterEventsTypes.ADD_COMMENT_LIKE_REQUESTED, CommentLikeRequestPayload>;
export type CommentUnlikeRequestEvent = RootAppEvent<typeof WriterEventsTypes.COMMENT_UNLIKE_REQUESTED, CommentLikeRequestPayload>;
export type CommentLikeEventPayload = {
    authorId: string;
    commentId: string;
    createdAt: Date;
    updatedAt: Date;
};
export type CommnetLikedEvent = RootAppEvent<typeof WriterEventsTypes.COMMENT_LIKED, CommentLikeEventPayload>;
export type CommentUnlikedEvent = RootAppEvent<typeof WriterEventsTypes.COMMENT_UNLIKED, CommentLikeEventPayload>;
export type WriterServiceEvents = PostCreatedEvent | PostDeletedEvent | PostUpdatedEvent | CommentCreatedEvent | CommentDeletedEvent | AddCommentLikeRequestEvent | CommentUnlikeRequestEvent | CommnetLikedEvent | CommentUnlikedEvent;
