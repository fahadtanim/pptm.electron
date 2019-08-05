const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "/views/mainWindow.html"),
      protocol: "file",
      slashes: true
    })
  );

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  //Insert Menu
  Menu.setApplicationMenu(mainMenu);
});

// Menus

const menuTemplate = [
  {
    label: "Dashboard"
  },
  {
    label: "projects",
    submenu: [
      {
        label: "View Projects"
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
  }
];
