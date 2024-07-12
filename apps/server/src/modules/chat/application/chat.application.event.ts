export namespace ChatApplicationEvent {
  export namespace ChatCreated {
    export const key = 'chat.application.chat.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
