/*
(function() {
    "use strict";
    function repeatStringNumTimes( str, num ) {
        var repeatedString = "";
        if( num >0 ) {
            var convertedString = []

            for( var i=0; i<num; i++ ){
                convertedString.push(str);
            }
            repeatedString =  convertedString.join("");
        }
        return repeatedString;
    }
    repeatStringNumTimes("abc", 3);
}());*/

//JSLint approved solution

(function () {
    "use strict";
    function repeatStringNumTimes(str, num) {
        var repeatedString = "";
        if (num > 0) {
            var convertedString = [];
            var i = 0;
            while (i < num) {
                convertedString.push(str);
                i = i + 1;
            }
            repeatedString = convertedString.join("");
        }
        return repeatedString;
    }
    repeatStringNumTimes("abc", 3);
}());