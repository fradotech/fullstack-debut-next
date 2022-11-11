import { Body, createHandler, Delete, Get, Put, Query, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { GuardRoleAdministrator } from '../../../../@server/modules/users/auth/guards/role-admin.guard';
import { UserCrudApp } from '../../../../@server/modules/users/user/apps/user.app';
import { UserRequest } from '../../../../@server/modules/users/user/requests/user.request';
import { UserResponse } from '../../../../@server/modules/users/user/responses/user.response';
import { UserModule } from '../../../../@server/modules/users/user/user.module';

@GuardRoleAdministrator()
class UserController {
  constructor(
    private readonly userCrudApp: UserCrudApp
  ) {
    const module = UserModule()
    this.userCrudApp = module.crud
  }

  @Get()
  async findOneOrFail(@Query('id') id: string): Promise<IApiRes<UserResponse>> {
    const data = await this.userCrudApp.findOneOrFail(id)
    return ApiRes.from(UserResponse.fromEntity(data))
  }

  @Put()
  async update(@Query('id') id: string, @Body(ValidationPipe) req: UserRequest): Promise<IApiRes<UserResponse>> {
    const data = await this.userCrudApp.update(id, req)
    return ApiRes.from(UserResponse.fromEntity(data))
  }

  @Delete()
  async remove(@Query('id') id: string): Promise<IApiRes<UserResponse>> {
    const data = await this.userCrudApp.remove(id)
    return ApiRes.from(UserResponse.fromEntity(data))
  }
}

export default createHandler(UserController);