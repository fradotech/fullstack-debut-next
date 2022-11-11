import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MinLength
} from 'class-validator'
import { IAppRole } from '../../role/interfaces/role.interface'
import { STRING_PASSWORD_CHARACTER } from '../common/character.constant'
import { IAppUser } from '../interfaces/user.interface'

export class UserRequest implements IAppUser {
  id!: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z ]+$/)
  name!: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(STRING_PASSWORD_CHARACTER, {
    message: 'Password should contain number, under case, and upper case character',
  })
  password!: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(STRING_PASSWORD_CHARACTER, {
    message: 'Password should contain number, under case, and upper case character',
  })
  passwordConfirmation!: string

  @IsOptional()
  @IsString()
  @IsPhoneNumber('ID')
  phoneNumber!: string

  @IsOptional()
  @IsString()
  avatar!: string

  @IsOptional()
  @IsString()
  address!: string

  @IsNotEmpty()
  @IsNumber()
  otp!: number

  @IsNotEmpty()
  @IsString()
  token!: string

  role!: IAppRole
  isVerified!: boolean
}