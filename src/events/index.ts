export * from './eventSchema';
export * from './user-service.events';
export * from './createEvent';

import {
   UserEventsTypes,
   UserPasswordRecoveryRequestEvent,
   UserSignupEvent,
} from './user-service.events';

export const appEventsTypes = {
   ...UserEventsTypes,
} as const;
export type AppEventsTypes = (typeof appEventsTypes)[keyof typeof appEventsTypes];

export enum EventSource {
   USER_SERVICE = 'user-service',
   NOTIFICATION_SERVICE = 'notification-service',
}

export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;
