var menubar = require('menubar')

var mb = menubar({
  width: 575,
  height: 430,
  resizable: false
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
