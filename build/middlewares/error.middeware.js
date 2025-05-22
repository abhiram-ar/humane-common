"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("../errors");
const errorHandler = (err, req, res, next) => {
    if (err instanceof errors_1.AppError) {
        return res.status(err.statusCode).json({ success: false, errors: err.serialize() });
    }
    // user better error loging
    console.log(err);
    return res.status(500).json({ success: false, errors: [{ message: 'someting went wrong' }] });
};
exports.errorHandler = errorHandler;
