const getRandomColor = () => {
  const colors = ["red", "green", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
};

console.log(getRandomColor());
