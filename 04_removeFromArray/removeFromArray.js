const removeFromArray = function() {
  let argsArray = Array.from(arguments);

  let mainArray = argsArray[0];

  console.log(`Full array is ${argsArray}`);
  
  console.log(`Main array is ${mainArray}`);

  for (let i = 1; i < argsArray.length; i++) {
    
    let toRemove = argsArray[i];

    console.log(argsArray[i]);

    if (mainArray.includes(argsArray[i]) === true) {
      
      let newArrayIndex = mainArray.indexOf(toRemove);

      let newArray = mainArray.splice(newArrayIndex, 1);
    } else {
      continue;
    }

    console.log(mainArray);
  }

  return mainArray
};

// Do not edit below this line
module.exports = removeFromArray;
