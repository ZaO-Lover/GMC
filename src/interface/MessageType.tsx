export interface MessageType {
    id: string,
    content: {
      text?: string,
      url?: string,
      file?: string,
    },
    contentType: string,
    senderType: string,
    createdAt: number,
}