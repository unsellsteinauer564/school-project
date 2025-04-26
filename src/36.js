function getRandomInt(max) {
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - Math.floor(max) + 1)) + Math.floor(max);
}

// Example usage:
console.log(getRandomInt(10)); // Output: 4
