let nameBook = prompt("Nhập tên sách: ");
let nameTrim = nameBook.trim();
let numBook = Number(prompt("Số thứ tự của sách trong thư viện : "));
let bookCode = "LIB" + "-" + nameTrim.toUpperCase() + "-" + numBook;
console.log("Tên sách gốc : " + nameBook);
console.log("Mã sách sau chuẩn hóa là : " + bookCode);
