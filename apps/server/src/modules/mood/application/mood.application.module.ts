import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MoodDomainModule } from '../domain'
import { MoodController } from './mood.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { MoodByUserController } from './moodByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, MoodDomainModule, UserDomainModule],
  controllers: [MoodController, MoodByUserController],
  providers: [],
})
export class MoodApplicationModule {}
