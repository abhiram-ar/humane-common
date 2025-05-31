"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class GenericError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 400;
        Object.setPrototypeOf(this, GenericError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.GenericError = GenericError;
