import axios from 'axios';
import { ErrorType } from '../../common/types/Api.type';
import { setServerError } from '../../hooks/setServerError';

export const axiosService = {
  get: async (url: string) => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('_accessToken')}`
        }
      })

      return data
    } catch (error: any) {
      setServerError(error.response.data as ErrorType)
    }
  },

  post: async (url: string, dataPost: any) => {
    try {
      const { data } = await axios.post(url, dataPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('_accessToken')}`
        }
      })

      return data
    } catch (error: any) {
      setServerError(error.response.data as ErrorType)
    }
  }
}