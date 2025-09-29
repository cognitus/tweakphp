export interface IHistoryApi {
  add: (tabId: number, code: string) => void
  undo: (tabId: number) => void
  redo: (tabId: number) => void
  onUndoReply: (callback: (code: string) => void) => void
  onRedoReply: (callback: (code: string) => void) => void
  removeAllListeners: () => void
}

declare global {
  interface Window {
    historyApi: IHistoryApi
  }
}
