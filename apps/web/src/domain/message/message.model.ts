import { Chat } from '../chat'

import { User } from '../user'

export class Message {
  id: string

  content: string

  timestamp: string

  chatId: string

  chat?: Chat

  senderId: string

  sender?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
