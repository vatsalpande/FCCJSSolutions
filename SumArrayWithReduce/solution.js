(function () {

    "use strict";
    function doSumArray() {
        var array = [4, 5, 6, 7, 8];
        function sumReducer(previousValue, nextValue) {
            return previousValue + nextValue;
        }
        var singleVal = array.reduce(sumReducer);
        return singleVal;
    }
    doSumArray();
}());