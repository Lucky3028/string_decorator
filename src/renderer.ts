const notification = document.getElementById('notice')
const noNotification = document.getElementById('noNotice')
const noNotificationAlert = document.getElementById('noNoticeAlert')
const api = window.api

notification?.addEventListener('click', () => {
  const result = api.isSupportedNotice()
  console.log('Notification: ', result)
  if (result) {
    api.notice()
    return
  }
})

noNotification?.addEventListener('click', () => {
  const result = api.noSupportedNotice()
  console.log('Supported: ', result)
})

noNotificationAlert?.addEventListener('click', () => {
  const result = api.noSupportedNotice()
  console.log('Supported: ', result)
  if (!result) {
    alert('PCの通知機能が無効になっています')
    return
  }
})
