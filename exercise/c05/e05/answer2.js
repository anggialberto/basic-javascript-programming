var filterArrUnder10 = arr => {
  let newArr = arr.filter( value => {
    return value > 10;
  });
  return newArr;
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]
