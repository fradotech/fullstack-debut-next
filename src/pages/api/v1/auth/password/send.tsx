import { Body, createHandler, Post, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../../@server/infrastructure/responses/api.response';
import { AuthApp } from '../../../../../@server/modules/users/auth/apps/auth.app';
import { AuthModule } from '../../../../../@server/modules/users/auth/auth.module';
import { AuthEmailRequest } from '../../../../../@server/modules/users/auth/requests/auth-email.request';
import { UserResponse } from '../../../../../@server/modules/users/user/responses/user.response';

class AuthPasswordController {
  constructor(
    private readonly authApp: AuthApp
  ) {
    const module = AuthModule()
    this.authApp = module.auth
  }

  @Post()
  async send(
    @Body(ValidationPipe) req: AuthEmailRequest,
  ): Promise<IApiRes<UserResponse>> {
    const link = await this.authApp.passwordSendLink(req)
    return ApiRes.from(link)
  }
}

export default createHandler(AuthPasswordController);