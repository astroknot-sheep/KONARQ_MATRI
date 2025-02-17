import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { SettingDomainFacade } from '@server/modules/setting/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { SettingApplicationEvent } from './setting.application.event'
import { SettingCreateDto } from './setting.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class SettingByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private settingDomainFacade: SettingDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/settings')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.settingDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/settings')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: SettingCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.settingDomainFacade.create(valuesUpdated)

    await this.eventService.emit<SettingApplicationEvent.SettingCreated.Payload>(
      SettingApplicationEvent.SettingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
