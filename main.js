const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


// let win,dimWindow,colorWindow,frameLessWindow;
let parentWindow,childWindow;
let remoteAddress;

function createWindow () {
  remoteAddress=new BrowserWindow();
  // remoteAddress.loadURL("https://github.com/")


  parentWindow=new BrowserWindow({title:"Parent"});
  // childWindow=new BrowserWindow({parent:parentWindow , title:"Child",modal:true})
  childWindow=new BrowserWindow({parent:parentWindow , title:"Child",modal:true,show:false})

  childWindow.loadURL("https://github.com/")
  childWindow.once("ready-to-show",()=>{
    childWindow.show()
  })

  // win = new BrowserWindow()
  // dimWindow=new BrowserWindow({width:400 , height:400,title:"Dimension Window"})
  // colorWindow=new BrowserWindow({width:400 , height:400,title:"Color Window",backgroundColor:"#800000"})
  // frameLessWindow=new BrowserWindow({width:400 , height:400,title:"Color Window",frame:false})



}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});