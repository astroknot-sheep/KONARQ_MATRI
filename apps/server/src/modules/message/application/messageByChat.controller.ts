import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MessageDomainFacade } from '@server/modules/message/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MessageApplicationEvent } from './message.application.event'
import { MessageCreateDto } from './message.dto'

import { ChatDomainFacade } from '../../chat/domain'

@Controller('/v1/chats')
export class MessageByChatController {
  constructor(
    private chatDomainFacade: ChatDomainFacade,
    private messageDomainFacade: MessageDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/chat/:chatId/messages')
  async findManyChatId(
    @Param('chatId') chatId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.chatDomainFacade.findOneByIdOrFail(chatId)

    const items = await this.messageDomainFacade.findManyByChat(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/chat/:chatId/messages')
  async createByChatId(
    @Param('chatId') chatId: string,
    @Body() body: MessageCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, chatId }

    const item = await this.messageDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MessageApplicationEvent.MessageCreated.Payload>(
      MessageApplicationEvent.MessageCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
