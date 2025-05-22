"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedRoles = void 0;
const errors_1 = require("../errors");
const authorizedRoles = (...roles) => {
    return (req, res, next) => {
        var _a, _b;
        if (!roles.includes(((_a = req.user) === null || _a === void 0 ? void 0 : _a.type) || '')) {
            throw new errors_1.AuthorizationError(`${(_b = req.user) === null || _b === void 0 ? void 0 : _b.type} cannot access this resource`);
        }
        next();
    };
};
exports.authorizedRoles = authorizedRoles;
