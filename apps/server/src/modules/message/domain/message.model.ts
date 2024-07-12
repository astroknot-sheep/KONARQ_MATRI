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

import { Chat } from '../../../modules/chat/domain'

import { User } from '../../../modules/user/domain'

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  content: string

  @Column({})
  timestamp: string

  @Column({})
  chatId: string

  @ManyToOne(() => Chat, parent => parent.messages)
  @JoinColumn({ name: 'chatId' })
  chat?: Chat

  @Column({})
  senderId: string

  @ManyToOne(() => User, parent => parent.messagesAsSender)
  @JoinColumn({ name: 'senderId' })
  sender?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
