"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBusError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class EventBusError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 500;
        Object.setPrototypeOf(this, EventBusError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.EventBusError = EventBusError;
