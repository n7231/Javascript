function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice(0,arr2.length);
    arr.splice(n,0,...arr1);

    return arr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));

  console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5].
  console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"].
  console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)); 
