import {
  IoMdHome, IoMdPerson,
  IoMdSettings
} from "react-icons/io"
import { RouteType } from "./common/types/Route.type"

export const routes = {
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',

  users: {
    slice: '/users/',
    profile: '/users/profile'
  },

  roles: {
    slice: '/roles/',
  },

  attachments: {
    slice: '/attachments/',
  },
}

//===============================================================================//

export const RoutesSidebar: RouteType[] = [
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: IoMdHome
  },
  {
    name: 'User',
    href: '#',
    icon: IoMdPerson,
    children: [
      {
        name: 'User',
        href: routes.users.slice,
        icon: IoMdPerson,
      },
      {
        name: 'Roles',
        href: routes.roles.slice,
        icon: IoMdSettings,
      },
    ],
  },
]