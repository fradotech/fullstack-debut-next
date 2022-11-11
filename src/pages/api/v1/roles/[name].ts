import { createHandler, Get, Query } from 'next-api-decorators';
import { IApiRes } from '../../../../@server/infrastructure/responses/api-response.interface';
import { ApiRes } from '../../../../@server/infrastructure/responses/api.response';
import { GuardRoleAdministrator } from '../../../../@server/modules/users/auth/guards/role-admin.guard';
import { RoleApp } from '../../../../@server/modules/users/role/apps/role.app';
import { Role } from '../../../../@server/modules/users/role/enums/role.enum';
import { IAppRole } from '../../../../@server/modules/users/role/interfaces/role.interface';
import { RoleModule } from '../../../../@server/modules/users/role/role.module';

@GuardRoleAdministrator()
class RoleController {
  constructor(private readonly roleApp: RoleApp) {
    const module = RoleModule()
    this.roleApp = module.crud
  }

  @Get()
  async findOne(@Query('name') name: Role): Promise<IApiRes<IAppRole | undefined>> {
    const res = await this.roleApp.findOne(name)
    return ApiRes.from(res)
  }
}

export default createHandler(RoleController);