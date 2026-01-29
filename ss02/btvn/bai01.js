let bookName = prompt("Tên sách: ");
let author = prompt("Tác giả: ");
let bookOfYear = +prompt("Năm xuất bản: ");

if (bookOfYear == 2026) {
  console.log("Đây là sách mới!");
} else if (2021 < bookOfYear && bookOfYear < 2026) {
  console.log("Sách khá mới!");
} else {
  console.log("Sách đã cũ");
}
