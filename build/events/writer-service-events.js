"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = exports.PostAttachmentStatus = exports.ModerationStatus = exports.PostVisibility = exports.WriterEventsTypes = void 0;
const zod_1 = __importDefault(require("zod"));
exports.WriterEventsTypes = {
    POST_CREATED: 'post.created',
    POST_UPDATED: 'post.updated',
    POST_DELETED: 'post.deleted',
    POST_MODERATION_COMPLETED: 'post.moderation.completed',
    COMMENT_CREATED: 'comment.created',
    COMMENT_DELTED: 'comment.deleted',
    ADD_COMMENT_LIKE_REQUESTED: 'comment.like.requested',
    COMMENT_UNLIKE_REQUESTED: 'comment.unlike.requested',
    COMMENT_LIKED: 'comment.liked',
    COMMENT_UNLIKED: 'comment.unliked',
    COMMENT_LIKED_BY_POST_AUTHUR: 'comment.liked.by.post.author',
};
// ---------------------post events-------------------
exports.PostVisibility = {
    PUBLIC: 'public',
    FRIENDS: 'friends',
};
exports.ModerationStatus = {
    PENDING: 'pending',
    OK: 'ok',
    NOT_APPROPRIATE: 'notAppropriate',
    FAILED: 'failed',
};
exports.PostAttachmentStatus = {
    READY: 'ready',
    PROCESSING: 'processing',
    ERROR: 'error',
};
exports.postSchema = zod_1.default.object({
    id: zod_1.default.string(),
    authorId: zod_1.default.string(),
    content: zod_1.default.string().nonempty().max(256),
    visibility: zod_1.default.enum([exports.PostVisibility.FRIENDS, exports.PostVisibility.PUBLIC]),
    hashtags: zod_1.default.array(zod_1.default.string()),
    attachmentType: zod_1.default.string().optional(),
    attachmentStatus: zod_1.default
        .enum([
        exports.PostAttachmentStatus.READY,
        exports.PostAttachmentStatus.PROCESSING,
        exports.PostAttachmentStatus.ERROR,
    ])
        .optional(),
    rawAttachmentKey: zod_1.default.string().nullish().optional(),
    processedAttachmentKey: zod_1.default.string().nullish().optional(),
    moderationStatus: zod_1.default.enum([
        exports.ModerationStatus.PENDING,
        exports.ModerationStatus.OK,
        exports.ModerationStatus.NOT_APPROPRIATE,
        exports.ModerationStatus.FAILED,
    ]),
    moderationMetadata: zod_1.default.any().nullish().optional(),
    createdAt: zod_1.default.coerce.date(),
    updatedAt: zod_1.default.coerce.date(),
});
const assertTypeCompatibility = () => { };
assertTypeCompatibility();
