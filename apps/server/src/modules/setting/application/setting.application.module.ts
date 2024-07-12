import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SettingDomainModule } from '../domain'
import { SettingController } from './setting.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { SettingByUserController } from './settingByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, SettingDomainModule, UserDomainModule],
  controllers: [SettingController, SettingByUserController],
  providers: [],
})
export class SettingApplicationModule {}
