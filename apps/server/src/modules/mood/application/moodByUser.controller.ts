import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MoodDomainFacade } from '@server/modules/mood/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MoodApplicationEvent } from './mood.application.event'
import { MoodCreateDto } from './mood.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class MoodByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private moodDomainFacade: MoodDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/moods')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.moodDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/moods')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: MoodCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.moodDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MoodApplicationEvent.MoodCreated.Payload>(
      MoodApplicationEvent.MoodCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
