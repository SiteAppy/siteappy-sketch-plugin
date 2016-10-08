var onRun = function(context) {
  var doc = context.document;
  var selection = context.selection
  var userValues = [doc askForUserInput:"What rotation values do you want to use?" initialValue:"0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345"]
  var alphaArray = userValues.split(',')
  var alphaArrayLen = alphaArray.length

  for(var i=0; i < selection.count(); i++) {
    var layer = selection[i]
    var r = Math.floor(Math.random() * alphaArrayLen)
    layer.setRotation(alphaArray[r]);
  }
};
