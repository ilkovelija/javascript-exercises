const repeatString = function (word,times) {
  if (times < 0) {
    return "ERROR";
  } else {
    let text = "";
    for (let i = 0; i < times; i++) {
      text = word.repeat(times);
    }
    return text;
  }
};

// Do not edit below this line
module.exports = repeatString;
