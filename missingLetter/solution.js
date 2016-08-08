(function IIFE() {
    "use strict";
    /**
     * Split the string and then compare evey value with previous value.
     * As soon as the diference is greater than 1 or 2 to be precise just subtract currentValue -1 or add 1 to lastValue
     * @param str
     * @returns {*}
     */
    function fearNotLetter(str) {
        var lastValue, currentValue, missingString;
        str.split("").forEach(function(item) {
            currentValue = item.charCodeAt(0);
            if(!missingString && lastValue && currentValue -lastValue >1){
                missingString = String.fromCharCode(currentValue -1 );
            }
            lastValue = currentValue;
        });
        return missingString;
    }
    fearNotLetter("abce");
})();