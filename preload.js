
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  onShowExitPopup: (callback) => ipcRenderer.on('show-exit-popup', callback)
});
