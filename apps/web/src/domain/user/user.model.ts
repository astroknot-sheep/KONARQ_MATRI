import { Notification } from '../notification'

import { Mood } from '../mood'

import { Chat } from '../chat'

import { Message } from '../message'

import { Setting } from '../setting'

import { Feedback } from '../feedback'

import { Export } from '../export'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  moods?: Mood[]

  chats?: Chat[]

  messagesAsSender?: Message[]

  settings?: Setting[]

  feedbacks?: Feedback[]

  exports?: Export[]
}
