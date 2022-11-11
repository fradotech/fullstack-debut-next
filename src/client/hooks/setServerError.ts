import { toast, ToastOptions } from 'react-toastify';
import { ErrorType } from "../common/types/Api.type";

export const toastOption: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
};

export const setServerError = (
  error: ErrorType,
): void => {
  if ((error?.statusCode === 400 || 401 || 422) && error?.errors?.length > 0) {
    error?.errors.map((error) => {
      toast.error(error, toastOption);
    });
  } else if (error?.message) {
    toast.error(error.message, toastOption);
  }
};