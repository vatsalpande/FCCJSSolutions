(function IIFE() {
    "use strict";
    var count = 0;

    function cc(card) {

        // Only change code below this line
        var plusCard = [2, 3, 4, 5, 6];
        var minusCard = [10, "J", "Q", "K", "A"];
        var betInfo;
        if (plusCard.indexOf(card) !== -1) {
            count = count + 1;
        } else if (minusCard.indexOf(card) !== -1) {
            count = count - 1;
        }
        betInfo = count > 0
            ? count + " Bet"
            : count + " Hold";
        return betInfo;
        // Only change code above this line
    }


    cc(2);
    cc(3);
    cc(7);
    cc("K");
    cc("A");
}());