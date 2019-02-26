const Student = {
  name: null,
  age: null,
  dateOfBirth: null,
  gender: null,
  studentId: null,
  hobbies: "",


  setName: function (newName) {
    this.name = newName;
    return this;
  },
  setAge: function (newAge) {
    this.age = newAge;
    return this;
  },
  setdateOfBirth: function (newDateOfBirth) {
    this.dateOfBirth = newDateOfBirth;
    return this;
  },
  setGender: function (newGender) {
    this.gender = newGender;
    return this;
  },
  setStudentId: function (newStudentId) {
    this.studentId = newStudentId;
    return this;
  },
  addHobby: function (...newHobby) {
    this.hobbies += newHobby;
    return this;
  },
  removeHobby: function (hobby) {
    return this;
  },

  getData: function () {
    console.log(
      `Student ID : ${this.studentId}
        Fullname : ${this.name}
        Gender : ${this.gender}
        Date of Birth : ${this.dateOfBirth}
        Age : ${this.age} years old
        Hobbies : ${this.hobbies}`
    )
    return this;
  }

}

const anggi = Student;
anggi
  .setName("Anggi Alberto")
  .setAge(18)
  .setdateOfBirth("15 Mei 1998")
  .setGender("Male")
  .setStudentId('50416855')
  .addHobby("Game", "Baca Novel")
  .getData()
