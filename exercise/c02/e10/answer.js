function angkaPalindrome(num) {
  for(let i = 0; i < num; i++){
      num++;
      let numString = String(num);
      let len = numString.length;
      let string = '';
      for(let j = len - 1; j >= 0; j--){
        string += numString[j];
      }
      if(numString === string){
        return num
      }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
