function solution(nums) {
    var answer = 0;
    let arr = [];
    nums.sort((a,b)=>a-b);

    for(let i=0; i<nums.length; i++){
        if(nums[i]!==nums[i+1]){
            arr.push(nums[i]);
        }
    }
    (arr.length>nums.length/2)?answer=nums.length/2:answer=arr.length;

    return answer;
}