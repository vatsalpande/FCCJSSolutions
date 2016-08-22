(function Sum() {
    "use strict";
    function sumFibs(num) {
        var a = 0;
        var b = 1;
        var c;
        var fiboArray = [];
        fiboArray.push(a);
        fiboArray.push(b);

        function fibonacci(a, b) {
            c = a + b;
            if (c <= num) {
                fiboArray.push(c);
                a = b;
                b = c;
                fibonacci(a, b);
            }
            return fiboArray;
        }

        var allNumbers = fibonacci(a, b);

        var sum = allNumbers.reduce(function (previousValue, currentValue) {

            if (currentValue % 2 !== 0) {
                previousValue = previousValue + currentValue;
            }
            return previousValue;
        }, 0);
        return sum;
    }
    sumFibs(10);
}());gt