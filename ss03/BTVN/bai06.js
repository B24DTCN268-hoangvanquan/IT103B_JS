let totalFeedback = 0;
let seriousComplaints = 0;
let mediumComplaints = 0;
let lightComplaints = 0;
let suggestions = 0;
let positiveFeedback = 0;

while (true) {
  let answer = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

  if (answer === "không") {
    break;
  }

  if (answer === "có") {
    let readerName = prompt("Tên bạn đọc:");
    while (!readerName || readerName.trim() === "") {
      readerName = prompt("Tên không được để trống. Nhập lại:");
    }

    let readerCode = prompt("Mã thẻ bạn đọc (có thể để trống):");

    let type = +prompt(
      "Loại phản hồi (1-Khiếu nại, 2-Đề xuất cải thiện, 3-Phản hồi tích cực):",
    );
    while (type !== 1 && type !== 2 && type !== 3) {
      type = +prompt("Nhập 1, 2 hoặc 3:");
    }

    let level = 0;
    if (type === 1) {
      level = +prompt("Mức độ (1-Nhẹ, 2-Trung bình, 3-Nghiêm trọng):");
      while (level !== 1 && level !== 2 && level !== 3) {
        level = +prompt("Nhập 1, 2 hoặc 3:");
      }
    }

    let content = prompt("Nội dung ngắn gọn:");

    if (type === 1 && level === 3) {
      console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
      seriousComplaints++;
    } else if (type === 1 && level === 2) {
      console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
      mediumComplaints++;
    } else if (type === 1 && level === 1) {
      console.log(" Xử lý ngay tại quầy - Khiếu nại nhẹ");
      lightComplaints++;
    } else if (type === 2) {
      console.log(" Cảm ơn! Đề xuất đã được ghi nhận");
      suggestions++;
    } else if (type === 3) {
      console.log(" Cảm ơn bạn đã phản hồi tích cực!");
      positiveFeedback++;
    }

    totalFeedback++;
  }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại: " + totalFeedback);
console.log("Khiếu nại nghiêm trọng: " + seriousComplaints);
console.log("Khiếu nại trung bình: " + mediumComplaints);
console.log("Khiếu nại nhẹ: " + lightComplaints);
console.log("Đề xuất cải thiện: " + suggestions);
console.log("Phản hồi tích cực: " + positiveFeedback);
