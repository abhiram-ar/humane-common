import { UserEventsTypes } from './user-service.events';

export const AppEventsTypes = {
   ...UserEventsTypes,
} as const;
export type AppEvents = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
