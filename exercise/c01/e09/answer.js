function balikString(kata){
  res = ''
  for(var i = kata.length-1; i >= 0; i--){
    res += kata[i];
  }
  return res;
}

var input = "hello world!";
console.log(balikString(input));
