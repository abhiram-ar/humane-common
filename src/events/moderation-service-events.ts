import z from 'zod';
import { RootAppEvent } from './eventSchema';
import { PostEventPayload, postSchema } from './writer-service-events';

export const ModerationEventTypes = {
   POST_MODERATED: 'post.moderated',
   POST_CREATED_MODERATION_RETRY: 'post.created.moderation.retry',
} as const;

// ------------------eventss-------------------------
const PredictionSchema = z.object({
   className: z.string(),
   probability: z.number(),
});

const PostModeratedPayloadSchema = z.object({
   postId: z.string(),
   result: z.discriminatedUnion('success', [
      z.object({
         success: z.literal(false),
      }),
      z.object({
         success: z.literal(true),
         moderdationData: z
            .discriminatedUnion('type', [
               z.object({
                  type: z.literal('singleFrame'),
                  result: z.array(PredictionSchema),
               }),
               z.object({
                  type: z.literal('multiFrame'),
                  result: z.object({
                     hottestFrame: z.array(PredictionSchema).nullable(),
                     hotFrames: z.array(z.array(PredictionSchema)),
                     totalFrames: z.number(),
                  }),
               }),
            ])
            .optional(),
         flagged: z.boolean(),
      }),
   ]),
});

export type Prediction = z.infer<typeof PredictionSchema>;
export type PostModeratedPayload = z.infer<typeof PostModeratedPayloadSchema>;

export type PostModeratedEvent = RootAppEvent<
   typeof ModerationEventTypes.POST_MODERATED,
   PostModeratedPayload
>;

// -----------------------------------------------
type PostCreatedModerationRetyEventPayload = PostEventPayload;

export type PostCreatedModerationRetyEvent = RootAppEvent<
   typeof ModerationEventTypes.POST_CREATED_MODERATION_RETRY,
   PostCreatedModerationRetyEventPayload
>;

export type ModerationServiceEvents = PostModeratedEvent | PostCreatedModerationRetyEvent;
