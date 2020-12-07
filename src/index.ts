// Modules to control application life and create native browser window
import { app, BrowserWindow, Notification } from 'electron'
import { ipcMain } from 'electron/main'
import * as path from 'path'
import { setTimeout } from 'timers'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve('./dist/preload.js')
    }
  })

  // and load the index.html of the app.
  void mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
void app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
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

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
