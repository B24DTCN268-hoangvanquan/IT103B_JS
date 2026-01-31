let successCount = 0;
let failCount = 0;

while (true) {
  let request = prompt("Có yêu cầu gia hạn mới không? (có/không)");

  if (request === "không") {
    break;
  }

  if (request === "có") {
    let readerName = prompt("Tên bạn đọc:");
    let bookName = prompt("Tên sách:");

    let currentDays = +prompt("Số ngày đã mượn hiện tại:");
    while (isNaN(currentDays) || currentDays < 1) {
      currentDays = +prompt("Số ngày không hợp lệ! Nhập lại (≥ 1):");
    }

    let extendDays = +prompt("Số ngày muốn gia hạn thêm:");
    while (isNaN(extendDays) || extendDays < 1) {
      extendDays = +prompt("Số ngày không hợp lệ! Nhập lại (≥ 1):");
    }

    let totalDays = currentDays + extendDays;

    if (totalDays > 60) {
      console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
      failCount++;
    } else if (currentDays > 45) {
      console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
      failCount++;
    } else if (totalDays <= 30) {
      console.log("Gia hạn thành công");
      successCount++;
    } else {
      console.log("Yêu cầu không thỏa điều kiện gia hạn thông thường");
      failCount++;
    }
  }
}

console.log("===== THỐNG KÊ CA LÀM VIỆC =====");
console.log("Số lần gia hạn thành công: " + successCount);
console.log("Số lần gia hạn không thành công: " + failCount);
