import { Repository } from 'typeorm'
import { Exception } from '../../../../common/exceptions/index.exception'
import { BaseService } from '../../../../infrastructure/base/base.service'
import { AppUser } from '../entities/user.entity'
import { IAppUser } from '../interfaces/user.interface'

export class UserService implements BaseService {
  constructor(
    private readonly userRepo: Repository<IAppUser>
  ) {}

  async create(req: IAppUser): Promise<IAppUser> {
    try {
      const data = this.userRepo.create(req)
      return await this.userRepo.save(data)
    } catch (error) {
      Exception.unprocessable(error)
    }
    return req
  }

  async find(): Promise<IAppUser[]> {
    return await this.userRepo.find()
  }

  async findOne(id: string): Promise<IAppUser | null> {
    return await this.userRepo.findOne({ where: { id } })
  }

  async findOneOrFail(id: string): Promise<IAppUser> {
    const data = await this.userRepo.findOne({ where: { id } })
    if (!data) Exception.entityNotFound('id', id)
    if (!data) return new AppUser()
    return data
  }

  async update(req: IAppUser): Promise<IAppUser> {
    try {
      const data = this.userRepo.create(req)
      await this.userRepo.update(data.id, data)
      return await this.findOneOrFail(req.id)
    } catch (error) {
      Exception.unprocessable(error)
    }
    return req
  }

  async remove(id: string): Promise<IAppUser> {
    const data = await this.findOneOrFail(id) as AppUser
    return await this.userRepo.remove(data)
  }

  async softRemove(id: string): Promise<IAppUser> {
    const data = await this.findOneOrFail(id) as AppUser
    return await this.userRepo.softRemove(data)
  }

  // Another findOneBy() Methods

  public async findOneByEmail(email: string): Promise<IAppUser | null> {
    return await this.userRepo.findOne({ where: { email } })
  }

  public async findOneByPhoneNumber(phoneNumber: string): Promise<IAppUser | null> {
    return await this.userRepo.findOne({ where: { phoneNumber } })
  }

  public async findOneByToken(token: string): Promise<IAppUser | null> {
    return await this.userRepo.findOne({ where: { token } })
  }
}
