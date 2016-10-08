var com = com || {};

com.siteappy = {

}

com.site.common = {
    init: function (context) {
        com.siteappy.context = context;
        com.siteappy.doc = context.document;
        com.siteappy.selection = context.selection;
    }
}

com.siteappy.actions = {
    sendAction: function(commandToPerform) {
        try {
            [NSApp sendAction: commandToPerform to: nil from: com.siteappy.doc];
        } catch (e) {
            log(e)
        }
    },
    sendAlignHorizontally: function() {
        com.siteappy.actions.sendAction('alignLayersCenter:');
    },
    sendAlignVertically: function() {
        com.siteappy.actions.sendAction('alignLayersMiddle:');
    },
}

com.siteappy.layers = {
    alignLayersHorizontally: function(layers) {
        if (layers.count() == 1)  {
            var layer = layers[0];
            var parent = layer.parentGroup();
            var midX = parent.absoluteRect().midX();
            var targetX = Math.ceil(midX - layer.frame().width() / 2);
            layer.absoluteRect().setX(targetX);
        } else if (layers.count() > 1) {
            for (var i = 0; i < layers.count(); i++) {

            }
        }
    },
    alignLayersVertically: function(layers) {
        if (layers.count() == 1)  {
            var layer = layers[0];
            var parent = layer.parentGroup();
            var midY = parent.absoluteRect().midY();
            var targetY = Math.ceil(midY - layer.frame().height() / 2);
            layer.absoluteRect().setY(targetY);
        } else if (layers.count() > 1) {
            for (var i = 0; i < layers.count(); i++) {

            }
        }
    }
};
