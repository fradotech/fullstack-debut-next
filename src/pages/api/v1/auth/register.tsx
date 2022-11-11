import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { AuthApp } from '../../../../@server/modules/users/auth/apps/auth.app';
import { AuthModule } from '../../../../@server/modules/users/auth/auth.module';
import { AuthRegisterRequest } from '../../../../@server/modules/users/auth/requests/auth-register.request';
import { UserResponse } from '../../../../@server/modules/users/user/responses/user.response';

class AuthRegisterController {
  constructor(
    private readonly authApp: AuthApp
  ) {
    const module = AuthModule()
    this.authApp = module.auth
  }

  @Post()
  async register(
    @Body(ValidationPipe) req: AuthRegisterRequest,
  ): Promise<IApiRes<UserResponse>> {
    const user = await this.authApp.register(req)
    return ApiRes.from(UserResponse.fromEntity(user))
  }
}

export default createHandler(AuthRegisterController);