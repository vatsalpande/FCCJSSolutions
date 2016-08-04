(function IIFE(){


    function chunkArrayInGroups(arr, size) {
        // Break it up.
        var newArray = [];
        var innerArray = [];

        for(var arrLength = 0; arrLength<arr.length; arrLength++ ){
            innerArray.push(arr[arrLength]);
            if(innerArray.length == size || arrLength+1 == arr.length){
                //alert(innerArray)
                newArray.push(innerArray);
                innerArray = [];
            }

        }
        return newArray;
    }

    chunkArrayInGroups(["a", "b", "c", "d"], 2);


    //chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

})();

/**

 00:53
 @vatsalpande in your for loop iterate array length by sizeß
 var arr2D=[];
 for(var x=0;x<arr.length;x+=size){
    arr2D.push(arr.slice(x,x+size));
  }
 return arr2D;

 */