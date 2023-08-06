const reverseString = function(word) {
  let array = word.split('')
  let reversed = array.reverse();
  let joined = reversed.join('');
  console.log(array, reversed, joined);
  return joined;
};

// Do not edit below this line
module.exports = reverseString;
