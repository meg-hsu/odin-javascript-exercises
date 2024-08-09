const convertToCelsius = function(temp) {
  temp = temp - 32;
  temp = temp * 5/9;
  return rounding(temp);
};

const convertToFahrenheit = function(temp) {
  temp = temp * 9/5;
  temp = temp + 32;
  return rounding(temp);
};

const rounding = function(num){
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
