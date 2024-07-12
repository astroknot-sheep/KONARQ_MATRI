import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MoodDomainFacade } from './mood.domain.facade'
import { Mood } from './mood.model'

@Module({
  imports: [TypeOrmModule.forFeature([Mood]), DatabaseHelperModule],
  providers: [MoodDomainFacade, MoodDomainFacade],
  exports: [MoodDomainFacade],
})
export class MoodDomainModule {}
