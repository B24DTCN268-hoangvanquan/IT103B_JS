let bookName = prompt("Nhập tên sách:");
let bookStatus = prompt("Nhập trạng thái sách (có sẵn/đã mượn):");
let publishYear = +prompt("Nhập năm xuất bản của sách:");

let currentYear = new Date().getFullYear();
let yearsSincePublished = currentYear - publishYear;

if (bookStatus === "có sẵn" && yearsSincePublished <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (bookStatus === "đã mượn" && yearsSincePublished <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (bookStatus === "đã mượn" && yearsSincePublished > 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (bookStatus === "có sẵn" && yearsSincePublished > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
    console.log("Thông tin nhập không hợp lệ");
}
