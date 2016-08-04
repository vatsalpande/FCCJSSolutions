
function destroyer(arr) {
    //var argsArray = arguments.slice(1, arguments.length -1);
    var argsArray = [...arguments];
    var dynamicArgs = argsArray.slice(1,argsArray.length );
    var filteredArray = arr.filter(function filter(item){
        return (dynamicArgs.indexOf(item) == -1);
    });

    return filteredArray;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
