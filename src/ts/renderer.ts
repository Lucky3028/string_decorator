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
