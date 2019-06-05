"use strict";

const {
  getFileFromUserSelection,
  getParentFolderContent,
  readStateSavedOnJson
} = require("./ipcProcess");
import { app, protocol, BrowserWindow, ipcMain } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";

const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
    // frame: false
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    console.log(ipcMain);
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

console.log(app.getAppPath());

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }

  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

// listing from the Renderer process for files

ipcMain.on("GetFiles", (e, args) => {
  const files = getFileFromUserSelection();
  e.reply("GetFiles", files);
});

// parent folder content

ipcMain.on("getParentFolder", (e, args) => {
  console.log("exe");
  const folders = getParentFolderContent();
  console.log(folders);
  e.reply("getParentFolder", folders);
});

// getting store

ipcMain.on("readStateFromJson", (e, args) => {
  const store = readStateSavedOnJson();
  e.reply("readStateFromJson", store);
});

// clicking close button will create a json file with crrunt state
const fs = require("fs");
ipcMain.on("closeAll", (e, args) => {
  console.log(args);
  const json = JSON.stringify(args);
  fs.writeFile("sto.json", json, err => {
    if (err) console.log(err);
    console.log("created sucessfully");
  });

  app.quit();
  win = null;
});
