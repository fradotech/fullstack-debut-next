import { IPaginateResponse } from '../../../@server/infrastructure/index/index.interface';
import { UserResponse } from '../../../@server/modules/users/user/responses/user.response';
import { endpoint } from '../../endpoint';
import { axiosService } from '../http/axios.service';
import { UserIndexRequest } from './../../../@server/modules/users/user/requests/user-index.request';

export const userService = {
  fetch: async (req?: UserIndexRequest): Promise<IPaginateResponse<UserResponse>> => {
    return await axiosService.get(endpoint.users.slice)
  },
};
