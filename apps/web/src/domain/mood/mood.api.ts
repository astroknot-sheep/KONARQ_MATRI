import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Mood } from './mood.model'

export class MoodApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Mood>,
  ): Promise<Mood[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/moods${buildOptions}`)
  }

  static findOne(
    moodId: string,
    queryOptions?: ApiHelper.QueryOptions<Mood>,
  ): Promise<Mood> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/moods/${moodId}${buildOptions}`)
  }

  static createOne(values: Partial<Mood>): Promise<Mood> {
    return HttpService.api.post(`/v1/moods`, values)
  }

  static updateOne(moodId: string, values: Partial<Mood>): Promise<Mood> {
    return HttpService.api.patch(`/v1/moods/${moodId}`, values)
  }

  static deleteOne(moodId: string): Promise<void> {
    return HttpService.api.delete(`/v1/moods/${moodId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Mood>,
  ): Promise<Mood[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/moods${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Mood>,
  ): Promise<Mood> {
    return HttpService.api.post(`/v1/users/user/${userId}/moods`, values)
  }
}
