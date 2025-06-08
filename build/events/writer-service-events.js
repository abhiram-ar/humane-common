"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationStatus = exports.PostVisibility = exports.WriterEventsTypes = void 0;
exports.WriterEventsTypes = {
    POST_CREATED: 'post.created',
    POST_UPDATED: 'post.updated',
    POST_DELETED: 'post.deleted',
    COMMENT_CREATED: 'comment.created',
    COMMENT_DELTED: 'comment.deleted',
};
exports.PostVisibility = {
    PUBLIC: 'public',
    FRIENDS: 'friends',
};
exports.ModerationStatus = {
    PENDING: 'pending',
    OK: 'ok',
    NOT_APPROPRIATE: 'notAppropriate',
};
