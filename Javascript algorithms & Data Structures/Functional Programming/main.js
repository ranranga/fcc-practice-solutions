// 1. Use map method to extract data from an Array

/**
 * Expected output: rating should equal 
 * [{"title":"Inception","rating":"8.8"},{"title":"Interstellar","rating":"8.6"}]
 */

// the global variable
var watchList = [
    {  
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
   },
   {  
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
   }
];

// Add your code below this line

// Basic
var rating = watchList.map(obj => {
    return {title: obj["Title"], rating: obj["imdbRating"]};
});

// Intermediate
var rating1 = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );

// Advanced
var rating2 = watchList.map( obj =>     ({title: obj["Title"], rating: obj["imdbRating"]}) );

// Add your code above this line

console.log(rating); 
// -----------------------

// 2. Implement map on a Prototype

/**
 * Expected output: new_s should equal [46, 130, 196, 10].
 */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});

// -------------------

// 3. Implement the filter method on a Prototype
/**
 * Expected Output: new_s should equal [23, 65, 5].
 */
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // My solution
  // Add your code below this line
  this.forEach(obj => {
    if (callback(obj) === true) {
      newArray.push(obj)
    }
  });
  // Add your code above this line

  // fcc
   // Add your code below this line
   for (let i=0; i<this.length;i++){
    if(callback(this[i])=== true ){
        newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

// --------------------

// 4. Return part of an array using the slice method
// Slice method from begin to end not included
/**
 * Expected output: should return ["Dog", "Tiger"]
 */
function sliceArray(anim, beginSlice, endSlice) {
    // Add your code below this line
    return anim.slice(beginSlice, endSlice);
    // Add your code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);

  // 5. Splice method with single argument
  /**
   * Result expected: 1. London, Berlin
   *                  2. Chicago, Delhi, Islamabad
   * 
   * Note: splice method returns the deleted/removed elements from the array.
   */
  function nonMutatingSplice(cities) {
    // Add your code below this line
    return cities.splice(3);
    
    // Add your code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));
  console.log(inputCities);

  // ---------

  // 6. Remove Elements from an Array Using slice Instead of splice
  /**
   * Expected output: Chicago,Delhi,Islamabad
   */
  function nonMutatingSplice(cities) {
    // Add your code below this line
    let newArray = [];
    if (cities.length > 3) {
       newArray = cities.slice(0, 3);    
    }
    
    return newArray;
    
    // Add your code above this line
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));

  // Combine two arrays using concat method
  /** 
   * Expected output: 1,2,3,4,5
   */
  function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return original.concat(attach);
    
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  console.log(nonMutatingConcat(first, second));


  // Add element to the end of an array using concat instead of push
  function nonMutatingPush(original, newItem) {
    // Add your code below this line
    return original.concat(newItem);//original.push(newItem);
    
    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  console.log(nonMutatingPush(first, second));
