const convertToCelsius = function(num) {
  let test;
  test = Math.round(((num - 32)* 5/9) * 10) / 10;
  return test;
};

const convertToFahrenheit = function(num) {
  let test;
  test = Math.round(((num * 9/5) + 32) * 10) / 10;
  return test;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
// (°F − 32) × 5/9 = °C

// (°C × 9/5) + 32 = °F

//Math.round(number * 10) / 10