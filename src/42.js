function getRandomInt(max) {
    var maxInt = Math.floor((max - 1) / 2 + 2);
    return Math.floor(Math.random() * (maxInt - 0)) + 0;
}

document.addEventListener('DOMContentLoaded', function() { 
    setInterval(getRandomInt, 5000); // update the random integer every 5 seconds
});
