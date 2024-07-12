import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ChatDomainFacade } from '@server/modules/chat/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ChatApplicationEvent } from './chat.application.event'
import { ChatCreateDto } from './chat.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ChatByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private chatDomainFacade: ChatDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/chats')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.chatDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/chats')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ChatCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.chatDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ChatApplicationEvent.ChatCreated.Payload>(
      ChatApplicationEvent.ChatCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
