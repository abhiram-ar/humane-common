import { RootAppEvent } from './eventSchema';
import { randomUUID } from 'node:crypto';

export const createEvent = <T, S, P>(
   eventType: T,
   eventSource: S,
   eventPayload: P
): RootAppEvent<T, S, P> => {
   return {
      eventType: eventType,
      version: 1,
      eventId: randomUUID(),
      source: eventSource,
      timestamp: new Date().toISOString(),
      payload: eventPayload,
   };
};
