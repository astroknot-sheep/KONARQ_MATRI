import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { FeedbackDomainModule } from '../domain'
import { FeedbackController } from './feedback.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { FeedbackByUserController } from './feedbackByUser.controller'

import { ChatDomainModule } from '../../../modules/chat/domain'

import { FeedbackByChatController } from './feedbackByChat.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    FeedbackDomainModule,

    UserDomainModule,

    ChatDomainModule,
  ],
  controllers: [
    FeedbackController,

    FeedbackByUserController,

    FeedbackByChatController,
  ],
  providers: [],
})
export class FeedbackApplicationModule {}
