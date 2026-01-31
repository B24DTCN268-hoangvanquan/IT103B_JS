let totalRequests = 0;
let successCount = 0;
let rejectCount = 0;
let pendingCount = 0;

while (true) {
  let answer = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

  if (answer === "không") {
    break;
  }

  if (answer === "có") {
    let readerName = prompt("Tên bạn đọc:");
    let bookCode = prompt("Mã sách muốn đặt trước:");
    let bookName = prompt("Tên sách:");

    let waitDays = +prompt("Số ngày dự kiến chờ:");
    while (isNaN(waitDays) || waitDays < 1) {
      waitDays = +prompt("Số ngày không hợp lệ! Nhập lại (≥ 1):");
    }

    let priority = +prompt("Ưu tiên (1-SV, 2-GV/NCS, 3-Đặc cách):");
    while (priority !== 1 && priority !== 2 && priority !== 3) {
      priority = +prompt("Nhập 1, 2 hoặc 3:");
    }

    if (waitDays > 45) {
      console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
      rejectCount++;
    } else if (priority === 3) {
      console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
      successCount++;
    } else if (priority === 2 && waitDays <= 30) {
      console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
      successCount++;
    } else if (priority === 1 && waitDays <= 21) {
      console.log("Đặt trước thành công");
      successCount++;
    } else {
      console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
      pendingCount++;
    }

    totalRequests++;
  }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý: " + totalRequests);
console.log("Số yêu cầu đặt trước thành công: " + successCount);
console.log("Số yêu cầu bị từ chối: " + rejectCount);
console.log("Số yêu cầu chờ xét duyệt: " + pendingCount);
