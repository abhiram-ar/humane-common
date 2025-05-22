import { UnAuthenticatedError } from '../../errors';
import { JWTTokenPaylod } from '../../Types/JWTTokenPayload.type';
import { IJWTService } from './IJWTService';

export class VerifyAccessToken {
   constructor(private readonly _jwtService: IJWTService) {}

   execute = (accessToken: string): JWTTokenPaylod => {
      if (process.env.ACCESS_TOKEN_SECRET) {
         throw new Error('Access token secrect missing in env');
      }

      let tokenPayload: JWTTokenPaylod;

      try {
         tokenPayload = this._jwtService.verify<JWTTokenPaylod>(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET as string
         );
      } catch (error) {
         throw new UnAuthenticatedError('Invalid/Expired accessToken');
      }

      return tokenPayload;
   };
}
