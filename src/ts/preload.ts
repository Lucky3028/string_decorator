window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    const versions = process.versions[type]
    if (typeof versions !== 'undefined') {
      replaceText(`${type}-version`, versions)
    }
  }
})

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  isSupportedNotice: () =>
    ipcRenderer
      .invoke('is-notification-supported')
      .then((result: boolean) => result)
      .catch((err) => console.log(err)),
  noSupportedNotice: () => false,
  notice: () => ipcRenderer.send('require-send-notice')
})
