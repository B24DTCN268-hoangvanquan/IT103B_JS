let totalReturns = +prompt("Hôm nay có bao nhiêu lượt trả sách?");

while (isNaN(totalReturns) || totalReturns <= 0) {
  totalReturns = +prompt("Vui lòng nhập số nguyên dương hợp lệ:");
}
let totalCount = 0;
let lateCount = 0;

for (let i = 1; i <= totalReturns; i++) {
  console.log(" Lượt trả thứ " + i);
  let returnerName = prompt("Tên người trả:");
  let bookName = prompt("Tên sách:");
  let actualDays = +prompt("Số ngày đã mượn thực tế:");

  while (isNaN(actualDays) || actualDays < 1) {
    actualDays = +prompt("Số ngày không hợp lệ! Nhập lại (≥ 1):");
  }

  if (actualDays <= 14) {
    console.log(" Trả đúng hạn");
  } else if (actualDays >= 15 && actualDays <= 21) {
    console.log(" Trả muộn nhẹ | Phạt nhắc nhở");
    lateCount++;
  } else {
    console.log(" Quá hạn nghiêm trọng | Cần ghi biên bản phạt");
    lateCount++;
  }

  totalCount++;
}

console.log("===== THỐNG KÊ CUỐI NGÀY =====");
console.log("Tổng số lượt trả sách: " + totalCount);
console.log("Số lượt trả muộn (≥ 15 ngày): " + lateCount);
