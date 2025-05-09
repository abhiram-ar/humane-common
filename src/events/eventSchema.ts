interface AppEvent {
   version: number
   eventId: string,
   eventType: string,
   source: "user-service" | "notification-service" | string,
   timestamp: string // utc date timestamp new Date.toUTCstring()
   traceId?: string
   payload: any
}

let a:AppEvent = {
   version: 1,
   eventId: "event-123",
   eventType: "example-event",
   source: "user-service",
   timestamp: new Date().toUTCString(),
   payload: {}
}

a.payload.hello = "fsd"