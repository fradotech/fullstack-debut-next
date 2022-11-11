const host = process.env.SERVER_HOST_API || 'http://localhost:3000/api/v1'

export const endpoint = {
  auth: {
    slice: host + '/auth/',
    login: host + '/auth/login',
    register: host + '/auth/register',
    password: {
      slice: host + '/auth/password/',
      send: host + '/auth/password/send',
      change: host + '/auth/password/change'
    }
  },

  users: {
    slice: host + '/users/',
    profile: host + '/users/profile'
  },

  roles: {
    slice: host + '/roles/',
  },

  attachments: {
    slice: host + '/attachments/',
  },
}