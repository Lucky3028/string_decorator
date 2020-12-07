// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const notification = document.getElementById('notice')
const noNotification = document.getElementById('noNotice')
const noNotificationAlert = document.getElementById('noNoticeAlert')

notification?.addEventListener('click', () => {
  const result = window.api.isSupportedNotice()
  console.log('Notification: ', result)
  if (result) {
    window.api.notice()
    return
  }
})

noNotification?.addEventListener('click', () => {
  const result = window.api.noSupportedNotice()
  console.log('Supported: ', result)
})

noNotificationAlert?.addEventListener('click', () => {
  const result = window.api.noSupportedNotice()
  console.log('Supported: ', result)
  if (!result) {
    alert('PCの通知機能が無効になっています')
    return
  }
})
