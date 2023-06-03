import { ipcMain } from "electron";

ipcMain.handle("fetch-document", async (_, args) => {
  console.log(args);

  return "Hello World";
});
