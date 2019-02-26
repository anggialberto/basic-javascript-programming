var transformArrToLowerCase = arr => {
  let newArr = arr.map( isiArr => {
    return isiArr.toLowerCase();
  });
  return newArr;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
