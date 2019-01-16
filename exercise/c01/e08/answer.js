var yearOfBirth = 1998;
var age = 2017-yearOfBirth;
var playerHealth = yearOfBirth * Math.random();
var monsterHealth = yearOfBirth * Math.random();
var monsterCode = Math.floor(Math.pow(100, Math.random()));

var name = 'Anggi Alberto';
var actor = 'Ksatria'; // Ada Penyihir, Tabib

if(name == ''){
  var actor = 'kacung'
}

var i = 1;
while(i <= yearOfBirth) {
  if(i % age == 0){
    console.log(actor + ' ' + name + ' menyerang monster!');
    monsterHealth -= age;
  } else if(i % monsterCode == 0){
    console.log('monster menyerang ' + actor + ' ' + name + '!');
    playerHealth -= monsterCode;
  } else if(i % age == 0 && i % monsterCode == 0){
    console.log('Health keduanya bertambah');
    playerHealth += monsterCode;
    monsterHealth += age;    
  }
  i++;
}

if(playerHealth > monsterHealth){
  console.log('Selamat, ' + actor + ' ' + name + ' memenangkan pertarungan!');
} else {
  console.log('Sayang sekali, ' + actor + ' ' + name + ' dikalahkan monster...');
}
