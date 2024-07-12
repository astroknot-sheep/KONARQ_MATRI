export namespace ExportApplicationEvent {
  export namespace ExportCreated {
    export const key = 'export.application.export.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
