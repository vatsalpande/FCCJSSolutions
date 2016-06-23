/*
( function () {
    "use strict";
    function factorialize(num) {
        var factorial = 1;

        for(var i=num;i>=1;i--){
            factorial = factorial*i;
        }
        return factorial;
    }
    factorialize(5);
}());*/

//jslint approved
(function () {
    "use strict";
    function factorialize(num) {
        var factorial = 1;
        var i = num;
        while (i >= 1) {
            factorial = factorial * i;
            i = i - 1;
        }
        return factorial;
    }
    factorialize(5);
}());