import { JWTTokenPaylod } from '../../Types/JWTTokenPayload.type';
import { IJWTService } from './IJWTService';
export declare class VerifyAccessToken {
    private readonly _jwtService;
    constructor(_jwtService: IJWTService);
    execute: (accessToken: string) => JWTTokenPaylod;
}
