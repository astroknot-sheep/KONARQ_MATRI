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

import { Chat } from '../../../modules/chat/domain'

@Entity()
export class Export {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  exportFormat: string

  @Column({})
  timestamp: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.exports)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  chatId: string

  @ManyToOne(() => Chat, parent => parent.exports)
  @JoinColumn({ name: 'chatId' })
  chat?: Chat

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
