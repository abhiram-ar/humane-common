import { UserServiceEvents } from './user-service.events';
import { WriterServiceEvents } from './writer-service-events';
export type AppEvent = UserServiceEvents | WriterServiceEvents;
