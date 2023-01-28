// When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.
function lastIndexOf(array, value) {
  if (array.length === 0) {
    return -1;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1; // place what would be the else statement outside of the for loop
}
