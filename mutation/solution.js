(function IIFE(){

    function mutation(arr) {

        var splitStringArray = arr[0].split("").map(function(item){
            return item.toUpperCase();
        });
        var splitStringSecond =  arr[1].split("");

        var mutated = false;
        for(var i=0; i<splitStringSecond.length; i++){
            mutated = (splitStringArray.indexOf(splitStringSecond[i].toUpperCase()) !== -1);
            if(!mutated)
                break;
        }
        return mutated;
    }

}());