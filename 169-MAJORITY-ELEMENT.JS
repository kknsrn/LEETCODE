/**
 * 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 * Difficulty: Easy
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let half = nums.length/2;
    let map ={};

for( i=0; i<nums.length ; i++){
    map[nums[i]] =(map[nums[i]] | 0) + 1;
    if(map[nums[i]] > half ){
        return nums[i]
    }
}
    
};
