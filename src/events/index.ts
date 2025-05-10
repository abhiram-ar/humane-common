export * from './eventSchema';
export * from './user-service.events';
export * from './createEvent';
export * from "./kafkaTopics"
import {
   UserEventsTypes,
   UserPasswordRecoveryRequestEvent,
   UserSignupEvent,
} from './user-service.events';

export const AppEventsTypes = {
   ...UserEventsTypes,
} as const;
export type AppEventsTypes = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];

export enum AppEventSource {
   USER_SERVICE = 'user-service',
   NOTIFICATION_SERVICE = 'notification-service',
}

// union of all appevents
export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;

