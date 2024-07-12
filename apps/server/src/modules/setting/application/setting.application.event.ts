export namespace SettingApplicationEvent {
  export namespace SettingCreated {
    export const key = 'setting.application.setting.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
