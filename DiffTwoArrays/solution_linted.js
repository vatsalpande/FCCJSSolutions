(function IIFE() {
    "use strict";

    function diffArray(arr1, arr2) {
        var combinedArray = arr1.concat(arr2);
        var newArray = combinedArray.filter(function filterItem(item) {
            return arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1;
        });
        return newArray;
    }
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}());

