import { ChatEventTypes } from './chat-service-events';
import { RewardEventsTypes } from './reward-service-events';
import { FriendshipEventsTypes, UserEventsTypes } from './user-service.events';
import { WriterEventsTypes } from './writer-service-events';

export const AppEventsTypes = {
   ...UserEventsTypes,
   ...FriendshipEventsTypes,
   ...WriterEventsTypes,
   ...RewardEventsTypes,
   ...ChatEventTypes,
} as const;

// TODO: might what to remove this to avid comflit with UnifiedAppEvents
export type AppEvents = (typeof AppEventsTypes)[keyof typeof AppEventsTypes];
