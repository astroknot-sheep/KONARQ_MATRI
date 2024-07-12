import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Export } from './export.model'

export class ExportApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Export>,
  ): Promise<Export[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/exports${buildOptions}`)
  }

  static findOne(
    exportId: string,
    queryOptions?: ApiHelper.QueryOptions<Export>,
  ): Promise<Export> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/exports/${exportId}${buildOptions}`)
  }

  static createOne(values: Partial<Export>): Promise<Export> {
    return HttpService.api.post(`/v1/exports`, values)
  }

  static updateOne(exportId: string, values: Partial<Export>): Promise<Export> {
    return HttpService.api.patch(`/v1/exports/${exportId}`, values)
  }

  static deleteOne(exportId: string): Promise<void> {
    return HttpService.api.delete(`/v1/exports/${exportId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Export>,
  ): Promise<Export[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/exports${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Export>,
  ): Promise<Export> {
    return HttpService.api.post(`/v1/users/user/${userId}/exports`, values)
  }

  static findManyByChatId(
    chatId: string,
    queryOptions?: ApiHelper.QueryOptions<Export>,
  ): Promise<Export[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/chats/chat/${chatId}/exports${buildOptions}`,
    )
  }

  static createOneByChatId(
    chatId: string,
    values: Partial<Export>,
  ): Promise<Export> {
    return HttpService.api.post(`/v1/chats/chat/${chatId}/exports`, values)
  }
}
