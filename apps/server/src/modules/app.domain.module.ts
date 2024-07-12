import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { MoodDomainModule } from './mood/domain'

import { ChatDomainModule } from './chat/domain'

import { MessageDomainModule } from './message/domain'

import { SettingDomainModule } from './setting/domain'

import { FeedbackDomainModule } from './feedback/domain'

import { ExportDomainModule } from './export/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    MoodDomainModule,

    ChatDomainModule,

    MessageDomainModule,

    SettingDomainModule,

    FeedbackDomainModule,

    ExportDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
