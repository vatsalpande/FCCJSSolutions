function diffArray(arr1, arr2) {
        var combinedArray = arr1.concat(arr2);
        return combinedArray.filter(item => arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1);;
    }
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);