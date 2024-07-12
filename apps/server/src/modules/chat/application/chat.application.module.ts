import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ChatDomainModule } from '../domain'
import { ChatController } from './chat.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { ChatByUserController } from './chatByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, ChatDomainModule, UserDomainModule],
  controllers: [ChatController, ChatByUserController],
  providers: [],
})
export class ChatApplicationModule {}
