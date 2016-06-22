(function () {
    "use strict";
    function largestOfFour(arr) {
        var largestArray = [];
        arr.forEach(function (item) {
            var largestSubArrayValue;
            item.forEach(function (innerItem) {
                if (!largestSubArrayValue) {
                    largestSubArrayValue = innerItem;
                }
                if (largestSubArrayValue < innerItem) {
                    largestSubArrayValue = innerItem;
                }
                //largestSubArrayValue = (largestSubArrayValue < innerItem) ? innerItem : largestSubArrayValue;
            });
            if (largestSubArrayValue) {
                largestArray.push(largestSubArrayValue);
            }
        });
        return largestArray;
    }
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}());
