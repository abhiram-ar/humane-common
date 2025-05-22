"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTError = void 0;
const AppError_abstract_1 = require("./AppError.abstract");
class JWTError extends AppError_abstract_1.AppError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 403;
        Object.setPrototypeOf(this, JWTError.prototype);
    }
    serialize() {
        return [
            {
                message: this.message,
                field: 'token',
            },
        ];
    }
}
exports.JWTError = JWTError;
