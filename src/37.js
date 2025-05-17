function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const fruits = ["apple", "banana", "orange"];
console.log(getRandomInt(fruits.length)); // 2
