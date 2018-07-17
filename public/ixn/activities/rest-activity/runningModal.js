define([
    'js/postmonger'
], function(
    Postmonger
) {
    'use strict';

    var connection = new Postmonger.Session();

    $(window).ready(onRender);

    function onRender() {
        connection.trigger('ready'); // JB will respond the first time 'ready' is called with 'initActivity'

        $('#close').click(function(){
            connection.trigger('destroy');
        });

        $('#closeInspector').click(function(){
            connection.trigger('requestInspectorClose');
        });

        var sizes = ['small', 'medium', 'large'];
        var sizeIndex = 0;
        $('#resize').click(function(){
            var newSize = sizes[sizeIndex];

            sizeIndex++;
            if (sizeIndex === sizes.length) {
                sizeIndex = 0;
            }

            var nextSize = sizes[sizeIndex];

            connection.trigger('requestInspectorResize', newSize);
            $(this).html('Resize to ' + nextSize);
        });
    }
});
