import {
  BeforeUpdate,
  CreateDateColumn,
  DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm'
import { IBaseEntity } from './base-entity.interface'

export class BaseEntity implements IBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt!: Date

  @BeforeUpdate()
  beforeUpdate(): void {
    this.updatedAt = new Date()
  }
}
