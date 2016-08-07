(function IIFE(){
    function mutation(arr) {
        var splitStringArray = arr[0].split("").map(mapUpperCase);
        var splitStringSecond =  arr[1].split("");
        var mutated = false;
        splitStringSecond.forEach(iterateEach);

        function mapUpperCase(item){
            return item.toUpperCase();
        }

        function iterateEach(item){
            //Only check for more if last check returned true. //Value existed
            if(!mutated){
                mutated = splitStringArray.indexOf(item.toUpperCase()) === -1;
            }
        }

        return !mutated;
    }
})();



