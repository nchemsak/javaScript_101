// random number
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("random number: ", randomNumber);


var test = "look what I logged";


// if else
if (test === "look what I sdlogged") {

  console.log("booyah");
} else {
  console.log("fail");
}

// pop = prompt("give me a number");
// popint = parseInt(pop);

// if (popint === "NaN") {
//   console.log("that's not a number");
// } else {
//   console.log(popint);
// }


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

var thing = myArray.pop();
console.log("pop on myArray", thing);

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
  var title = "<h2>" + currentSong.title + "</h2>";
  var title = "<h2>" + currentSong.album + "</h2>";

  // theOneImLookingFor.innerHTML += "<h1>The most annoying songs ever: # " + (i + 1) + "</h1>" + title + album;

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
  console.log(MouseEvent);
  var elementText = MouseEvent.target.innerHTML;
  outputEl.innerHTML = "You hovered over the " + elementText + " section";

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
var colors = ["red", "blue", "green", "yellow", "orange", "teal"];

for (var i = 0; i < colors.length; i++) {
  var newColorString = "I like this color: " + colors[i];
  console.log(newColorString);
}


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



var integers = [13, 25, 6, 7, 34, 90, 667];
var integers2 = integers
  .sort(function(a, b) {
    console.log(".sort: ", a, b)
    return b - a
  })

.filter(function(num) {
  console.log(".filter: ", num)
  return num <= 19
})

.map(function(num) {
  console.log(".map: ", num)
  return ((num * 1.5) - 1)
})

.reduce(function(prev, curr) {
  console.log("prev: ", prev, "curr: ", curr)
  return prev + curr
});

console.log("chaining sum: ", integers2);



var annoyingSongs = [];

var callMeMaybe = {
  title: "Call Me Maybe",
  artist: "Carly Rae Jepsen",
  album: "Curiosity"
};

// annoyingSongs.push(callMeMaybe);


var hampster = {
  title: "The Hampsterdance Song",
  artist: "Hampton the Hampster",
  album: "The Hampsterdance Album"
};
annoyingSongs.push(callMeMaybe, hampster);


console.log("annoyingSongs: ", annoyingSongs);

console.log("annoyingSongs[1]: ", annoyingSongs[1].title);
console.log("annoyingSongs[0].title: ", annoyingSongs[0].title);
// console.log("currentSong: ", currentSong);
// var title = "<h2>" + currentSong.title + "</h2>";
// var title = "<h2>" + currentSong.album + "</h2>";

// // theOneImLookingFor.innerHTML += "<h1>The most annoying songs ever: # " + (i+1) + "</h1>" + title + album;




// var numberList = [1, 1, 2, 3, 5, 6, 6, 6, 7, 8, 1, 6, "Nick", "Doug", "Nick", "nick"];



// function newArray(array, element) {
//   let count = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       count++;
//     }
//   }
//   return (Array(count).fill(element));
// }

// console.log("newArray(numberList, 8): ", newArray(numberList, 1));



// function functionName(array, element) {
//   count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       count++;
//     }
//   }
//   return (Array(count).fill(element));
// }



// // let result = functionName(numberList, 6);
// // console.log("result: ", result);





// let nines = Array(20).fill(9);
// let twos = Array(30).fill(2);
// let nick = Array(24).fill("Nick");

// let master = nines.concat(twos, nick);

// console.log("master: ", master);

// let sorted = master.sort();

// console.log("sorted: ", sorted);



// function arrayTest(array, item) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === item) {
//       count++
//     }
//   }
//   return (Array(count).fill(item));
// }

// console.log("arrayTest(numberList, 1): ", arrayTest(numberList, 6));

// console.log("arrayTest(numberList, 1): ", arrayTest(numberList, 1));


// let one = arrayTest(numberList, 6);
// console.log("one: ", one);

// let two = arrayTest(numberList, 2);
// console.log("two: ", two);

// let newest = one.concat(two);
// console.log("newest: ", newest);


// var sort = newest.sort();
// console.log("sortArray: ", sort);


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



// let Nick = countNumberInArray(numberList, "Nick");
// console.log("How many Nick's in array?", Nick);


// let nickArray = createNewArray(numberList, 6);
// console.log("create Nick array", nickArray);



function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}

// console.log("toObject(numberList: ", toObject(numberList));
