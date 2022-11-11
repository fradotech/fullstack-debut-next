import { Body, createHandler, Get, Post, Query, ValidationPipe } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { GuardRoleAdministrator } from '../../../../@server/modules/users/auth/guards/role-admin.guard';
import { UserCrudApp } from '../../../../@server/modules/users/user/apps/user.app';
import { UserIndexRequest } from '../../../../@server/modules/users/user/requests/user-index.request';
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
  async fetch(@Query() req: UserIndexRequest): Promise<IApiRes<UserResponse[]>> {
    const res = await this.userCrudApp.fetch(req)
    return ApiRes.from(UserResponse.fromEntities(res.data), res.meta)
  }

  @Post()
  async create(@Body(ValidationPipe) req: UserRequest): Promise<IApiRes<UserResponse[]>> {
    const data = await this.userCrudApp.create(req)
    return ApiRes.from(UserResponse.fromEntity(data))
  }
}

export default createHandler(UserController);