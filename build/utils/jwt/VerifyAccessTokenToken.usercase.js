"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAccessToken = void 0;
const errors_1 = require("../../errors");
class VerifyAccessToken {
    constructor(_jwtService) {
        this._jwtService = _jwtService;
        this.execute = (accessToken) => {
            if (!process.env.accessTokenSecret) {
                throw new errors_1.GenericError('Access token secrect missing in env');
            }
            let tokenPayload;
            try {
                tokenPayload = this._jwtService.verify(accessToken, process.env.accessTokenSecret);
            }
            catch (error) {
                console.log(error);
                throw new errors_1.UnAuthenticatedError('Invalid/Expired accessToken');
            }
            return tokenPayload;
        };
    }
}
exports.VerifyAccessToken = VerifyAccessToken;
