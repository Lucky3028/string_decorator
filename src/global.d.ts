// https://qiita.com/sprout2000/items/2b65f7d02e825549804b
declare global {
  interface Window {
    api: Sandbox
  }
}

export interface Sandbox {
  isSupportedNotice: () => boolean
  noSupportedNotice: () => boolean
  notice: () => void
}
