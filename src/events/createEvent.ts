import { AppEvent, AppEventsTypes } from '.';
import { randomUUID } from 'node:crypto';
import { appEventConfigurations } from './AppEventConfigurationMap';


export const createEvent = <T extends AppEventsTypes>(
  eventType: T,
  payload: Extract<AppEvent, { eventType: T }>['payload']
): Extract<AppEvent, { eventType: T }> => {
  const source = appEventConfigurations[eventType].source;

  return {
    eventType,
    version: 1,
    eventId: randomUUID(),
    source,
    timestamp: new Date().toISOString(),
    payload,
  } as Extract<AppEvent, { eventType: T }>;
};