const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomName = () => {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
  return names[getRandomInt(names.length)];
}

const getRandomColor = () => {
  const colors = ["red", "green", "blue", "yellow", "orange"];
  return colors[getRandomInt(colors.length)];
}

const getRandomFood = () => {
  const foods = ["pizza", "salad", "sushi", "taco", "bagel"];
  return foods[getRandomInt(foods.length)];
}

const getRandomDrink = () => {
  const drinks = ["coffee", "tea", "juice", "water", "soda"];
  return drinks[getRandomInt(drinks.length)];
}

const getRandomNumber = (max) => {
  return getRandomInt(max + 1);
}
