function tambahDash(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 != 0 && str[i + 1] % 2 != 0) {
      res = i + 1 != str.length ? res + str[i] + "-" : res + str[i];
    } else {
      res += str[i];
    }
  }
  return res;
}

// TEST CASES
console.log(tambahDash('454793')); // '4547-9-3'
console.log(tambahDash('1739028')); // '1-7-3-9028'
console.log(tambahDash('891829')); // '89-1829'
console.log(tambahDash('10192')); // '101-92'
console.log(tambahDash('222222')); // '222222'
