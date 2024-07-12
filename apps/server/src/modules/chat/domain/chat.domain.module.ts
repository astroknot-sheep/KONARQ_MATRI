import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ChatDomainFacade } from './chat.domain.facade'
import { Chat } from './chat.model'

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), DatabaseHelperModule],
  providers: [ChatDomainFacade, ChatDomainFacade],
  exports: [ChatDomainFacade],
})
export class ChatDomainModule {}
