var menubar = require('menubar')

var mb = menubar({
  width: 575,
  height: 300,
  resizable: false
})

mb.on('ready', function ready () {
  console.log('app is ready')
})
