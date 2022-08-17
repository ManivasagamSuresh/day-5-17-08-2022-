// rotaion with anonymous func

const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums);
  }
  rotateArray1([1,2,3,4,5],3);
  
  
  // rotaion with IIFE func
  
  
  (function(nums, k)
  {
        for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums);
  })
  ([1,2,3,4,5],3);