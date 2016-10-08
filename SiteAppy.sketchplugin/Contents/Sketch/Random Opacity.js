var onRun = function(context) {
  var doc = context.document
  var selection = context.selection
  var userValues = [doc askForUserInput:"What opacity values do you want to use?" initialValue:"5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39"]
  var alphaArray = userValues.split(',')
  var alphaArrayLen = alphaArray.length

  for(var i=0; i < selection.count(); i++) {
    var layer = selection[i]
    var r = Math.floor(Math.random() * alphaArrayLen)
    layer.style.contextSettings.setOpacity(alphaArray[r]/100)
  }


};
