import { User } from '../user'

import { Chat } from '../chat'

export class Export {
  id: string

  exportFormat: string

  timestamp: string

  userId: string

  user?: User

  chatId: string

  chat?: Chat

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
