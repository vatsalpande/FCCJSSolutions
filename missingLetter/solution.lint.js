(function IIFE() {
    "use strict";

    function fearNotLetter(str) {
        var lastValue;
        var currentValue;
        var missingString;

        str.split("").forEach(function (item) {
            currentValue = item.charCodeAt(0);
            if (!missingString && lastValue && currentValue - lastValue > 1) {
                missingString = String.fromCharCode(currentValue - 1);
            }
            lastValue = currentValue;
        });
        return missingString;
    }
    fearNotLetter("abce");
}());