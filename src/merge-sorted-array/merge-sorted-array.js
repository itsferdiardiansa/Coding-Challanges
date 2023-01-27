function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr.splice(j + 1, 1, arr[j])[0]
      }
    }
  }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (!m) {
    nums1 = nums2
    return
  }

  nums1.splice(m, n, ...nums2)

  bubbleSort(nums1)

  console.log('R: ', nums1)
};

// let nums1 = [1, 2, 3, 0, 0, 0]
let nums1 = [4, 5, 6, 0, 0, 0]
// let nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0]
let m = 3
// let nums2 = [2, 5, 6]
let nums2 = [1, 2, 3]
// let nums2 = [-1, 1, 1, 1, 2, 3]
let n = 3

merge(nums1, m, nums2, n)