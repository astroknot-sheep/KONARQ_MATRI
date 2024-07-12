import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Setting } from './setting.model'

export class SettingApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Setting>,
  ): Promise<Setting[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/settings${buildOptions}`)
  }

  static findOne(
    settingId: string,
    queryOptions?: ApiHelper.QueryOptions<Setting>,
  ): Promise<Setting> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/settings/${settingId}${buildOptions}`)
  }

  static createOne(values: Partial<Setting>): Promise<Setting> {
    return HttpService.api.post(`/v1/settings`, values)
  }

  static updateOne(
    settingId: string,
    values: Partial<Setting>,
  ): Promise<Setting> {
    return HttpService.api.patch(`/v1/settings/${settingId}`, values)
  }

  static deleteOne(settingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/settings/${settingId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Setting>,
  ): Promise<Setting[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/settings${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Setting>,
  ): Promise<Setting> {
    return HttpService.api.post(`/v1/users/user/${userId}/settings`, values)
  }
}
