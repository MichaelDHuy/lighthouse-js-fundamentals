for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else { 
    console.log(i);
  }
}

const amounts = [61.00, 52.25, 112.99, 5.00];
const total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");