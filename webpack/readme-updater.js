// module.exports = function(){
// import Shim from '../stage/data-shim.js'
Shim = require('../stage/data-shim')
doIt = function(){
  console.log( "Updating readme with latest data structure example" )
  shim = new Shim()
  dataStr  = shim.printData()

  var fs = require('fs')
  let readMeFile = __dirname + '/../README.md'
  fs.readFile(readMeFile, 'utf8', function (err,data) {
    if (err)
      return console.log(err);
    var result = data.replace(/(Data Structure :)[\s\S]*/gm, `$1\n\`\`\` javascript\n${dataStr}\n\`\`\``);
    fs.writeFile(readMeFile, result, 'utf8', function (err) {
       if (err) return console.log(err);
    })
  })
}
doIt()
