import { ipcMain, dialog } from "electron";
const { readFileSync } = require("fs");
const dirTree = require("directory-tree");
const folderTree = require("require-folder-tree");

export const getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog({
    properties: ["openFile", "openDirectory", "multiSelections"]
  });
  if (!files) return;
  return files;
};

export const getParentFolderContent = () => {
  const path = dialog.showOpenDialog({
    properties: ["openFile", "openDirectory", "multiSelections"]
  });
  if (!path) return;
  console.log(path);
  return dirTree(path[0]);
};

export const readStateSavedOnJson = () => {
  const raw = readFileSync("./sto.json");
  return JSON.parse(raw);
}; /// not completed
