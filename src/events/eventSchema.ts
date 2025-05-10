export type RootAppEvent<eventType, payloadType> = {
   eventType: eventType;
   version: number;
   eventId: string;
   source: string;
   timestamp: string; // utc date timestamp new Date.toUTCstring()
   traceId?: string;
   payload: payloadType;
};
