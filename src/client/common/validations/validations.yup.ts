import * as yup from 'yup';

export const yupValidator = {
  email: yup.string().email().required(),
  passwordLogin: yup.string().required()
}