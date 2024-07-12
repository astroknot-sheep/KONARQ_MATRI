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
import { Export, ExportDomainFacade } from '@server/modules/export/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ExportApplicationEvent } from './export.application.event'
import { ExportCreateDto, ExportUpdateDto } from './export.dto'

@Controller('/v1/exports')
export class ExportController {
  constructor(
    private eventService: EventService,
    private exportDomainFacade: ExportDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)
    const items = await this.exportDomainFacade.findMany(queryOptions)
    return items
  }

  @Post('/')
  async create(@Body() body: ExportCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)
    const item = await this.exportDomainFacade.create(body)

    await this.eventService.emit<ExportApplicationEvent.ExportCreated.Payload>(
      ExportApplicationEvent.ExportCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:exportId')
  async findOne(@Param('exportId') exportId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)
    const item = await this.exportDomainFacade.findOneByIdOrFail(
      exportId,
      queryOptions,
    )
    return item
  }

  @Patch('/:exportId')
  async update(
    @Param('exportId') exportId: string,
    @Body() body: ExportUpdateDto,
  ) {
    const item = await this.exportDomainFacade.findOneByIdOrFail(exportId)
    const itemUpdated = await this.exportDomainFacade.update(
      item,
      body as Partial<Export>,
    )
    return itemUpdated
  }

  @Delete('/:exportId')
  async delete(@Param('exportId') exportId: string) {
    const item = await this.exportDomainFacade.findOneByIdOrFail(exportId)
    await this.exportDomainFacade.delete(item)
    return item
  }
}
