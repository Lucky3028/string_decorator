import { app, BrowserWindow } from 'electron'
import * as path from 'path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve('./dist/js/preload.js')
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
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
