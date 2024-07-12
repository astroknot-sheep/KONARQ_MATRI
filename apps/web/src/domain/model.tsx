import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Mood as MoodModel } from './mood/mood.model'

import { Chat as ChatModel } from './chat/chat.model'

import { Message as MessageModel } from './message/message.model'

import { Setting as SettingModel } from './setting/setting.model'

import { Feedback as FeedbackModel } from './feedback/feedback.model'

import { Export as ExportModel } from './export/export.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Mood extends MoodModel {}

  export class Chat extends ChatModel {}

  export class Message extends MessageModel {}

  export class Setting extends SettingModel {}

  export class Feedback extends FeedbackModel {}

  export class Export extends ExportModel {}
}
