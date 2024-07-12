import { User } from '../user'

export class Mood {
  id: string

  moodValue: string

  timestamp: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
