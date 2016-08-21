(function IIFE() {
    "use strict";
    function uniteUnique(arr) {
        var argsArray = Array.prototype.slice.call(arguments);
        var newArray = [];
        newArray = argsArray.reduce(function (previousValue, currentValue) {

            currentValue.forEach(function (item) {
                if (newArray.indexOf(item) === -1) {
                    newArray.push(item);
                }

            });
            return newArray;
        }, 0);

        return newArray;
    }

    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

}());