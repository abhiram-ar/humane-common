"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEventPayloadError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class InvalidEventPayloadError extends AppError_abstract_1.AppError {
    constructor(message = 'Invalid event payload') {
        super(message);
        this.message = message;
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidEventPayloadError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.InvalidEventPayloadError = InvalidEventPayloadError;
