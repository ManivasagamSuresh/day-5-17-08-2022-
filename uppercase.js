// Caps in anonymous func
var Caps = function(a){

 b = a.toUpperCase()
console.log(b);
    }

 Caps("helloworld");


// Caps in IIFE func

(function(a){
     b = a.toUpperCase()
console.log(b);
})("helloworld")



//  Caps in arrow func


let caps = (a) =>{
    b = a.toUpperCase()
console.log(b);
    
}
caps("helloworld");