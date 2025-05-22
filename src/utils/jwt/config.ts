import { JWTService } from './JWTService';
import { VerifyAccessToken } from './VerifyAccessTokenToken.usercase';

const jwtService = new JWTService();
export const verifyAccessToken = new VerifyAccessToken(jwtService);
