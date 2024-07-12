import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { MoodApi } from './mood/mood.api'

import { ChatApi } from './chat/chat.api'

import { MessageApi } from './message/message.api'

import { SettingApi } from './setting/setting.api'

import { FeedbackApi } from './feedback/feedback.api'

import { ExportApi } from './export/export.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Mood extends MoodApi {}

  export class Chat extends ChatApi {}

  export class Message extends MessageApi {}

  export class Setting extends SettingApi {}

  export class Feedback extends FeedbackApi {}

  export class Export extends ExportApi {}
}
