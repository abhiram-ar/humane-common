"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = void 0;
const node_crypto_1 = require("node:crypto");
const AppEventConfigurationMap_1 = require("./AppEventConfigurationMap");
const createEvent = (eventType, payload, version = 1) => {
    const source = AppEventConfigurationMap_1.appEventConfigurations[eventType].source;
    return {
        eventType,
        version: version,
        eventId: (0, node_crypto_1.randomUUID)(),
        source,
        timestamp: new Date().toISOString(),
        payload,
    };
};
exports.createEvent = createEvent;
