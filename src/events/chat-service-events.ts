import { RootAppEvent } from './eventSchema';

export const ChatEventTypes = {
   NEW_MESSAGE: 'message.created',
   FIRST_REPLY_WITHIN_24_HR: 'replied.in.24hr.first',
} as const;

export type Message = {
   id: string;

   senderId: string;
   conversationId: string;
   message?: string;

   sendAt: Date;
   status: { deleted: boolean; deletedAt: Date } | undefined;

   attachment?: { attachmentType: string; attachmentKey: string } | undefined;
   replyToMessageId?: string | undefined;
};

export type NewMessgeEventPayload = Message;
export type NewMessageEvent = RootAppEvent<
   typeof ChatEventTypes.NEW_MESSAGE,
   NewMessgeEventPayload
>;

// ------------------------------------------

export type FirstReplyWithin24HrEventPayload = {
   messageId: string;

   senderId: string;
   conversationId: string;
   message?: string | undefined;

   sendAt: Date;

   repliedToUserId: string;
};
export type FirstReplyWithin24HrEvent = RootAppEvent<
   typeof ChatEventTypes.FIRST_REPLY_WITHIN_24_HR,
   FirstReplyWithin24HrEventPayload
>;

export type ChatServiceEvents = NewMessageEvent | FirstReplyWithin24HrEvent;
