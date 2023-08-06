const convertToCelsius = function(f) {
  let celcius = 5 / 9 * (f - 32);
  let celciusRounded = Math.round(celcius * 10) / 10;
  console.log(celciusRounded);
  return celciusRounded
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 9 / 5) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  console.log(fahrenheit);
  return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
