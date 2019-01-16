function dataHandling2(bioArr){
  const newBioArr = bioArr;
  newBioArr.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  newBioArr.splice(4,1, "Pria", "SMA Internasional Metro");
  
  const name = newBioArr[1];
  const month = newBioArr[3].split("/")[1]
  const dateArr = newBioArr[3].split("/")
  dateArr.sort(function(a, b) {
    return b-a
  });
  const dateString = newBioArr[3].split("/").join("-")
  
  switch(parseInt(month)){
    case 01:
      monthName = 'Januari';
      break;
    case 02:
      monthName = 'Febuari';
      break;
    case 03:
      monthName = 'Maret';
      break;
    case 04:
      monthName = 'April';
      break;
    case 05:
      monthName = 'Mei';
      break;
    case 06:
      monthName = 'Juni';
      break;
    case 07:
      monthName = 'Juli';
      break;
    case 08:
      monthName = 'Agustus';
      break;
    case 09:
      monthName = 'September';
      break;
    case 10:
      monthName = 'Oktober';
      break;
    case 11:
      monthName = 'November';
      break;
    case 12:
      monthName = 'Desember';
      break;
    default:
      monthName = "Tidak ada bulan yang lebih dari 12";
      break;
  };
  
  console.log(newBioArr);
  console.log(monthName);
  console.log(dateArr);
  console.log(dateString);
  console.log(name);
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
