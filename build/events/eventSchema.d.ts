export type RootAppEvent<eventType, eventSource, payloadType = unknown> = {
    eventType: eventType;
    version: number;
    eventId: string;
    source: eventSource;
    timestamp: string;
    traceId?: string;
    payload: payloadType;
};
