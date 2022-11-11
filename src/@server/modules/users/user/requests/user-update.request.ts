import { OmitType } from '@nestjs/swagger'
import { UserRequest } from './user.request'

export class UserUpdateRequest extends OmitType(UserRequest, [
  'email',
  'passwordConfirmation',
  'role',
  'otp',
  'isVerified',
  'token',
]) {}
