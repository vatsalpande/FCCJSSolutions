(function IIFE() {
    "use strict";
    function addTogether() {
        var a;
        if (arguments.length === 2) {
            a = (typeof(arguments[0]) === "number")
                ? arguments[0]
                : undefined;
            var b = (typeof(arguments[1]) === "number")
                ? arguments[1]
                : undefined;
            if (a && b) {
                return a + b;
            }
        } else if (arguments.length === 1) {
            a = (typeof(arguments[0]) === "number")
                ? arguments[0]
                : undefined;
            if (a) {
                return function addMeWith(b) {
                    if (typeof(b) === "number") {
                        return a + b;
                    }
                };
            }
        }
    }

    addTogether(2, 3); //should return 5.
    addTogether(2)(3);// should return 5.
    addTogether("http://bit.ly/IqT6zt");// should return undefined.
    addTogether(2, "3");// should return undefined.
    addTogether(2)([3]);// should return undefined.
}());

