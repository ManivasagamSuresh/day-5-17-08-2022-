// sum of all number in array with annoumous func

let input=function (arr)
{
var a = 0 ;
for(let i =0; i<arr.length ; i++)
{
    a += arr[i] ;
}
console.log(a);
}
input([1,2,3,4]);



// sum of all number in array with IIFE func
(function(arr){
    var a = 0 ;
for(let i =0; i<arr.length ; i++)
{
    a += arr[i] ;
}
console.log(a);
    
    
})([1,2,3,4,])



// sum of all number in array with arrow func
let input1 =(arr) =>{
      var a = 0 ;
for(let i =0; i<arr.length ; i++)
{
    a += arr[i] ;
}
console.log(a);
    
}
input1([1,2,3,4]);
