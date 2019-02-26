const phi = 3.14;
const power = 2;
let radius = 0;
const calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
const area21 = calculateArea(radius);

radius = 7;
const area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);
