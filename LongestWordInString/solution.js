(function () {
    "use strict";
    function findLongestWord(str) {
        var strArray = str.split(" ");
        var longestLength = 0;
        strArray.forEach(function (item) {
            if (longestLength < item.length) {
                longestLength = item.length;
            }
        });
        return longestLength;
    }
    findLongestWord("The quick brown fox jumped over the lazy dog");
}());