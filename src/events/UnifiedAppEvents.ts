import { ChatServiceEvents } from './chat-service-events';
import { RewardServiceEvents } from './reward-service-events';
import { UserServiceEvents } from './user-service.events';
import { WriterServiceEvents } from './writer-service-events';

// union of all appevents
export type AppEvent =
   | UserServiceEvents
   | WriterServiceEvents
   | RewardServiceEvents
   | ChatServiceEvents;
