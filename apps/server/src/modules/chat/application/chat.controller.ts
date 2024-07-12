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
import { Chat, ChatDomainFacade } from '@server/modules/chat/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ChatApplicationEvent } from './chat.application.event'
import { ChatCreateDto, ChatUpdateDto } from './chat.dto'

@Controller('/v1/chats')
export class ChatController {
  constructor(
    private eventService: EventService,
    private chatDomainFacade: ChatDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.chatDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: ChatCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.chatDomainFacade.create(body)

    await this.eventService.emit<ChatApplicationEvent.ChatCreated.Payload>(
      ChatApplicationEvent.ChatCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:chatId')
  async findOne(@Param('chatId') chatId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.chatDomainFacade.findOneByIdOrFail(
      chatId,
      queryOptions,
    )

    return item
  }

  @Patch('/:chatId')
  async update(@Param('chatId') chatId: string, @Body() body: ChatUpdateDto) {
    const item = await this.chatDomainFacade.findOneByIdOrFail(chatId)

    const itemUpdated = await this.chatDomainFacade.update(
      item,
      body as Partial<Chat>,
    )
    return itemUpdated
  }

  @Delete('/:chatId')
  async delete(@Param('chatId') chatId: string) {
    const item = await this.chatDomainFacade.findOneByIdOrFail(chatId)

    await this.chatDomainFacade.delete(item)

    return item
  }
}
