## Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

Example 2:
```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

Example 3:
```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

Example 4:
```
Input: nums = [-2,1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

                  -2  1  -3  4  -1  2  1  -5  4

              -2  1  -3  4          -1  2  1  -5  4

            -2  1     -3    4     -1   2   1   -5    4

          -2    1   -3    4      -1   2   1   -5    4

                  -3  4         -1  2             4




                  5   4   -1    7   8

              5   4     -1    7   8










console.log(-2 + 1 + -3 + 4 + -1 + 2 + 1 + -5 + 4)

// leftValue = 0
// maxValue = 1

// rightValue = 3, leftValue = 0
console.log(1 - -2)

// rightValue = 2, leftValue = 0
console.log(3 - 1)

// rightValue = 5, leftValue = 0
console.log(2 - -3)

// rightValue = 1, leftValue = 4
console.log(5 - 4)

// rightValue = 2, leftValue = 3
console.log(1 - -1)

// rightValue = 0, leftValue = 5
console.log(2 - 2)

// rightValue = -1, leftValue = 6
console.log(0 - 1)

// rightValue = 4, leftValue = -5
console.log(-1 - -5)

// rightValue = 0, leftValue = -1 
console.log(4 - 4)