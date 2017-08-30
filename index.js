const electron = require('electron');

const {app, BrowserWindow} = electron;

let win;

function createWindow() {
  win = new BrowserWindow({width: 1300, height: 900});
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
