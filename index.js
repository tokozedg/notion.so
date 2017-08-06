const electron = require('electron');

const {app, BrowserWindow} = electron;

let win;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL("http://notion.so");
  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if(win === null) {
    createWindow();
  }
});
