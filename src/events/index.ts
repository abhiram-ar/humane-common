export * from './eventSchema';
export * from './user-service.events';
export * from './createEvent';

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

export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;

