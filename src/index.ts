import { app, BrowserWindow, Notification } from 'electron'
import { ipcMain } from 'electron/main'
import * as path from 'path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve('./dist/preload.js')
    }
  })

  void mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()
}

void app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on('require-send-notice', () => {
    const notification = new Notification({
      title: '基本的な通知',
      body: '簡単なメッセージ',
      silent: false
    })

    notification.show()

    setTimeout(
      () => {
        notification.close()
      },
      5000,
      notification
    )
  })

  ipcMain.handle('is-notification-supported', () => {
    return Notification.isSupported()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
