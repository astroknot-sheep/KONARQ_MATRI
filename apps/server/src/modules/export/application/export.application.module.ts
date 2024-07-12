import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ExportDomainModule } from '../domain'
import { ExportController } from './export.controller'
import { UserDomainModule } from '../../../modules/user/domain'
import { ExportByUserController } from './exportByUser.controller'
import { ChatDomainModule } from '../../../modules/chat/domain'
import { ExportByChatController } from './exportByChat.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ExportDomainModule,
    UserDomainModule,
    ChatDomainModule,
  ],
  controllers: [
    ExportController,
    ExportByUserController,
    ExportByChatController,
  ],
  providers: [],
})
export class ExportApplicationModule {}
