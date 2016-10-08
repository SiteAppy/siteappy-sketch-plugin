var onRun = function(context) {
  var doc = context.document
  var currentPage = doc.currentPage()
  var currentArtboard = currentPage.currentArtboard()
  var allSymbols = doc.documentData().allSymbols()


  if (currentArtboard == undefined) {
    alert("You must first select an arboard to place the symbols.");
  } else {
    for (i = 0; i < allSymbols.count(); i++) {
      var symbol = allSymbols[i]

      var symbolInstance = symbol.newSymbolInstance()

      currentArtboard.addLayers([symbolInstance])
    }
  }

};
