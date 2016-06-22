//Initial version. Linting issues.
// (function(){
//
//     function sumAll(array) {
//         if(array.length ==2){
//             var start = Math.min(array[0], array[1]);
//             var end = Math.max(array[0], array[1]);
//             var sum =0;
//             for(var i=start; i<=end; i++){
//                 sum += i;
//             }
//             return sum;
//         }else{
//             console.error('Length of array is not equal 2');
//         }
//     }
//     sumAll([1, 4]);
// })();


//JSLint approved Version
(function () {
    "use strict";
    function sumAll(array) {
        if (array.length === 2) {
            var start = Math.min(array[0], array[1]);
            var end = Math.max(array[0], array[1]);
            var sum = 0;
            while (start <= end) {
                sum += start;
                start = start + 1;
            }
            return sum;
        }
    }
    sumAll([1, 4]);
}());