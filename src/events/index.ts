import {
   UserEventsTypes,
   UserPasswordRecoveryRequestEvent,
   UserSignupEvent,
} from './user-service.events';


export * from './eventSchema';
export * from './user-service.events';

export const AllEventsTypes = {
   ...UserEventsTypes,
} as const;
export type AllEventsTypes = (typeof AllEventsTypes)[keyof typeof AllEventsTypes];


export enum EventSource {
   USER_SERVICE = 'user-service',
   NOTIFICATION_SERVICE = 'notification-service',
}

export type AppEvent = UserPasswordRecoveryRequestEvent | UserSignupEvent;