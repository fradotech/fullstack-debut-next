import * as bcrypt from 'bcrypt'
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { BaseEntity } from '../../../../infrastructure/base/base.entity'
import { Role } from '../../role/enums/role.enum'
import { IAppUser } from '../interfaces/user.interface'

@Entity()
export class AppUser extends BaseEntity implements IAppUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column({ unique: true })
  email!: string

  @Column()
  password!: string

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role!: Role

  @Column({ default: null })
  address?: string

  @Column({ default: null, unique: true })
  phoneNumber?: string

  @Column({ default: null, unique: true })
  avatar?: string

  @Column({ default: null })
  otp?: number

  @Column({ default: null })
  token?: string | null

  @Column({ default: false })
  isVerified!: boolean

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}
