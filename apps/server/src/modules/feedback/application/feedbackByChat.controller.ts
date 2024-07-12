import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { FeedbackDomainFacade } from '@server/modules/feedback/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { FeedbackApplicationEvent } from './feedback.application.event'
import { FeedbackCreateDto } from './feedback.dto'

import { ChatDomainFacade } from '../../chat/domain'

@Controller('/v1/chats')
export class FeedbackByChatController {
  constructor(
    private chatDomainFacade: ChatDomainFacade,
    private feedbackDomainFacade: FeedbackDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/chat/:chatId/feedbacks')
  async findManyChatId(
    @Param('chatId') chatId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.chatDomainFacade.findOneByIdOrFail(chatId)

    const items = await this.feedbackDomainFacade.findManyByChat(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/chat/:chatId/feedbacks')
  async createByChatId(
    @Param('chatId') chatId: string,
    @Body() body: FeedbackCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, chatId }

    const item = await this.feedbackDomainFacade.create(valuesUpdated)

    await this.eventService.emit<FeedbackApplicationEvent.FeedbackCreated.Payload>(
      FeedbackApplicationEvent.FeedbackCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
