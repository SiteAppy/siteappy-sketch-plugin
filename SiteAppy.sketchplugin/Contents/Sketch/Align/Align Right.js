var onRun = function (context) {
    doc       = context.document;
    selection = context.selection;

    if (selection.count() > 1) {
        [NSApp sendAction: 'alignLayersMiddle:' to: nil from: doc]
    } else {
        doc.showMessage("You must select a layer.");
    }
}
