export interface AppEvent {
   version: number
   eventId: string,
   eventType: string,
   source: "user-service" | "notification-service" | string,
   timestamp: string // utc date timestamp new Date.toUTCstring()
   traceId?: string
   payload: any
}
