function whereDoIBelong(arr, num) {
    "use strict";
        //Concatenate the new number to the array, sort it and then find the index
        var newArray = arr.concat(num);
        newArray.sort((a, b) => (a - b) );
        return newArray.indexOf(num);
    }

    whereDoIBelong([40, 60], 50);

