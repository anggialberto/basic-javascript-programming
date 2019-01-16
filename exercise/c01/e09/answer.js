function reverseWord(word){
  newWord = ''
  for(var i = word.length-1; i >= 0; i--){
    newWord += word[i];
  }
  return newWord;
}

var input = "hello world!";
console.log(reverseWord(input));
