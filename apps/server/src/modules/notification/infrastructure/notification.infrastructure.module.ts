import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationMoodSubscriber } from './subscribers/notification.mood.subscriber'

import { NotificationChatSubscriber } from './subscribers/notification.chat.subscriber'

import { NotificationMessageSubscriber } from './subscribers/notification.message.subscriber'

import { NotificationSettingSubscriber } from './subscribers/notification.setting.subscriber'

import { NotificationFeedbackSubscriber } from './subscribers/notification.feedback.subscriber'

import { NotificationExportSubscriber } from './subscribers/notification.export.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationMoodSubscriber,

    NotificationChatSubscriber,

    NotificationMessageSubscriber,

    NotificationSettingSubscriber,

    NotificationFeedbackSubscriber,

    NotificationExportSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
