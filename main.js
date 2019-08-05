const electron = require("electron");
const url = require("url");
const path = require("path");
// const menuTemplate = require("./menuTemplates");
const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let viewProjectsWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/views/mainWindow.html"),
      protocol: "file",
      slashes: true
    })
  );
  mainWindow.on("close", () => {
    mainWindow = null;
  });
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  //Insert Menu
  Menu.setApplicationMenu(mainMenu);
});

//ALL VIEW TEMPLATE SWITCH

//ALL PROJECTS WINDOW
function createViewProjectsWindow() {
  if (!viewProjectsWindow) {
    viewProjectsWindow = new BrowserWindow({});
    viewProjectsWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "/views/viewProjectsWindow.html"),
        protocol: "file",
        slashes: true
      })
    );

    if (mainWindow) mainWindow.close();
  }
}

//MENU TEMPLATE
const menuTemplate = [
  {
    label: "Dashboard"
  },
  {
    label: "Projects",
    submenu: [
      {
        label: "View Projects",
        click() {
          createViewProjectsWindow();
        }
      },
      {
        label: "Create Project"
      },
      {
        label: "Find Project"
      }
    ]
  },
  {
    label: "Tasks",
    submenu: [
      {
        label: "View Tasks"
      },
      {
        label: "Add Task"
      },
      {
        label: "Find Task"
      }
    ]
  },
  {
    label: "Clients",
    submenu: [
      {
        label: "View Clients"
      },
      {
        label: "Add Clinet"
      },
      {
        label: "Find Client"
      }
    ]
  },
  {
    label: "Users",
    submenu: [
      {
        label: "View Users"
      },
      {
        label: "Add User"
      },
      {
        label: "Find User"
      }
    ]
  },
  {
    label: "Others",
    submenu: [
      {
        label: "Task State"
      },
      {
        label: "Priority State"
      },
      {
        label: "Label"
      }
    ]
  },
  {
    label: "Tools",
    submenu: [
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
