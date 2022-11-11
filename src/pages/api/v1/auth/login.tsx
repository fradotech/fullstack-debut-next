import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { AuthApp } from '../../../../@server/modules/users/auth/apps/auth.app';
import { AuthModule } from '../../../../@server/modules/users/auth/auth.module';
import { AuthLoginRequest } from '../../../../@server/modules/users/auth/requests/auth-login.request';
import { UserResponse } from '../../../../@server/modules/users/user/responses/user.response';

class AuthLoginController {
  constructor(
    private readonly authApp: AuthApp
  ) {
    const module = AuthModule()
    this.authApp = module.auth
  }

  @Post()
  async login(
    @Body(ValidationPipe) req: AuthLoginRequest,
  ): Promise<IApiRes<UserResponse>> {
    const user = await this.authApp.login(req)
    return ApiRes.from(UserResponse.fromEntity(user))
  }
}

export default createHandler(AuthLoginController);