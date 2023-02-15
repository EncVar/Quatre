import { app, BrowserWindow } from "electron";

const prod = process.env.NODE_ENV !== "development";

// Prevent Electron Security Warning (Insecure Content-Security-Policy)
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

app.setName("Quatre");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    title: "Epherome",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (prod) {
    win.loadFile("dist/index.html");
  } else {
    win.loadURL("http://localhost:3000");
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", app.quit);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
