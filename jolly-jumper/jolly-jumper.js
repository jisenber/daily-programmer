//A sequence of n > 0 integers is called a jolly jumper if the absolute values of the differences between successive elements take on all possible values through n - 1 (which may include negative numbers). For instance,
//1 4 2 3

//is a jolly jumper, because the absolute differences are 3, 2, and 1, respectively. The definition implies that any sequence of a single integer is a jolly jumper. Write a program to determine whether each of a number of sequences is a jolly jumper.

//input: An array of numbers
//output: the numbers and the statement "Jolly" or "NOT JOLLY"
//Math for determining absolute values

    function isJolly(array) {
      if(!Array.isArray(array)) {
        console.log('Needs array input');
        return;
      }
      let originalArray = array;
      array.shift(); //first element should not be included in ref object
      let referenceObj = {};
      for (let i = 0; i < (array.length-1); i++) {
        let absDifference = Math.abs(array[i+1] - array[i]);
        referenceObj[absDifference] = true;
      }
      for (let j = 1; j < array.length; j++) {
        if(!referenceObj[j]) {
          console.log(`[${originalArray}] is NOT JOLLY`);
          return;
        }
      }
      console.log(`[${originalArray}] is JOLLY`);
    }

    isJolly([4, 1, 4, 2, 3]);  //JOLLY
    isJolly([5, 1, 4, 2, -1, 6]); //NOT JOLLY
    isJolly([4, 19, 22, 24, 21]); //NOT JOLLY
    isJolly([4, 19, 22, 24, 25]); //JOLLY
    isJolly([4, 2, -1, 0, 2]); //JOLLY
