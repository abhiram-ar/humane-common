import { FriendshipEventsTypes, UserEventsTypes } from './user-service.events';
import { WriterEventsTypes } from './writer-service-events';

export const AppEventsTypes = {
   ...UserEventsTypes,
   ...FriendshipEventsTypes,
   ...WriterEventsTypes,
} as const;

// TODO: might what to remove this to avid comflit with UnifiedAppEvents
export type AppEvents = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
