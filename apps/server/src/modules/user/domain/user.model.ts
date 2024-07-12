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

import { Notification } from '../../../modules/notification/domain'

import { Mood } from '../../../modules/mood/domain'

import { Chat } from '../../../modules/chat/domain'

import { Message } from '../../../modules/message/domain'

import { Setting } from '../../../modules/setting/domain'

import { Feedback } from '../../../modules/feedback/domain'

import { Export } from '../../../modules/export/domain'

export enum UserStatus {
  VERIFIED = 'VERIFIED',
  CREATED = 'CREATED',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true, unique: true })
  email?: string

  @Column({ nullable: true })
  name?: string

  @Column({ nullable: true })
  pictureUrl?: string

  @Column({ nullable: true, select: false })
  stripeCustomerId?: string

  @Column({ nullable: true, select: false })
  password?: string

  @Column({ enum: UserStatus, default: UserStatus.VERIFIED })
  status: UserStatus

  @OneToMany(() => Mood, child => child.user)
  moods?: Mood[]

  @OneToMany(() => Chat, child => child.user)
  chats?: Chat[]

  @OneToMany(() => Message, child => child.sender)
  messagesAsSender?: Message[]

  @OneToMany(() => Setting, child => child.user)
  settings?: Setting[]

  @OneToMany(() => Feedback, child => child.user)
  feedbacks?: Feedback[]

  @OneToMany(() => Export, child => child.user)
  exports?: Export[]

  @OneToMany(() => Notification, notification => notification.user)
  notifications?: Notification[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
