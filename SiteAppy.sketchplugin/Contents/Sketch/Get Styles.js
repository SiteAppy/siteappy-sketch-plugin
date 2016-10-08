var doc = context.document
var symbols = doc.documentData().layerSymbols()
var selection = context.selection
var loop = selection.objectEnumerator()

var SelectedCSS = ""

while (item = loop.nextObject()) {
    var CSSString = item.CSSAttributeString()
    SelectedCSS += "\n" + CSSString
}

var newPage = doc.newPage()

log(SelectedCSS)
