(function () {
    "use strict";
    function mapArray() {
        var oldArray = [1, 2, 3, 4, 5];
        function mapper(item) {
            return item + 3;
        }
        var newArray = oldArray.map(mapper);
        return newArray;
    }
    mapArray();
}());