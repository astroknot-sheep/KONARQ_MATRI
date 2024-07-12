import { User } from '../user'

import { Chat } from '../chat'

export class Feedback {
  id: string

  rating: number

  comments?: string

  userId: string

  user?: User

  chatId: string

  chat?: Chat

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
