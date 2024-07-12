import { User } from '../user'

import { Message } from '../message'

import { Feedback } from '../feedback'

import { Export } from '../export'

export class Chat {
  id: string

  timestamp: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  messages?: Message[]

  feedbacks?: Feedback[]

  exports?: Export[]
}
