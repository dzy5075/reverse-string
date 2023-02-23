function reverseString(str) {
  // type your code here
  let string = str.
  for (let i = str.length; i < 0, i--)
        return 
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


// change string into an array
// split the array into individual letters
// then loop from the last letter to the first letter
// return each letter 
// change array back into an string