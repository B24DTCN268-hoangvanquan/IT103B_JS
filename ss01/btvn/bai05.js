let Name = prompt("Tên sách : ");
let yearOfPublication = Number(prompt("Năm xuất bản của sách: "));
let currentYear = Number(prompt("Năm hiện tại: "));
let ageOfBook = currentYear - yearOfPublication;
console.log("Sách: " + Name);
console.log("Năm xuất bản: " + yearOfPublication);
console.log("Tuổi của sách: " + ageOfBook + "năm");
