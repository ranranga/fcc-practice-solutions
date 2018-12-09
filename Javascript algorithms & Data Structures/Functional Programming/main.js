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

  // Use reduce method to analyze data
  // Expected output - The averageRating should equal 8.675.
// Add your code below this line
 //watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );
 let customObject = watchList.map((obj) => ({director: obj.Director, rating: obj.imdbRating}));
 
 let filteredCustomObject = customObject.filter(item => item.director === "Christopher Nolan").map(item => parseFloat(item.rating));
 
 let averageRating = filteredCustomObject.reduce((acc, cur) => acc+cur)/filteredCustomObject.length;
 // Add your code above this line
 
 console.log(averageRating); 

 // Sort an array alphabetically using sort method
 // Expected output: alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
 function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
  // Add your code above this line
}
console.log(
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"])
);

//  Return a Sorted Array Without Changing the Original Array
// Expected output: nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9]

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArray = [];
  return newArray.concat(arr).sort();

  
  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));

// Split a String into an Array Using the split Method
/**
 *  splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
 *  splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
 *  splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
 */

function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
console.log(splitify("Hello World,I-am code"));

// Combine an Array into a String Using the join Method
// Expected result:  
/**
 * sentensify("May-the-force-be-with-you") should return "May the force be with you".
 * sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
 * sentensify("There,has,been,an,awakening") should return "There has been an awakening".
 */

function sentensify(str) {
  // Add your code below this line
  let arr = str.split(/\W/);
  return arr.join(" ");
  // Add your code above this line
}
console.log(sentensify("May-the-force-be-with-you"));

// Apply Functional Programming to Convert Strings to URL Slugs
// Expected result
/**
 * urlSlug("Winter Is Coming") should return "winter-is-coming".
 * urlSlug(" Winter Is  Coming") should return "winter-is-coming".
 * urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return 
   "a-mind-needs-books-like-a-sword-needs-a-whetstone".
 * urlSlug("Hold The Door") should return "hold-the-door".
 */
// the global variable
// the global variable
var globalTitle = " Winter Is  Coming";

// Add your code below this line
function urlSlug(title) {
  let newArr = title;
  return newArr.trim().split(/\s+/).join("-").toLowerCase();
  console.log
  //return newArr.join("-").toLowerCase();
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

// Use the every Method to Check that Every Element in an Array Meets a Criteria
// Expected result:
/**
 * checkPositive([1, 2, 3, -4, 5]) should return false.
 * checkPositive([1, 2, 3, 4, 5]) should return true.
 * checkPositive([1, -2, 3, -4, 5]) should return false.
 */

function checkPositive(arr) {
  // Add your code below this line
  return arr.every((el) => {
      return el > 0;
  });
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
// Expected Result:
/**
 * checkPositive([1, 2, 3, -4, 5]) should return true.
 * checkPositive([1, 2, 3, 4, 5]) should return true.
 * checkPositive([-1, -2, -3, -4, -5]) should return false.
 */

function checkPositive(arr) {
  // Add your code below this line
  return arr.some((el) => el > 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// Introduction to Currying and Partial Application
// Expected result:
/**
 * add(10)(20)(30) should return 60.
 * add(1)(2)(3) should return 6.
 * add(11)(22)(33) should return 66.
 */

function add(x) {
  // Add your code below this line
  return (y) => {
    return (z) => {
      return x + y + z;
    }
  }
  
  // Add your code above this line
}
add(10)(20)(30);

// Impartial function
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
