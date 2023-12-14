// Build a simple loop, that print numbers to the console. from 0 to the lenght of an array.
function printArrayLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

const myArray = [10, 20, 30, 40, 50];
printArrayLength(myArray);
