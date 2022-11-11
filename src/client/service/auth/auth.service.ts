import Router from 'next/router';
import { AuthLoginRequest } from '../../../@server/modules/users/auth/requests/auth-login.request';
import { UserResponse } from '../../../@server/modules/users/user/responses/user.response';
import { endpoint } from '../../endpoint';
import { routes } from '../../Routes';
import { axiosService } from '../http/axios.service';

export const authService = {
  loggedUser: (): UserResponse => JSON.parse(localStorage.getItem('user') || 'null'),

  login: async (req: AuthLoginRequest) => {
    const data = await axiosService.post(endpoint.auth.login, req)
    const user = data?.data
    localStorage.setItem('_accessToken', user._accessToken || '')
    localStorage.setItem('user', JSON.stringify(user))
    Router.push(routes.dashboard)
  },

  logout: () => {
    localStorage.removeItem('_accessToken');
    localStorage.removeItem('user');
    Router.push(routes.login);
  },
};
