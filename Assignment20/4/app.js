nums = [20,13,12];
let largest;

if (nums[0]> nums[1] && nums[0]>nums[2]) {
    largest = nums[0];
   
} else {
    if (nums[1]>nums[0] && nums[1]>nums[2]){
        largest = nums[1];
    }
    else{
        largest = nums[2];
    }
}

console.log(largest)