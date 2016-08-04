(function () {
    "use strict";
    function bouncer(arr) {
        // Don't show a false ID to this bouncer.
        var filteredArray = arr.filter(function (item) {
            if(item){
                return item;
            };
        });
        return filteredArray;
    }
    bouncer([7, "ate", "", false, 9]);
}());