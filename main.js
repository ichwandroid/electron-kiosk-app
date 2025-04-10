
const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, 'assets/icon.png'),
  });

  mainWindow.loadURL('https://shorturl.at/s06cz');

  globalShortcut.register('Alt+Q', () => {
    app.quit();
  });

  globalShortcut.register('Control+Alt+Delete', () => {
    mainWindow.webContents.send('show-exit-popup');
  });
}

app.whenReady().then(createWindow);

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
