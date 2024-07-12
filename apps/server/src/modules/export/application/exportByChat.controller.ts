import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ExportDomainFacade } from '@server/modules/export/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ExportApplicationEvent } from './export.application.event'
import { ExportCreateDto } from './export.dto'

import { ChatDomainFacade } from '../../chat/domain'

@Controller('/v1/chats')
export class ExportByChatController {
  constructor(
    private chatDomainFacade: ChatDomainFacade,

    private exportDomainFacade: ExportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/chat/:chatId/exports')
  async findManyChatId(
    @Param('chatId') chatId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.chatDomainFacade.findOneByIdOrFail(chatId)

    const items = await this.exportDomainFacade.findManyByChat(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/chat/:chatId/exports')
  async createByChatId(
    @Param('chatId') chatId: string,
    @Body() body: ExportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, chatId }

    const item = await this.exportDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ExportApplicationEvent.ExportCreated.Payload>(
      ExportApplicationEvent.ExportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
