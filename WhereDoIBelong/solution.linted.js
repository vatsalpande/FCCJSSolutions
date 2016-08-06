(function IIFE() {
    "use strict";
    function whereDoIBelong(arr, num) {
        //Concatenate the new number to the array, sort it and then find the index
        var newArray = arr.concat(num);
        newArray.sort(function compare(a, b) {
            return a - b;
        });
        return newArray.indexOf(num);
    }
    whereDoIBelong([40, 60], 50);
}());