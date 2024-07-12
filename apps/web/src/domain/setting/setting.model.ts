import { User } from '../user'

export class Setting {
  id: string

  theme: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
