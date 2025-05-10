"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const node_crypto_1 = require("node:crypto");
const createEvent = (eventType, payload, version = 1) => {
    var _a;
    return {
        eventType,
        version: version,
        eventId: (0, node_crypto_1.randomUUID)(),
        source: (_a = process.env.NAME) !== null && _a !== void 0 ? _a : 'unknown',
        timestamp: new Date().toISOString(),
        payload,
    };
};
exports.createEvent = createEvent;
