import { createHandler, Get, Query } from 'next-api-decorators';
import { IApiRes } from '../../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../../@server/infrastructure/responses/api.response';
import { AuthApp } from '../../../../../@server/modules/users/auth/apps/auth.app';
import { AuthModule } from '../../../../../@server/modules/users/auth/auth.module';
import { UserResponse } from '../../../../../@server/modules/users/user/responses/user.response';

class AuthPasswordController {
  constructor(
    private readonly authApp: AuthApp
  ) {
    const module = AuthModule()
    this.authApp = module.auth
  }

  @Get()
  async token(
    @Query('token') token: string,
  ): Promise<IApiRes<UserResponse>> {
    const user = await this.authApp.passwordGetLink(token)
    return ApiRes.from(user)
  }
}

export default createHandler(AuthPasswordController);