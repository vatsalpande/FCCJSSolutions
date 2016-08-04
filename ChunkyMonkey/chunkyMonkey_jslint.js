(function IIFE() {
    "use strict";

    function chunkArrayInGroups(arr, size) {
        // Break it up.
        var newArray = [];
        var innerArray = [];
        var arrLength = 0;

        while (arrLength < arr.length) {
            innerArray.push(arr[arrLength]);
            if (innerArray.length === size || arrLength + 1 === arr.length) {
                //alert(innerArray)
                newArray.push(innerArray);
                innerArray = [];
            }
            arrLength = arrLength + 1;

        }
        return newArray;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);


    //chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

}());