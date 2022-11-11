import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserResponse } from '../../@server/modules/users/user/responses/user.response';
import { routes } from '../Routes';
import { authService } from '../service/auth/auth.service';

const useUser = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const router = useRouter()

  useEffect(() => {
    setUser(authService.loggedUser());
    !authService.loggedUser() && router.push(routes.login)
  }, []);

  return { user };
};

export default useUser;
