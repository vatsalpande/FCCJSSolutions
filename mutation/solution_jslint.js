(function IIFE() {
    "use strict";
    function mutation(arr) {

        var splitStringArray = arr[0].split("").map(function split(item) {
            return item.toUpperCase();
        });
        var splitStringSecond = arr[1].split("");

        var mutated = false;
        var i = 0;
        while (i < splitStringSecond.length) {
            i = i + 1;
            mutated = (splitStringArray.indexOf(splitStringSecond[i].toUpperCase()) !== -1);
            if (!mutated) {
                break;
            }
        }
        return mutated;
    }
    mutation(["hello", "hey"]);
}());