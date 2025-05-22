import { Request, Response, NextFunction } from 'express';
import { AuthorizationError } from '../errors';
import { JWTTokenPaylodTypeField } from '../Types/JWTTokenPayload.type';

export const authorizedRoles = (...roles: (JWTTokenPaylodTypeField | '')[]) => {
   return (req: Request, res: Response, next: NextFunction) => {
      if (!roles.includes(req.user?.type || '')) {
         throw new AuthorizationError(`${req.user?.type} cannot access this resource`);
      }
      next();
   };
};
