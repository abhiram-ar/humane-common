"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateWithNoError = void 0;
const config_1 = require("../utils/jwt/config");
const AuthenticateWithNoError = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next();
    }
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[1];
    if (!token) {
        return next();
    }
    try {
        const payload = config_1.verifyAccessToken.execute(token);
        if (payload.type === 'user' || payload.type === 'admin') {
            req.user = payload;
        }
    }
    catch (error) {
        next();
    }
};
exports.AuthenticateWithNoError = AuthenticateWithNoError;
