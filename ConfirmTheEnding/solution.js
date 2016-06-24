(function () {
    "use strict";
    function confirmEnding(str, target) {
        str = str.substring(str.length - target.length, str.length);
        return str === target;
    }
    confirmEnding("Bastian", "n");

}());