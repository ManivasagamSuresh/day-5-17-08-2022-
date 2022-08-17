// median with arrow func

const median = (a, b) => {

    let c = [...a, ...b].sort((a, b) => a - b);
    
  
    const half = c.length / 2 | 0;
    
    
    if (c.length % 2) return c[half];
    
    
    return (c[half] + c[half - 1]) / 2;
}

console.log(median([1,2,3],[4,5,6]));


// median with anonomous func

let median2 = function(a,b)
{
   
    let c = [...a, ...b].sort((a, b) => a - b);
    
   
    const half = c.length / 2 | 0;
    
    
    if (c.length % 2) return c[half];
    
    
    return (c[half] + c[half - 1]) / 2;
} 
console.log(median2([1,2,3],[4,5,6]));



// median with IIFE func

(function(a,b)

{
    
    let c = [...a, ...b].sort((a, b) => a - b);
    
    
    const half = c.length / 2 | 0;
    
      if (c.length % 2) 
    {console.log(c[half]);}
    else{
        console.log( (c[half] + c[half - 1]) / 2 );
        
    }
    
    
    
})
([1,2,3],[4,5,6]);