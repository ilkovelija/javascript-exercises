const sumAll = function(int1, int2) {
  
  let sumArray = [];

  let sum = 0;

    if (int1 < 0 || int2 < 0) {
      return "ERROR"
    } else if(typeof int1 !== 'number' || typeof int2 !== 'number') {
      return "ERROR"
    } else if (int1 < int2) {
      for (let i = int1; i <= int2; i++) {
      sumArray.push(i);
    }
      for (let i = 0; i <sumArray.length; i++) {
      sum += sumArray[i];
    }    
  } else if (int1 > int2) {
    for (let i = int2; i <= int1; i++) {
      sumArray.push(i);
    }
    for (let i = 0; i <sumArray.length; i++) {
      sum += sumArray[i];
    }
  }

  console.log(sumArray);
  console.log(sum);
  return sum

};

// Do not edit below this line
module.exports = sumAll;
