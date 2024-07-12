import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Chat } from './chat.model'

export class ChatApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Chat>,
  ): Promise<Chat[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/chats${buildOptions}`)
  }

  static findOne(
    chatId: string,
    queryOptions?: ApiHelper.QueryOptions<Chat>,
  ): Promise<Chat> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/chats/${chatId}${buildOptions}`)
  }

  static createOne(values: Partial<Chat>): Promise<Chat> {
    return HttpService.api.post(`/v1/chats`, values)
  }

  static updateOne(chatId: string, values: Partial<Chat>): Promise<Chat> {
    return HttpService.api.patch(`/v1/chats/${chatId}`, values)
  }

  static deleteOne(chatId: string): Promise<void> {
    return HttpService.api.delete(`/v1/chats/${chatId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Chat>,
  ): Promise<Chat[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/chats${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Chat>,
  ): Promise<Chat> {
    return HttpService.api.post(`/v1/users/user/${userId}/chats`, values)
  }
}
