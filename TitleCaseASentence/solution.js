(function () {
    "use strict";
    function titleCase(str) {
        var strArray = str.split(" ").map(function (item) {
            item = item.toLowerCase().split("").map(function (innerItem, index) {
                if (index === 0) {
                    innerItem = innerItem.toUpperCase();
                }
                return innerItem;
            }).join("");
            return item;
        }).join(" ");
        return strArray;
    }
    titleCase("I'm a little tea pot");
}());
