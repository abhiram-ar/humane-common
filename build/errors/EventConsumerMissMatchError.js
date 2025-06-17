"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventConsumerMissMatchError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class EventConsumerMissMatchError extends AppError_abstract_1.AppError {
    constructor(message = 'Event not configured for this consumer') {
        super(message);
        this.message = message;
        this.statusCode = 400;
        Object.setPrototypeOf(this, EventConsumerMissMatchError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.EventConsumerMissMatchError = EventConsumerMissMatchError;
