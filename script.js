function threeSum(arr, target) {
// write your code here
  function threeSum(S, target) {
  S.sort((a, b) => a - b); // Sort the array in non-decreasing order
  let closestSum = Infinity;
  for (let i = 0; i < S.length - 2; i++) {
    let j = i + 1;
    let k = S.length - 1;
    while (j < k) {
      const sum = S[i] + S[j] + S[k];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return closestSum;
}

}

module.exports = threeSum;
