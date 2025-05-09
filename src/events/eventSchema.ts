export type RootAppEvent<eventType, eventSource, payloadType> = {
   eventType: eventType;
   version: number;
   eventId: string;
   source: eventSource;
   timestamp: string; // utc date timestamp new Date.toUTCstring()
   traceId?: string;
   payload: payloadType;
};
