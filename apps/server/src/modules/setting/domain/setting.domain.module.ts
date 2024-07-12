import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SettingDomainFacade } from './setting.domain.facade'
import { Setting } from './setting.model'

@Module({
  imports: [TypeOrmModule.forFeature([Setting]), DatabaseHelperModule],
  providers: [SettingDomainFacade, SettingDomainFacade],
  exports: [SettingDomainFacade],
})
export class SettingDomainModule {}
