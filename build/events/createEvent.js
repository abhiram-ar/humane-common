"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const node_crypto_1 = require("node:crypto");
const createEvent = (eventType, eventSource, eventPayload) => {
    return {
        eventType: eventType,
        version: 1,
        eventId: (0, node_crypto_1.randomUUID)(),
        source: eventSource,
        timestamp: new Date().toISOString(),
        payload: eventPayload,
    };
};
exports.createEvent = createEvent;
