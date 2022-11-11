import { createHandler, Get } from 'next-api-decorators';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { GuardRoleAdministrator } from '../../../../@server/modules/users/auth/guards/role-admin.guard';
import { RoleApp } from '../../../../@server/modules/users/role/apps/role.app';
import { RoleModule } from '../../../../@server/modules/users/role/role.module';
import { IApiRes } from './../../../../@server/infrastructure/responses/api-response.interface';
import { IAppRole } from './../../../../@server/modules/users/role/interfaces/role.interface';

@GuardRoleAdministrator()
class RoleController {
  constructor(private readonly roleApp: RoleApp) {
    const module = RoleModule()
    this.roleApp = module.crud
  }
  @Get()
  async find(): Promise<IApiRes<IAppRole[]>> {
    const res = await this.roleApp.find()
    return ApiRes.from(res)
  }
}

export default createHandler(RoleController);