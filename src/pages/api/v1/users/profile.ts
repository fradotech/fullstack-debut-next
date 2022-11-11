import { Body, createHandler, Get, Put, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { GuardRoleAll } from '../../../../@server/modules/users/auth/guards/role-all.guard';
import { UserCrudApp } from '../../../../@server/modules/users/user/apps/user.app';
import { UserLogged } from '../../../../@server/modules/users/user/common/user-logged.decorator';
import { IAppUser } from '../../../../@server/modules/users/user/interfaces/user.interface';
import { UserUpdateRequest } from '../../../../@server/modules/users/user/requests/user-update.request';
import { UserResponse } from '../../../../@server/modules/users/user/responses/user.response';
import { UserModule } from '../../../../@server/modules/users/user/user.module';

@GuardRoleAll()
class UserProfileController {
  constructor(
    private readonly userCrudApp: UserCrudApp
  ) {
    const module = UserModule()
    this.userCrudApp = module.crud
  }

  @Get()
  async GetUserLogged(
    @UserLogged() user: IAppUser,
  ): Promise<IApiRes<UserResponse>> {
    const data = await this.userCrudApp.findOneOrFail(user.id)
    return ApiRes.from(UserResponse.fromEntity(data))
  }

  @Put()
  async update(
    @UserLogged() user: IAppUser,
    @Body(ValidationPipe) req: UserUpdateRequest,
  ): Promise<IApiRes<UserResponse>> {
    const data = await this.userCrudApp.update(user.id, req)
    return ApiRes.from(UserResponse.fromEntity(data))
  }
}

export default createHandler(UserProfileController);