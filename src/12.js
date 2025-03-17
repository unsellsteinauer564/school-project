function getRandomColor() {
  const colors = ["red", "green", "blue"];
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
}
