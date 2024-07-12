import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'
import { Message } from '../../../modules/message/domain'
import { Feedback } from '../../../modules/feedback/domain'
import { Export } from '../../../modules/export/domain'

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  timestamp: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.chats)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Message, child => child.chat)
  messages?: Message[]

  @OneToMany(() => Feedback, child => child.chat)
  feedbacks?: Feedback[]

  @OneToMany(() => Export, child => child.chat)
  exports?: Export[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
