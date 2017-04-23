// random number
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("random number: ", randomNumber);


// if else
var test = "look what I logged";
if (test === "look what I sdlogged") {
  console.log("booyah");
} else {
  console.log("fail");
}

//How many hours in a year?
var hoursInYear = 24 * 365;
console.log("Hours in Year", hoursInYear);


// How many minutes in a decade?
var minutesInDecade = (hoursInYear * 60) * 10
console.log("Minutes in Decade", minutesInDecade);


// How many seconds old am I?
var secondsOld = (minutesInDecade * 60) * 3.5;
console.log("I am", secondsOld, "seconds old");
//or
var myAge = 35;
var secondsInYear = hoursInYear * 60 * 60;
var myAgeInSeconds = secondsInYear * myAge;
console.log("I am", myAgeInSeconds, "seconds old, calculated a different way");


//time
var oneSecond = 1000;
var oneMinute = oneSecond * 60;
var oneHour = oneMinute * 60;
var oneDay = oneHour * 24;
var oneYear = oneDay * 365;
var yearHours = oneYear / oneHour;
var decadeMinutes = oneYear * 10 / oneMinute;
var ageSeconds = oneYear * 48 / oneSecond;
var myAgeInYears = 35;


// If I am older than some number, log "I am wise"
// If ( 35 > 34 ) {
//   console.log("I am wise");
//  } else {
//   console.log("I am green");
// }


//arrays
var myArray = [2, "King", false, undefined];
console.log("my junk drawer", myArray);
console.log("array", myArray[1]);
// myArray[1] = "Queen";
// console.log("array ", myArray)


myArray.push("hello");
console.log(myArray);

myArray.unshift("begin");
console.log(myArray);

myArray.pop();
console.log(myArray);

// var thing = myArray.pop();
// console.log("pop on myArray", thing);

console.log(myArray);

//indexOf
var phrase = "The quick brown fox jumps over the lazy dog"
console.log(phrase.indexOf("T"))

// charAt
var phrase = "How now brown cow";
var position = phrase.charAt(8);
console.log(position); //will result in "b"




var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaPosition = alpha.indexOf("a");
console.log(alphaPosition);

for (var i = 1; i <= 26; i++) {

  console.log(alphaPosition);
}


//replace method
var phrase = "The lazy dog";
var newPhrase = phrase.replace("lazy", "bounding");
console.log(newPhrase);


//this will replace individual characters, in this case replaces all "o" with "i"
//the "g" in the .replace below stands for global and replaces ALL the "o".
//without the "g", it would only replace just the first "o"
var phrase = "The lazy dog likes the weird fox";
var newPhrase = phrase.replace(/o/g, "i");
console.log(newPhrase);


// ######################################################################
// #               DOM                   #
// ######################################################################
//.getElementById
//.innerHTML
//this will replace text within the HTML

var phraseString = document.getElementById("myPhrase");
// .innerHTML;
console.log("getElementbyId:", phraseString);
//this will return "This is my phrase" because in my HTML document, I have an ID named "myPhrase"

phraseString.innerHTML = "This is my NEW phrase";
// console.log(phraseString);
console.log("phraseString", phraseString.innerHTML);

////////////////this returns the 1 position class "lotsOfClasses" from the HTML

var classStuff = document.getElementsByClassName("lotsOfClasses");
console.log("classStuff", classStuff);
console.log(classStuff[1]); //since there are 3 "lotsOfClasses" classes in the HTML, [0] returns the 1st one, [1] returns the 2nd one, etc


//getElementsByTagName
var divMadness = document.getElementsByTagName("div");
console.log("divMadness", divMadness);



// ############################################################################################
// #                                        FOR LOOPS                                         #
// ############################################################################################
// psuedo code: for (counter; check for true; change counter)
//(define counter; if true, continue; change counter)

var myArr = [1, 2, 3, 5];
for (var i = 0; i < myArr.length; i++) {
  // console.log(myArr[i] + 1);
  var newer = myArr[i] + 1;
  console.log(myArr[i], newer);
}


for (var i = 0; i <= 100; i += 10) {
  console.log(i);
}


var alpha = [];
var newAlpha = [];
for (var i = 30; i > 26; i -= 1) {
  alpha.push(i);
  newAlpha.push(alpha.concat());
  console.log(alpha.join(""));
}

/// ###########################################################################################
// #                                             OBJECTS                                      #
// ############################################################################################


// ############################ DOT NOTATION #################################
// syntax: key: "value",
// property is a combination of the key and value
// object literal notation
var arr = [];
var myObject = [];
var song = {
  title: "Call me Maybe",
  artist: "Carly Rae Jepsen",
  album: "Cool Songs",
  awards: ["none", "blah"],
  type: {
    style: "pop",
    listenability: "none",
    producers: {
      name: "Freddie Jones",
      name2: "Sally Smith" //no semi-colon at end
    }
  }
  // listAwards: function() {
  // console.log("I won no awards");
}

// console.log(song.listAwards());

// //to get the value of "Sally Smith" above
console.log(song.type.producers.name2);

//to get the value of "blah" above
console.log(song.awards[1]);

//to add to the "type" property/key above
song.type.releaseYear = "2012"
console.log(song.type.releaseYear);

// inserting a brand new, unreleated variable into "song".
//This will replace "myMonkey" with "album" in the console log statement below
var myMonkey = "album"; //unrelated variable defined as the string "album"
console.log("Does it work with . notation?", song[myMonkey]);

//produce an array of all keys in the var "song" using Object.keys
console.log(Object.keys(song));



// ################### WINDOW OBJECT ###############################
// this will list all the window Objects in the console.log

var mindBlown = "hidden Object";
console.log("window", window);

// #################### OBJECT OBJECT ##############################

console.log("object.prototype", Object.prototype);

// #################### getOwnPropertyNames #########################
//  not sure if this is useful at all
console.log("getOwnPropertyNames", Object.getOwnPropertyNames(Object));



// ############################################################################################
// #                   MORE OBJECTS                                      #
// ############################################################################################

var annoyingSongs = [];


var callMeMaybe = {
  title: "Call Me Maybe",
  artist: "Carly Rae Jepsen",
  album: "Curiosity"
};

annoyingSongs.push(callMeMaybe);

console.log("annoyingSongs: ", annoyingSongs);

var hampster = {
  title: "The Hampsterdance Song",
  artist: "Hampton the Hampster",
  album: "The Hampsterdance Album"
};
annoyingSongs.push(hampster);


var ganghamStyle = { title: "Gangnam Style", artist: "Psy", album: "Psy 6" };
annoyingSongs.push(ganghamStyle);

console.log("annoyingSongs", annoyingSongs);


var songElements = document.getElementsByClassName("songs");
console.log("songElements", songElements);

var theOneImLookingFor = songElements[0];
console.log("theOneImLookingFor", theOneImLookingFor);

for (var i = 0; i < annoyingSongs.length; i++) {
  var currentSong = annoyingSongs[i];
  var title = "<h4>" + currentSong.title + "</h4>";
  var album = "<h4>" + currentSong.album + "</h4>";

  theOneImLookingFor.innerHTML += "<h2>Annoying song # " + (i + 1) + "</h2>" + title + album;

}


// ############################################################################################
// #                                     FUNCTIONS                                     #
// ############################################################################################


// Performs an action, but caluclates/returns no value
//function expression
var returnNothing = function() {
  console.log("I don't return anything");
};
returnNothing();


// can also be written like this:
//function declaration - this is TYPCIALLY the better option
function returnNothing() {
  console.log("I don't return anything");
}
returnNothing();


// does a task and returns the result of that task
var result = addStuff(); //result of function below is stored in this variable

function addStuff() { //function runs and returns
  var sum = 2 + 2;
  return sum;
}
console.log(result); //console log results


// does a task with data we provide to it via the arguments
// one and two below are variables.  so, below function add is being defined and so is variables one and two.
function add(one, two) {
  return one + two;
}
var result = add(5, 1); //this is the step that assigns 5 and 1 to "one" and "two" in the function add above
console.log(result); //this will result in 5 + 1 = 6

function subtract(one, two) {
  return one - two;
}


// functions can take other functions as an argument.   This is called a Lambda... Whaaaat?
function performAction(numberOne, numberTwo, action) {
  return action(numberOne, numberTwo);
}

var addResult = performAction(1, 2, add); //uses "add" function from previous example
var subtractResult = performAction(1, 2, subtract); //uses "subtract" function from previous example

console.log("addResult function: " + addResult);
console.log("subtractResult function: " + subtractResult);




// ############################################################################################
// #               EVENT HANDLERS  and event listeners                         #
// ############################################################################################


var outputEl = document.getElementById("output-target")
var articleEl = document.getElementsByClassName("article-section");
console.log("articleE1", articleEl);

function handleSectionClick(MouseEvent) {
  // console.log(MouseEvent);
  var elementText = MouseEvent.target.innerHTML;
  // console.log("elementText: ", elementText);
  outputEl.innerHTML = "You hovered over the " + elementText + " section";
  // return elementText;
}



for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("mouseover", handleSectionClick); //this is the important line.  "mouseover" is the name of the event.  these are predefined.  the 2nd ("handleSectionClick") is the reference to a function.
  articleEl.item(i).addEventListener("mouseout", handleSectionClick);
}


//this one's not working

var header = document.getElementById("page-header");
var outputEll = document.getElementsByClassName("thisOne");
// var outputer =

function handleHeaderMouseOver(event) {
  outputEll.innerHTML = "You moved your mouse over me";
}

function handleHeaderMouseOut(event) {
  outputEll.innerHTML = "Why u leave me?";
}

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseleave", handleHeaderMouseOver);





//this one's kind of/close to working
header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseleave", handleHeaderMouseOver);

var fieldEl = document.getElementById("keypress-input");
fieldEl.addEventListener("keyup", function(event) {
  // is this the right key?
  console.log("event", event);
  outputEl.innerHTML = event.target.value;
});


//.classList - you can add and modify CSS styles to HTML with JavaScript
// you can toggle, move, add
//need examples here:



///event bubbling



// document.getElementById("card--1").addEventListener("click", function(event)
// console.log("target: ", event.target);
// console.log("Currenttarget: ", event.currenttarget);

// )




// ############################################################################################
// #               strings                             #
// ############################################################################################


//this will find the capital letter T in the phrase and tell you its position
var phrase = "There is a dog and blah blah words and a phrase and another dog";
console.log(phrase.indexOf("T"));
console.log(phrase.indexOf("dog"));
console.log("phrase length: " + phrase.length);


//replaces the first instance of a string with another strings
var newPhrase = phrase.replace("dog", "cat");
console.log("newPhrase: " + newPhrase);


//repaces all instances of a string
var newPhraseAgain = phrase.replace(/dog/g, "cat") ///the "g" here says its global and replaces both instances of the word "dog"
console.log("newPhraseAgain: " + newPhraseAgain);

//replaces all instances of multiple strings
var newPhraseAgain = phrase.replace(/dog|blah/g, "cat") ///the "|" here works as an "and" and replaces both "dog" and "blah"
console.log("newPhraseAgain: ", newPhraseAgain);


//replaces specific characters based on position
var greeting = "Hello World";
var newGreeting = greeting.slice(1, 8);
console.log("new Greeting: ", newGreeting);



var upper = phrase.toUpperCase();
console.log("upper: ", upper);
var phraseSplit = phrase.split(" ");

console.log("phraseSplit: ", phraseSplit);

//convert to uppercase
var upperGreeting = greeting.toUpperCase();
console.log("upperCase: ", upperGreeting);

//combining variables
var text3 = upperGreeting + " " + phrase;
console.log(text3);



// ############################################################################################
// #               Arrays                              #
// ############################################################################################

var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
var numbers = [25, 3, 9, 97, 1004, 0];
console.log("colors: ", colors);


// reverse the array
var reverseOrder = colors.reverse();
console.log("reverse order: ", reverseOrder);


//sort colors array alphabetically
var sortColors = colors.sort();
console.log("sortColors: ", sortColors);

console.log(numbers);


//sort numbers array from smallest to largest
var sortNumbers = numbers.sort(function(first, second) {
  // console.log(numbers);
  console.log("first: ", first, "second: ", second, "first-second", first - second)
  return first - second;
});
console.log("sortNumbers: ", sortNumbers);



//Join items in the array.  The output looks very similar, however it is now a string rather than an array
var joinColors = colors.join(", ");
console.log("join colors: ", joinColors, typeof(joinColors)); //the typeof just ends the output with if it is a string, number, etc.  I don't need this in actual code, just to show that it is a string


//split
var newColorArray = joinColors.split(", ");
console.log("New Colors Array: ", newColorArray, typeof(newColorArray));

//slice - this will get specific items in the array...
var fruits = ["apple", "pear", "grapes", "mango", "avacado", "pumpkin"];
var newFruits = fruits.slice(1, 3); //this is like a range, a start and stop point
console.log("new fruit: ", newFruits);



// ############################################################################################
// #               Arrays  part 2                            #
// ############################################################################################



// The forEach method is equivalent to using a for loop to interate over items in the array

var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

colors.forEach(function(item) {
  var newColorString = "I like this color: " + item;
  console.log("new color string: ", newColorString);
});


//the forEach example above is the same as the below loop:
var colors = ["red", "blue", "green", "yellow", "orange", "teal", "green", "green", "green"];

for (var i = 0; i < colors.length; i++) {
  var newColorString = "I like this color: " + colors[i];
  console.log(newColorString);
}


var colors2 = ["black", "blurple", "breen", "bellow", "borange", "beal"];

var combine = colors.concat(colors2);
console.log("combine: ", combine);

var sort = combine.sort();
console.log("sort: ", sort);

let ones = Array(40).fill(1);
console.log("ones: ", ones);


// // The map method lets you create a new array after executing some logic on each item in the original array

// // split turns string into an array
// // join turns array into string

var reversedColors = colors.map(function(color) {
  return color.split("").reverse().join("");
});
console.log("map method reversedColors: ", reversedColors);


// same as:
var reversedColors = [];
for (var i = 0; i < colors.length; i++) {
  var reversed = colors[i].split("").reverse().join("");
  reversedColors.push(reversed);
}
console.log("forloop method reversedColors: ", reversedColors);


// The filter method ALSO creates a new array, which will be populated with items from the original aray that match a certain criteria.

var fourLetters = colors.filter(function(color) {
  return color.length === 4;
});
console.log("filter method, fourLetters: ", fourLetters);

// same as:
var fourLetters = [];
for (var i = 0; i < colors.length; i++) {
  if (colors[i].length === 4) {
    fourLetters.push(colors[i]);
  }
}
console.log("fourLetters", fourLetters);

console.log("");


//the reduce method will perform the same operation on each item in an array, but returns (reduces to) a single value as a result of the logic you write
//for instance sum all the items in an array

var numbers = [51, 10, 62, 4, 13, 9];
var sum = numbers.reduce(function(hello, currr) {
  console.log("prev: ", hello, "curr: ", currr) //this just shows how it adds each item in the array to the previous item in the array
  return hello + currr;
});
console.log("sum", sum);
console.log("");

//same as:
var numbers = [51, 10, 62, 4, 13, 9];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  console.log("sum: ", sum);
  sum += numbers[i];
}
console.log("sum", sum);


console.log("");


// Chaining methods, also known as cascading refers to repeatedly calling one method after another on an object, in ONE continuous line of code.

// ############################################################################################
// #               CHAINING METHOD EXERCISE    USING ARRAYS TAUGHT ABOVE                     #
// ############################################################################################


// Sort the numbers in the below array in DESCENDING order (10, 9, 8, 7, etc)
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers.sort(function(a, b) {
  return b - a;
});
console.log("DESCENDING integers: ", integers2);



// Sort the numbers in ASCENDING order (1,2,3,4,5 etc)
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers.sort(function(a, b) {
  return a - b;
});
console.log("ASCENDING integers: ", integers2);



// //Remove integers greater than a certain number
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers.filter(function(num) {
  return num <= 19
});
console.log("All numbers <= 19: ", integers2);


//Remove integers greater than a certain number in descending order
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers
  .sort(function(a, b) {
    return b - a;
  })
  .filter(function(num) {
    return num <= 19
  });
console.log("All numbers <= 19 in descending order: ", integers2);


// Multiply each remaining number by 2 and then subtract 1
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers.map(function(num) {
  return ((num * 2) - 1)

});
console.log("Multiply by 2 and subtract 1: ", integers2);



// //output the sum of all the resulting numbers (using all the above methods in a row)
var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers
  .sort(function(a, b) {
    return b - a
  })
  .filter(function(num) {
    return num <= 19
  })
  .map(function(num) {
    return ((num * 1.5) - 1)
  })
  .reduce(function(prev, curr) {
    return prev + curr
  });
console.log("chaining sum: ", integers2);




function countNumberInArray(array, number) {
  let count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == number) {
      count++;
    }
  }
  return count;
}

function createNewArray(array, number) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      count++;
    }
  }
  return (Array(count).fill(number));
}


function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}






//******************************************************************************
//                          STRINGS
//******************************************************************************

// Change all Nick to Mary
var string = "Hi, my name is Nick.  I have been Nick my whole life.  Nick's is my favorite name.";
var newString = string.replace(/Nick/g, "Mary");
console.log("newString: ", newString);

//put string into DOM
var thisOne = document.getElementById("insertHere");
thisOne.innerHTML = newString;

// repeat string 10 times
console.log(newString.repeat(10));

//******************************************************************************
//                          ARRAYS
//******************************************************************************

// Create an array with 50 letter "r", 25 letter "b", 12 letter "x".  Put them in alphabetical order
var rArray = Array(50).fill("r");
var bArray = Array(25).fill("b");
var xArray = Array(12).fill("x");

var newArray = rArray.concat(bArray, xArray).sort();
console.log("newArray: ", newArray);


// Add 5 letter "n"'s to the array
function addLetters(n) {
  for (i = 0; i <= 5; i++) {
    newArray.push(n);
  }
}
addLetters("n");
console.log("newArray: ", newArray);

// Create another array with 25 number "4", 3 number "8" and list in decending order.
var array4 = Array(25).fill(4);
var array8 = Array(3).fill(8);
var anotherNewArray = array4.concat(array8);
var newerYet = anotherNewArray.concat(newArray).sort().reverse();
console.log("newerYet: ", newerYet);

// console.log("anotherNewArray: ", anotherNewArray);


// Find the lowest number in an array, and find the highest number in an array
var scores = [82, 78, 95, 100, 99, 55, 55, 20, 69, 100, 72, 78, 84, 78, 100, 65, 100000, 64, 99];

// sort the array, reverse it and then find the number at index 0
var lowestScore = scores.sort(function(a, b) {
  return a - b;
});
console.log("Lowest number: ", lowestScore[0]);

// you can also use ES6 arrow functions:
var lowestScore2 = scores.sort((a, b) => a - b);
console.log("lowestScore2[0]: ", lowestScore2[0]);

// sort the array, reverse it and then find the number at index 0
var highestScore = scores.sort(function(a, b) {
  return a - b;
}).reverse();
console.log("highest number: ", highestScore[0]);


// Take the string "I love pizza in the morning" and put each letter as a
// sperate item in a new array.
var pizzaStr = "I love pizza in the morning";
var pizzaArr = pizzaStr.split("");
console.log("pizzaArr: ", pizzaArr);


// Take the string "I love bologna" and reverse each letter, so it would read
// "angolob evol I"
// var colors = ["black", "plurple", "green", "yellow", "orange", "teal"];

var bolognaStr = "I love bologna";
var reverseStr = bolognaStr.split("").reverse().join("");
console.log("reverseStr: ", reverseStr);


// Take the string "I love bologna" and reverse the words to read
//     "bologna love I"
var reverseWords = bolognaStr.split(" ").reverse().join(" ");
console.log("reverseWords: ", reverseWords);

// Take an array of colors ["red", "blue", "green", "purple"] and reverse the order
// Then, reverse each color’s letters to read ["der", "eulb", "neerg", "elprup"]

var colorArr = ["red", "blue", "green", "purple"];
var reverseArr = colorArr.map(function(color) {
  return color.split("").reverse().join("");
});
console.log("reverseArr: ", reverseArr);

//******************************************************************************
//                          OBJECTS
//******************************************************************************

// Create an object called song1 and add a few keys and values.
var song1 = {
  title: "Your mom",
  artist: "Nick",
  year: 1999
};


// 2. Create another object called song2 and add a few keys and values.
var song2 = {
  title: "Your dad",
  artist: "Madden",
  year: 2000
};
console.log(song1, song2);


// 3. Create and array with both songs and their key/values.
var songs = [];
songs.push(song1, song2);
console.log("songs: ", songs);


// 4. Output both songs to the DOM.
var songElements = document.getElementsByClassName("arrayStuff");
console.log("songElements", songElements);

for (var i = 0; i < songs.length; i++) {
  var currentSong = songs[i];
  var title = "<h4 class = title>" + "title: " + currentSong.title + "</h4>";
  var artist = "<h4 class = artist>" + "artist: " + currentSong.artist + "</h4>";
  var year = "<h4 class = year>" + "year: " + currentSong.year + "</h4>";

  songElements[0].innerHTML += "<h2>Song# " + (i + 1) + "</h2>" + title + artist + year;

}

//******************************************************************************
//                          LOOPS
//******************************************************************************
// Create a loop that prints out all 10’s up to 500. so, 10, 20, 30, etc.
for (i = 10; i <= 500; i += 10) {
  console.log("i: ", i);
}

// Create an arry with all those same numbers

(function numbers() {
  var newArrayer = []
  for (i = 10; i <= 500; i += 10) {
    newArrayer.push(i);
  }
  console.log("newArray: ", newArrayer);
})();


//******************************************************************************
//                          FUNCTIONS
//******************************************************************************

// Function Expressions must NOT start with “function”
// //anonymous function expression
// var a = function() {
//     return 3;
//   }
//   //named function expression
// var a = function bar() {
//     return 3;
//   }
//   //self invoking function expression
//   (function sayHello() {
//     console.log("hello!");
//   })();


// Write a simple function DECLARATION that adds 2 numbers.
// A Function Declaration defines a named function variable without requiring variable assignment.
function add(a, b) {
  return a + b
};
console.log("add(1,2): ", add(10, 2));


// Write another function DECLARATION that subtracts 2 numbers.
function subtract(a, b) {
  return a - b
};
console.log("subtract(10,2): ", subtract(10, 2));


// Write a simple function EXPRESSION that subtracts 2 numbers.
var subtract1 = function(a, b) {
  return a - b
};
console.log(subtract1(10, 5));


// Write another simple function EXPRESSION that adds 2 numbers.
var add1 = function(a, b) {
  return a + b
};
console.log("add: ", add1(10, 5));


// Write a function that takes 2 numbers and a function as arguments and returns the result.
function combineFunct(a, b, action) {
  return action(a, b);
};

var addResult = combineFunct(1, 2, add); //uses "add" function from previous example
var subtractResult = combineFunct(1, 2, subtract); //uses "subtract" function from previous example

console.log("add: " + addResult);
console.log("subtract: " + subtractResult);


// Write a function that outputs every possible die combination of a 10 sided
// die when rolled 3 times.

function threeDiceRoll(i, j, k) {
  var count = 0;
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      for (k = 1; k <= 10; k++) {
        console.log(i, j, k);
        count++;
      }
    }
  }
  console.log("count: ", count);
}

threeDiceRoll();

function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}

function bornYear() {
  return 2017 - this.age;
}

var pers = new person("A", 22);
console.log("pers.yearOfBirth(): ", pers.yearOfBirth());
//******************************************************************************
//                          OTHERS
//******************************************************************************

// Capitalize the first letter of each item in this array: var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");
var capitalLetters = planets.map(function(capital) {
  return capital.charAt(0).toUpperCase() + capital.slice(1);
  // or
  // return capital[0].toUpperCase() + capital.slice(1);

});
console.log("capitalLetters: ", capitalLetters);


// 6. Return all planets that contain the letter 'e'

var filtered = capitalLetters.filter(function(e) {
  return e.toLowerCase().indexOf("e") > -1;
});
console.log("filtered: ", filtered);

// 7.1 output filtered planets to the DOM:

filtered.forEach(function(item) {
  var newPlanetString = item;
  el.innerHTML += newPlanetString + "<br>" + " ";
});

//sonnet

// Take the contents of the sonnet div in the html and place it in a variable
var sonnet = document.getElementById("sonnet").innerHTML;
console.log("Sonnet: ", sonnet);

// Find and output the starting position of the word "orphans"
var orphansPosition = sonnet.indexOf("orphans");
console.log("Starting position of Orphans: " + orphansPosition);

// Output the number of characters in the sonnet
var numberOfChar = sonnet.length;
console.log("Length of Sonnet: " + numberOfChar);

// Replace the first occurance of the string "winter" with "yuletide"
var replaceWords = sonnet.replace("winter", "yuletide");
console.log("Replace words: " + replaceWords);

// Replace all occurances of the string "the" with "a large"
var allReplace = replaceWords.replace(/the /gi, "a large ");
console.log("Replace all 'the': " + allReplace);

// Set the content of the sonnet div with the new string
var insert = document.getElementById("sonnet");
insert.innerHTML = allReplace;


//fizzbuzz
for (var i = 1; i <= 100; i++) {
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}

console.log("break: ");


//basic prototypal inheritance example

// base function
let Robot = function() {
  this.name = null;
  this.health = null;
  this.damage = null;
  this.property = null;
};

// constructors
let Drone = function() {
  let droneBottomHealth = 80;
  let droneTopHealth = 90;
  let droneBottomDamage = 10;
  let droneTopDamage = 15;
  this.health = Math.floor(Math.random() * (droneTopHealth - droneBottomHealth + 1)) + droneBottomHealth;
  this.damage = Math.floor(Math.random() * (droneTopDamage - droneBottomDamage + 1)) + droneBottomDamage;
  this.property = "Aerial";
};
Drone.prototype = new Robot();

let BiPedal = function() {
  let biBottomHealth = 70;
  let biTopHealth = 80;
  let biBottomDamage = 5;
  let bitTopDamage = 10;
  this.health = Math.floor(Math.random() * (biTopHealth - biBottomHealth + 1)) + biBottomHealth;
  this.damage = Math.floor(Math.random() * (bitTopDamage - biBottomDamage + 1)) + biBottomDamage;
  this.property = "Ground";
};
BiPedal.prototype = new Robot();


//******************************************************************************
//                          hash table
//******************************************************************************
var h = {};

h['one'] = 1;
h['two'] = 2;
h['three'] = 3;
console.log("h: ", h);
// show the values stored
for (var k in h) {
  // use hasOwnProperty to filter out keys from the Object.prototype
  if (h.hasOwnProperty(k)) {
    console.log('key is: ' + k + ', value is: ' + h[k]);
  }
}


function HashTable(obj) {
  this.length = 0;
  this.items = {};
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      this.items[p] = obj[p];
      this.length++;
    }
  }

  this.setItem = function(key, value) {
    var previous = undefined;
    if (this.hasItem(key)) {
      previous = this.items[key];
    } else {
      this.length++;
    }
    this.items[key] = value;
    return previous;
  }

  this.getItem = function(key) {
    return this.hasItem(key) ? this.items[key] : undefined;
  }

  this.hasItem = function(key) {
    return this.items.hasOwnProperty(key);
  }

  this.removeItem = function(key) {
    if (this.hasItem(key)) {
      previous = this.items[key];
      this.length--;
      delete this.items[key];
      return previous;
    } else {
      return undefined;
    }
  }

  this.keys = function() {
    var keys = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        keys.push(k);
      }
    }
    return keys;
  }

  this.values = function() {
    var values = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  }

  this.each = function(fn) {
    for (var k in this.items) {
      if (this.hasItem(k)) {
        fn(k, this.items[k]);
      }
    }
  }

  this.clear = function() {
    this.items = {}
    this.length = 0;
  }
}
var h = new HashTable({
  one: 1,
  two: 2,
  three: 3,
  "i'm no 4": 4
});

console.log('original length: ' + h.length);
console.log('value of key "one": ' + h.getItem('one'));
console.log('has key "foo"? ' + h.hasItem('foo'));
console.log('previous value of key "foo": ' + h.setItem('foo', 'bar'));
console.log('length after setItem: ' + h.length);
console.log('value of key "foo": ' + h.getItem('foo'));
console.log('value of key "im no 4 ": ' + h.getItem("im no 4"));
h.clear();
console.log('length after clear: ' + h.length);
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
//            Prototypal Inheritence
// -------------------------------------------------------------------------
var alien = {
  kind: 'alien',
  skin: 'green'
}

var person = {
  kind: 'person'
}

var zog = Object.create(alien);

// console.log(person.isPrototypeOf(zog)); //false
// console.log(alien.isPrototypeOf(zog)); //true

console.log("person: ", person);
console.log("alien: ", alien);
console.log("zog: ", zog);
console.log("Object.getPrototypeOf(zog): ", Object.getPrototypeOf(zog));


// -------------------------------------------------------------------------
// Event Delegation used with self invoking anonymous function
// -------------------------------------------------------------------------
(function() {
  document.getElementById("parent-list").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
      console.log("e.target.nodeName: ", e.target.nodeName);
      console.log("e.target.outerText: ", e.target.outerText);
    }
  })
})();


// -------------------------------------------------------------------------
// Document Fragment with self invoking anonymous function
// -------------------------------------------------------------------------
(function() {
  var div = document.getElementById('parent-list');

  var el;
  var i = 1;
  var fragment = document.createDocumentFragment();

  while (i <= 20) {
    el = document.createElement('li');
    el.innerText = 'This is my list item number ' + i;
    fragment.appendChild(el);
    i++;
  }
  // console.log("fragment: ", fragment);
  div.appendChild(fragment);
})();


// -------------------------------------------------------------------------
// nodeList
// -------------------------------------------------------------------------
var div_nodes = document.getElementsByTagName("div");
console.log("div_nodes: ", div_nodes);

var button_nodes = document.getElementsByTagName("button");
console.log("button_nodes: ", button_nodes);


// -------------------------------------------------------------------------
// global "this" refers to the window object
// -------------------------------------------------------------------------
this.console.log("hi");
// is the same as
window.console.log("hi");
// is the same as
console.log("hi");


// -------------------------------------------------------------------------
// Callback function - passing an anonymous function (a function without a name)
// to the forEach method as a parameter.
// -------------------------------------------------------------------------
var friends = ["Mike", "Stacy", "Andy", "Rick"];
friends.forEach(function(eachName, index) {
  console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});


// -------------------------------------------------------------------------
// Closure - You create a closure by adding a function inside another function.
// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// -------------------------------------------------------------------------
function showName(firstName, lastName) {
  var nameIntro = "Your name is ";

  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }
  return makeFullName();
}
console.log(showName("Michael", "Jackson"));


// ************************************************************************
// ************************************************************************
//            CODING CHALLENGES
// ************************************************************************
// ************************************************************************


// -------------------------------------------------------------------------
// 1.     Find duplicates
// -------------------------------------------------------------------------

// function find_dup_cities(string) {

//   let splitString = string.split("\n").filter(Boolean);
//   let uniqueCitiesOutput = splitString.filter(function(currentValue, index, arr) {
//     if (splitString.indexOf(currentValue) === index) {
//       // return splitString.indexOf(currentValue) === index;
//        console.log(currentValue);
//     }
//   });
//   // console.log("UNIQUE CITIES OUTPUT: ", uniqueCitiesOutput.toString().replace(/,/g, '\n'));
// }

// var http = require('http');
// var options = {
//   host: 'themayesfamily.com',
//   path: '/other.txt'
// };

// var callback = function(response) {
//   var str = '';
//   response.on('data', function(chunk) {
//     str = chunk.toString('utf8');
//   });
//   response.on('end', function() {
//     find_dup_cities(str);
//   });
// }

// http.request(options, callback).end();


// -------------------------------------------------------------------------
// 1.     Check to see if array has duplicates - True or False
// -------------------------------------------------------------------------
// The Set object lets you store unique values of any type, whether primitive values or object references.

function testy(array) {
  console.log("array.length: ", array.length);  //this is the length of the array
  console.log("new Set.size: ", (new Set(array)).size);  //this is the length of the new Set, which is unique values of the array.
}

function hasDuplicates(array) {
  // console.log((new Set(array)).size !== array.length);
  return (new Set(array)).size !== array.length;
}

var dups = [1, 2, 3, 4, 5, 5, 5, 5, 7, 8]; //true
var noDups = [1, 2, 3, 4, 5, 6, 7]; //false

testy(dups);
console.log(new Set(dups));
console.log("Has Duplicates? TRUE: ", hasDuplicates(dups));
console.log("Has Duplicates? FALSE: ", hasDuplicates(noDups));



// -------------------------------------------------------------------------
//                2. Linked List
// -------------------------------------------------------------------------
// basic example:

var node1 = {
  data: null,
  next: null
};

var node2 = {
  data: null,
  next: null
};

var node3 = {
  data: null,
  next: null
};

node1.data = "data1";
node2.data = "data2";
node3.data = "data3";
node1.next = node2;
node2.next = node3;

console.log("node1: ", node1);
console.log("node2: ", node2);
console.log("node3: ", node3);

// -------------------------------------------------------------------------

//reverse a singly linked list

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
    next: null
  }
  if (!this.head) {
    this.head = node;
  } else {
    current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList
console.log("sll.head: ", sll.head);
console.log("sll.head.next: ", sll.head.next);

// -------------------------------------------------------------------------

// reverse linked list
function reversesll(sll) {

  if (!sll.head || !sll.head.next) return sll;

  var nodes = [],
    current = sll.head;
  //storing all the nodes in an array
  while (current) {
    nodes.push(current);
    current = current.next;
  }

  var reversedLL = new LinkedList();

  reversedLL.head = nodes.pop();
  current = reversedLL.head;

  var node = nodes.pop();
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while (node) {
    node.next = null;
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }
  return reversedLL;
}

// // //test it
reversesll(sll);
console.log("reversesll(sll): ", reversesll(sll));
// // {head: {value:5, next:{value: 4, next: {value: 3, next: {value:2, next:{value:1, next: null}}}}}}

// -------------------------------------------------------------------------
//                PALINDROME
// -------------------------------------------------------------------------

//Is string a palindrome? - solution 1 - SLOWER
var palindrome_string = "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba";

function checkPalindrome(str) {
  return str == str.split('').reverse().join('');
}

console.log("checkPalindrome(palindrome_string): ", checkPalindrome(palindrome_string));

//Is string a palindrome? - solution 2 - FASTEST
function checkPalindrome2(str) {
  var i = str.length - 1;
  var k = 0;
  while (i > k) {
    if (str.charAt(k++) !== str.charAt(i--)) return false;
  }
  return true;
}
console.log("checkPalindrome2(palindrome_string: ", checkPalindrome2(palindrome_string));

// -------------------------------------------------------------------------
//                FIBONACCI
// -------------------------------------------------------------------------

// solution #1 (recursive)
var looping = function(n) {
  var a = 0,
    b = 1,
    f = 1;

  for (var i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};
console.log("looping(9): ", looping(9));


// solution #2 (non-recursive)
var Fib = function(n) {
  if (n <= 1)
    return n;
  return Fib(n - 1) + Fib(n - 2);
}
console.log("Fib(9): ", Fib(9));


// solution #3 (non-recursive) to an array
var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacci_series(9));


// solution #4 (recursive) and output to DOM using DOM fragment
function getFibonacci(num) {
  var output = ''
  var oldNumber = -1
  var newNumber = 1
  for (i = 0; i < num; i++) {
    var prevOldNumber = newNumber
    newNumber = oldNumber + newNumber
    oldNumber = prevOldNumber
    output = output + newNumber + ' '
      //DOM output
    var div = document.getElementById('fib-list');
    var fragment = document.createDocumentFragment();
    el = document.createElement('li');
    el.innerText = output;
    fragment.appendChild(el);
    div.appendChild(fragment);
  }
  return output
}
console.log(getFibonacci(15));




// -------------------------------------------------------------------------
//                FACTORAL SEQUENCE
// -------------------------------------------------------------------------

// recursive example 1
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("factorial(4): ", factorial(4));


//  example 2
function factorial2(n) {
  var f = [];
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial2(n - 1) * n;
}
console.log("factorial2(4): ", factorial2(4));



//  example 3 - RECURSIVE
function rFact(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * rFact(n - 1);
  }
}
console.log("rFact(4): ", rFact(4));


// example 3 - ITERATIVE
function sFact(n) {
  var rval = 1;
  for (var i = 2; i <= n; i++)
    rval = rval * i;
  return rval;
}
console.log("sFact(4): ", sFact(4));

// -------------------------------------------------------------------------
//                FLOOD FILL
// -------------------------------------------------------------------------
// The flood-fill algorithm takes three parameters: a start node, a target color, and a replacement color.
// The algorithm looks for all nodes in the array that are connected to the start node by a path of the target color and changes them to the replacement color.
// There are many ways in which the flood-fill algorithm can be structured, but they all make use of a queue or stack data structure, explicitly or implicitly.

// Depending on whether we consider nodes touching at the corners connected or not,
// we have two variations: eight-way and four-way respectively.

// Don't use recursion.  BUILD A CUSTOM STACK
// Instead of letting JavaScript handle the stack for us, we can create our own using a simple JavaScript array.
// Since an array has no limit on how many items it can contain, we can have an "infinitely" large stack that we control ourself.



(function() {
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    dimensions = 512,
    mapSize = 8,
    unitSize = dimensions / mapSize;

  canvas.width = canvas.height = dimensions;

  // preset data, change mapSize to 8 and call the floodfill method map to use this
  var map = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],

  ];

  function drawMap(mapData) {
    for (var x = 0; x < mapSize; x++) {
      for (var y = 0; y < mapSize; y++) {
        ctx.fillStyle = "rgb(0,200,0)";
        if (mapData[x][y] == 1) {
          ctx.fillStyle = "rgb(200,0,0)";
        } else if (mapData[x][y] > 1) {
          ctx.fillStyle = "rgb(0,0,200)";
        }
        ctx.fillRect(x * unitSize, y * unitSize, unitSize, unitSize);
      }
    }
  }

  // Flood-fill (node, targetColor, replacementColor):

  function floodFill(mapData, x, y, targetColor, replacementColor) {
    var mapWidth = mapData.length,
      mapHeight = mapData[0].length;

    if (targetColor == null) {
      targetColor = mapData[x][y];
    }

    if (mapData[x][y] !== targetColor) {
      return true;
    }

    mapData[x][y] = replacementColor;

    if (x > 0) { // left
      floodFill(mapData, x - 1, y, targetColor, replacementColor);
    }
    if (y > 0) { // up
      floodFill(mapData, x, y - 1, targetColor, replacementColor);
    }
    if (x < mapWidth - 1) { // right
      floodFill(mapData, x + 1, y, targetColor, replacementColor);
    }
    if (y < mapHeight - 1) { // down
      floodFill(mapData, x, y + 1, targetColor, replacementColor);
    }
  }

  floodFill(map, 3, 3, null, 2);
  drawMap(map);
})();




// -------------------------------------------------------------------------
//                FLOOD FILL part 2
// -------------------------------------------------------------------------


(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());

(function() {
  var canvas, context = null;

  var fill = function(x, y) {
    var image = context.getImageData(x, y, 1, 1);
    var original = image.data;
    var inverse = [255 - original[0], 255 - original[1], 255 - original[2], original[3]];

    var queue = [];
    queue.push({ "x": x, "y": y });

    var workThunk = function() {
      var counter = 0;
      while (queue.length && counter < 30) {
        workOnPixel();
        counter++;
      }
      if (queue.length) {
        requestAnimationFrame(workThunk);
      }
    };

    var workOnPixel = function() {
      var point = queue.pop();
      image = context.getImageData(point.x, point.y, 1, 1);
      var pixel = image.data;

      if (pixel[0] == original[0] &&
        pixel[1] == original[1] &&
        pixel[2] == original[2] &&
        pixel[3] == original[3]) {

        pixel[0] = inverse[0];
        pixel[1] = inverse[1];
        pixel[2] = inverse[2];
        pixel[3] = inverse[3];
        context.putImageData(image, point.x, point.y);

        if (point.x > 0) {
          queue.push({ "x": point.x - 1, "y": point.y });
        }
        if (point.y > 0) {
          queue.push({ "x": point.x, "y": point.y - 1 });
        }
        if (point.x < canvas.width) {
          queue.push({ "x": point.x + 1, "y": point.y });
        }
        if (point.y < canvas.height) {
          queue.push({ "x": point.x, "y": point.y + 1 });
        }
      }
    };

    requestAnimationFrame(workThunk);
  };

  $(function() {
    canvas = document.getElementById("canvas2");
    context = canvas.getContext("2d");
    $("#canvas2").click(function(event) {
      fill(event.offsetX, event.offsetY);
    });

    var img = new Image();
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(this, 0, 0);
    };
    img.src = "them.png";
  });

}());


// -------------------------------------------------------------------------
//                FLOOD FILL part 3
// -------------------------------------------------------------------------
var Stack = [];

function floodFill(x, y) {
  fillPixel(x, y);

  while (Stack.length > 0) {
    toFill = Stack.pop();
    fillPixel(toFill[0], toFill[1]);
  }
}

function fillPixel(x, y) {
  if (!alreadyFilled(x, y)) fill(x, y);

  if (!alreadyFilled(x, y - 1)) Stack.push([x, y - 1]);
  if (!alreadyFilled(x + 1, y)) Stack.push([x + 1, y]);
  if (!alreadyFilled(x, y + 1)) Stack.push([x, y + 1]);
  if (!alreadyFilled(x - 1, y)) Stack.push([x - 1, y]);
}

function fill(x, y) {
  // this function will actually change the color of our box
}

function alreadyFilled(x, y) {
  // this functions checks to see if our square has been filled already
}



var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var prop in obj) {
  console.log('obj.' + prop, '=', obj[prop]);
}

var person = {
  name: "nick",
  married: true,
  hispanic: false
};

for (var feature in person) {
  console.log("feature, person[feature]: ", feature, ':', person[feature]);
}
