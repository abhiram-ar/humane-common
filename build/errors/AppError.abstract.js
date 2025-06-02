"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        // the prototype chain isn't always set up correctly — especially in older versions of JavaScript or when targeting ES5
        // fix for
        // - error instanceOf AppError => false
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
exports.AppError = AppError;
