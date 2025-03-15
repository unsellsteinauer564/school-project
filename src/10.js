const randomNumber = Math.floor(Math.random() * 10) + 1;

if (randomNumber === 7) {
  console.log("Congratulations! You got a 7");
} else if (randomNumber > 7) {
  console.log("You got a number higher than 7, try again!");
} else {
  console.log("You didn't get a 7, try again!");
}
