export namespace MoodApplicationEvent {
  export namespace MoodCreated {
    export const key = 'mood.application.mood.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
