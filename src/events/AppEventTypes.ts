import { FriendshipEventsTypes, UserEventsTypes } from './user-service.events';

export const AppEventsTypes = {
   ...UserEventsTypes,
   ...FriendshipEventsTypes,
} as const;
export type AppEvents = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
