"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModerationEventTypes = void 0;
const zod_1 = __importDefault(require("zod"));
exports.ModerationEventTypes = {
    POST_MODERATED: 'post.moderated',
    POST_CREATED_MODERATION_RETRY: 'post.created.moderation.retry',
};
// ------------------eventss-------------------------
const PredictionSchema = zod_1.default.object({
    className: zod_1.default.string(),
    probability: zod_1.default.number(),
});
const PostModeratedPayloadSchema = zod_1.default.object({
    postId: zod_1.default.string(),
    result: zod_1.default.discriminatedUnion('success', [
        zod_1.default.object({
            success: zod_1.default.literal(false),
        }),
        zod_1.default.object({
            success: zod_1.default.literal(true),
            moderdationData: zod_1.default.discriminatedUnion('type', [
                zod_1.default.object({
                    type: zod_1.default.literal('singleFrame'),
                    result: zod_1.default.array(PredictionSchema),
                }),
                zod_1.default.object({
                    type: zod_1.default.literal('multiFrame'),
                    result: zod_1.default.object({
                        hottestFrame: zod_1.default.array(PredictionSchema).nullable(),
                        hotFrames: zod_1.default.array(zod_1.default.array(PredictionSchema)),
                        totalFrames: zod_1.default.number(),
                    }),
                }),
            ]),
            flagged: zod_1.default.boolean(),
        }),
    ]),
});
