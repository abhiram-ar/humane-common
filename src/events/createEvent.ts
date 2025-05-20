import { AppEvent, AppEvents } from '.';
import { randomUUID } from 'node:crypto';

export const createEvent = <T extends AppEvents>(
   eventType: T,
   payload: Extract<AppEvent, { eventType: T }>['payload'],
   version: number = 1
): Extract<AppEvent, { eventType: T }> => {
   return {
      eventType,
      version: version,
      eventId: randomUUID(),
      source: process.env.NAME ?? 'unknown',
      timestamp: new Date().toISOString(),
      payload,
   } as Extract<AppEvent, { eventType: T }>;
};
