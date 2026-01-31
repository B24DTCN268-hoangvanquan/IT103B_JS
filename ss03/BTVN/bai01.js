let totalBorrows = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");
while (isNaN(totalBorrows) || totalBorrows <= 0) {
  totalBorrows = +prompt("Vui lòng nhập số nguyên dương hợp lệ:");
}
let count = 0;
for (let i = 1; i <= totalBorrows; i++) {
  console.log(" Lượt mượn thứ " + i);
  let borrowerName = prompt("Nhập tên người mượn:");
  let bookName = prompt("Nhập tên sách:");
  let borrowDays = +prompt("Nhập số ngày mượn (1 - 30):");
  while (isNaN(borrowDays) || borrowDays < 1 || borrowDays > 30) {
    borrowDays = +prompt("Số ngày không hợp lệ! Nhập lại (1 - 30):");
  }

  if (borrowDays > 14) {
    console.log(" Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
  } else {
    console.log(" Mượn thành công");
  }
  count++;
}

console.log("===== THỐNG KÊ CUỐI NGÀY =====");
console.log("Tổng số lượt mượn sách: " + count);
