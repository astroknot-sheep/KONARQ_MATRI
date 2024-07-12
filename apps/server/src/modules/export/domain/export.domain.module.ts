import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ExportDomainFacade } from './export.domain.facade'
import { Export } from './export.model'

@Module({
  imports: [TypeOrmModule.forFeature([Export]), DatabaseHelperModule],
  providers: [ExportDomainFacade, ExportDomainFacade],
  exports: [ExportDomainFacade],
})
export class ExportDomainModule {}
