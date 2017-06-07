//Reddit Intermediate challenge - #317
//take the elements in a chemical formula
//print the number of atoms present in a chemical formula


//split the string into individual elements


//Iterate over array of symbols and run the following conditionals
/*conditions:
- if a letter is lowercase
- if there is a parenthesis
- if there is a number
*/

function countElements(elements) {
  let elementObj = {}
  let elementArray = elements.split('')
  for (let i=0; i < elementArray.length; i++) {
    //if you have two uppercase letters in a row i.e. if you have to
    if(elementArray[i] === elementArray[i].toUpperCase() && elementArray[i+1] === elementArray[i+1].toUpperCase()) {
      elementObj[elementArray[i]] = 1
    } else if {
      //TODO: finish this conditional logic
    }
  }
}

checkElement = function(element) {

}

//https://www.reddit.com/r/dailyprogrammer/comments/6eerfk/20170531_challenge_317_intermediate_counting/
