// removing duplicates using anonomous func

let input = function(arr){
    let uniqueChars = [...new Set(arr)];
    
    console.log(uniqueChars);
        
    }
    input(['A', 'B', 'A', 'C', 'B']);
    
    // removing duplicates using IIFE func
    
    
    (function(arr)
    {
       let uniqueChars = [...new Set(arr)];
    
    console.log(uniqueChars); 
    })( ['A', 'B', 'A', 'C', 'B'])
    
    // removing duplicates using arrow func
    
    let input2 = (arr)=>{
         let uniqueChars = [...new Set(arr)];
    
    console.log(uniqueChars); 
        
    }
    input2(  ['A', 'B', 'A', 'C', 'B'] );