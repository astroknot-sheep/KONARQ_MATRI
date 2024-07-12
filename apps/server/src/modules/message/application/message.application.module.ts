import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MessageDomainModule } from '../domain'
import { MessageController } from './message.controller'

import { ChatDomainModule } from '../../../modules/chat/domain'

import { MessageByChatController } from './messageByChat.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { MessageByUserController } from './messageByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MessageDomainModule,

    ChatDomainModule,

    UserDomainModule,
  ],
  controllers: [
    MessageController,

    MessageByChatController,

    MessageByUserController,
  ],
  providers: [],
})
export class MessageApplicationModule {}
