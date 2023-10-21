import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
interface DecodedToken {
  userID: string;
  username: string;
  iat: Date;
  exp: Date;
}
export const CurrentUser = createParamDecorator(
  async (data: any, context: ExecutionContext) => {
    const jwtService = new JwtService();
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = (await jwtService.decode(token)) as DecodedToken;
    return decodedToken.userID;
  },
);
