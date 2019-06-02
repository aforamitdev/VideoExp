import { ipcMain, dialog } from "electron";

export const getFileFromUserSelection = () => {
  const files = dialog.showOpenDialog({
    properties: ["multiSelections"]
  });
  if (!files) return;
  return files;
};
