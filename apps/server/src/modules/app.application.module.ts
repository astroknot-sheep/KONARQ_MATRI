import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { MoodApplicationModule } from './mood/application'

import { ChatApplicationModule } from './chat/application'

import { MessageApplicationModule } from './message/application'

import { SettingApplicationModule } from './setting/application'

import { FeedbackApplicationModule } from './feedback/application'

import { ExportApplicationModule } from './export/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    MoodApplicationModule,

    ChatApplicationModule,

    MessageApplicationModule,

    SettingApplicationModule,

    FeedbackApplicationModule,

    ExportApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
