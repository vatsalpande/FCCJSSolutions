(function Sum(){
    function sumFibs(num) {
        var a = 0;
        var b = 1;
        var c;
        var fiboArray = [];
        fiboArray.push(a);
        fiboArray.push(b);

        var allNumbers =   fibonacci(a,b);

        var sum =   allNumbers.reduce(function(previousValue, currentValue){

            if(currentValue %2 !==0){
                previousValue +=  currentValue;
            }
            return previousValue;
        },0);

        function fibonacci(a, b){
            c = a+b;
            if(c <=num){
                fiboArray.push(c);
                a = b;
                b = c;
                fibonacci(a, b);
            }
            return fiboArray;
        }
        return sum;
    }

})();

