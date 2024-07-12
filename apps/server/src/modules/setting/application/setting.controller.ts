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
import { Setting, SettingDomainFacade } from '@server/modules/setting/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { SettingApplicationEvent } from './setting.application.event'
import { SettingCreateDto, SettingUpdateDto } from './setting.dto'

@Controller('/v1/settings')
export class SettingController {
  constructor(
    private eventService: EventService,
    private settingDomainFacade: SettingDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.settingDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: SettingCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.settingDomainFacade.create(body)

    await this.eventService.emit<SettingApplicationEvent.SettingCreated.Payload>(
      SettingApplicationEvent.SettingCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:settingId')
  async findOne(
    @Param('settingId') settingId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.settingDomainFacade.findOneByIdOrFail(
      settingId,
      queryOptions,
    )

    return item
  }

  @Patch('/:settingId')
  async update(
    @Param('settingId') settingId: string,
    @Body() body: SettingUpdateDto,
  ) {
    const item = await this.settingDomainFacade.findOneByIdOrFail(settingId)

    const itemUpdated = await this.settingDomainFacade.update(
      item,
      body as Partial<Setting>,
    )
    return itemUpdated
  }

  @Delete('/:settingId')
  async delete(@Param('settingId') settingId: string) {
    const item = await this.settingDomainFacade.findOneByIdOrFail(settingId)

    await this.settingDomainFacade.delete(item)

    return item
  }
}
