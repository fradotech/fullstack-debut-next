/**
 * Index Application
 * Used to fetch paginated data with any sort, filter and search
 */

import { IBaseEntity } from '../base/base-entity.interface'
import {
  OrderDirectionEnum,
  OrderDirectionType
} from './index.enum'
import {
  IPaginateRequest,
  IPaginateResponse,
  IPaginationMeta
} from './index.interface'

export abstract class BaseIndexService {
  readonly DefaultPerPage: number = 10
  readonly DefaultPage: number = 1
  readonly DefaultSort: string = 'created_at'
  readonly DefaultOrder: OrderDirectionType = 'DESC'

  abstract fetch(arg0: any, arg1: any): Promise<IPaginateResponse<IBaseEntity>>

  countOffset({ page, perPage }: IPaginateRequest): number {
    page = page ?? this.DefaultPage
    perPage = perPage ?? this.DefaultPerPage

    return (page - 1) * perPage
  }

  getOrder(order?: string): OrderDirectionEnum {
    return order && order == OrderDirectionEnum.Asc
      ? OrderDirectionEnum.Asc
      : OrderDirectionEnum.Desc
  }

  take(amount?: number): number {
    return amount ?? 10
  }

  orderByKey(table: string, keys: string[], sort?: string): string {
    return sort && keys.includes(sort) ? `${table}.${sort}` : `${table}.updatedAt`
  }

  querySearch(table: string, keys: string[]): string {
    let querySearch = ''

    for (const key of keys) {
      querySearch += `lower(${table}.${key}) like :search or `
    }

    return querySearch.slice(0, -4)
  }

  mapMeta(count: number, { page, perPage }: IPaginateRequest): IPaginationMeta {
    page = page ?? this.DefaultPage
    perPage = perPage ?? this.DefaultPerPage

    return {
      page: page,
      perPage: perPage,
      total: count,
      totalPage: Math.ceil(count / perPage),
    }
  }
}
