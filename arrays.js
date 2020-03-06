var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//--------------------//

/* var superheroines = ["catwoman", "she-hulk", "mystique"];
 
superheroines.push("wonder woman");

// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]

var cities = ["New York", "San Francisco"]
 
var secondCityArray = ["Philadelphia", ...cities] // ["Philadelphia", "New York", "San Francisco"]
 
console.log(cities); // ["New York", "San Francisco"]
console.log(secondCityArray);
*/

function addElementToBeginningOfArray(newArray, extraItem){
  var array = newArray; // array = "newArray items";
  var array2 = [extraItem, ...array];
  console.log(array);
  console.log(array2);
  return array2;
}

  addElementToBeginningOfArray ([1], "foo"); //testing for accuracy

function destructivelyAddElementToBeginningOfArray (addArray, element){
addArray.unshift(element);
  return addArray;
}

destructivelyAddElementToBeginningOfArray([1], "foo");

function accessElementInArray(sampleArray, index){
  return sampleArray[index];
}


function addElementToEndOfArray(addArray, element){
  var array = addArray;
  var array2 = [...array, element];
  return array2;
}

function destructivelyAddElementToEndOfArray(addArray, element){
  addArray.push(element);
  return addArray;
}



