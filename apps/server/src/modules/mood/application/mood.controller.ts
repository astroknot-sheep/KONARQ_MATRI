import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Mood, MoodDomainFacade } from '@server/modules/mood/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MoodApplicationEvent } from './mood.application.event'
import { MoodCreateDto, MoodUpdateDto } from './mood.dto'

@Controller('/v1/moods')
export class MoodController {
  constructor(
    private eventService: EventService,
    private moodDomainFacade: MoodDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.moodDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: MoodCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.moodDomainFacade.create(body)

    await this.eventService.emit<MoodApplicationEvent.MoodCreated.Payload>(
      MoodApplicationEvent.MoodCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:moodId')
  async findOne(@Param('moodId') moodId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.moodDomainFacade.findOneByIdOrFail(
      moodId,
      queryOptions,
    )

    return item
  }

  @Patch('/:moodId')
  async update(@Param('moodId') moodId: string, @Body() body: MoodUpdateDto) {
    const item = await this.moodDomainFacade.findOneByIdOrFail(moodId)

    const itemUpdated = await this.moodDomainFacade.update(
      item,
      body as Partial<Mood>,
    )
    return itemUpdated
  }

  @Delete('/:moodId')
  async delete(@Param('moodId') moodId: string) {
    const item = await this.moodDomainFacade.findOneByIdOrFail(moodId)

    await this.moodDomainFacade.delete(item)

    return item
  }
}
