class Student {
  constructor(name, age, dateOfBirth, gender, studentId, ...hobbies) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.studentId = studentId;
    this.hobbies = hobbies;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setdateOfBirth(newDateOfBirth) {
    this.dateOfBirth = newDateOfBirth;
  }

  setGender(newGender) {
    this.gender = newGender;
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(hobby) {
    let locHobby = this.hobbies.indexOf(hobby);
    this.hobbies.splice(locHobby, 1);

  }

  getData() {
    console.log(
    `Student ID : ${this.studentId}
      Fullname : ${this.name}
      Gender : ${this.gender}
      Date of Birth : ${this.dateOfBirth}
      Age : ${this.age} years old
      Hobbies : ${this.hobbies}`
    );
  }

}

const anggi = new Student("Anggi Alberto", 20, "15 Mei 1998", "Male", "50416855", "Ski", "Games");
anggi.getData();
anggi.addHobby("Programming");
anggi.removeHobby("Games");
anggi.getData();
