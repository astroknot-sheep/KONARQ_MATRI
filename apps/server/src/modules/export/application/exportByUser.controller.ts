import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { ExportDomainFacade } from '@server/modules/export/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { ExportApplicationEvent } from './export.application.event'
import { ExportCreateDto } from './export.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class ExportByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private exportDomainFacade: ExportDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/exports')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.exportDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/exports')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: ExportCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
