
// base logic
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);






// Prime with anonomous function

let prime1 = function(arr){
    
    arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(arr);
    
}
prime1([2, 3, 4, 5, 6, 7, 8, 9, 10])





// Prime with IIFE function

(function(arr){
      arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(arr);
    
})
([2, 3, 4, 5, 6, 7, 8, 9, 10]);





// Prime with arrow function

let prime = (arr)=>{
      arr = arr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(arr);
    
}
prime([2, 3, 4, 5, 6, 7, 8, 9, 10]);
