import z from 'zod';
import { RootAppEvent } from './eventSchema';
import { PostEventPayload } from './writer-service-events';
export declare const ModerationEventTypes: {
    readonly POST_MODERATED: "post.moderated";
    readonly POST_CREATED_MODERATION_RETRY: "post.created.moderation.retry";
};
export declare const PredictionSchema: z.ZodObject<{
    className: z.ZodString;
    probability: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    className: string;
    probability: number;
}, {
    className: string;
    probability: number;
}>;
export declare const PostModeratedPayloadSchema: z.ZodObject<{
    postId: z.ZodString;
    result: z.ZodDiscriminatedUnion<"success", [z.ZodObject<{
        success: z.ZodLiteral<false>;
    }, "strip", z.ZodTypeAny, {
        success: false;
    }, {
        success: false;
    }>, z.ZodObject<{
        success: z.ZodLiteral<true>;
        moderdationData: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"singleFrame">;
            result: z.ZodArray<z.ZodObject<{
                className: z.ZodString;
                probability: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                className: string;
                probability: number;
            }, {
                className: string;
                probability: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        }, {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"multiFrame">;
            result: z.ZodObject<{
                hottestFrame: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    className: z.ZodString;
                    probability: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    className: string;
                    probability: number;
                }, {
                    className: string;
                    probability: number;
                }>, "many">>;
                hotFrames: z.ZodArray<z.ZodArray<z.ZodObject<{
                    className: z.ZodString;
                    probability: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    className: string;
                    probability: number;
                }, {
                    className: string;
                    probability: number;
                }>, "many">, "many">;
                totalFrames: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            }, {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        }, {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        }>]>>;
        flagged: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        success: true;
        flagged: boolean;
        moderdationData?: {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        } | {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        } | undefined;
    }, {
        success: true;
        flagged: boolean;
        moderdationData?: {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        } | {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        } | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    postId: string;
    result: {
        success: false;
    } | {
        success: true;
        flagged: boolean;
        moderdationData?: {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        } | {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        } | undefined;
    };
}, {
    postId: string;
    result: {
        success: false;
    } | {
        success: true;
        flagged: boolean;
        moderdationData?: {
            type: "singleFrame";
            result: {
                className: string;
                probability: number;
            }[];
        } | {
            type: "multiFrame";
            result: {
                hottestFrame: {
                    className: string;
                    probability: number;
                }[] | null;
                hotFrames: {
                    className: string;
                    probability: number;
                }[][];
                totalFrames: number;
            };
        } | undefined;
    };
}>;
export type Prediction = z.infer<typeof PredictionSchema>;
export type PostModeratedPayload = z.infer<typeof PostModeratedPayloadSchema>;
export type PostModeratedEvent = RootAppEvent<typeof ModerationEventTypes.POST_MODERATED, PostModeratedPayload>;
type PostCreatedModerationRetyEventPayload = PostEventPayload;
export type PostCreatedModerationRetyEvent = RootAppEvent<typeof ModerationEventTypes.POST_CREATED_MODERATION_RETRY, PostCreatedModerationRetyEventPayload>;
export type ModerationServiceEvents = PostModeratedEvent | PostCreatedModerationRetyEvent;
export {};
