export type RootAppEvent<eventType, payloadType> = {
    eventType: eventType;
    version: number;
    eventId: string;
    source: string;
    timestamp: string;
    traceId?: string;
    payload: payloadType;
};
