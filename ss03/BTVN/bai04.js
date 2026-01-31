let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let highStockBooks = 0;
let normalStockBooks = 0;

while (true) {
  let cont = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

  if (cont === "không") {
    break;
  }

  if (cont === "có") {
    let bookCode = prompt("Mã sách:");
    while (!bookCode || bookCode.trim() === "") {
      bookCode = prompt("Mã sách không được để trống. Nhập lại:");
    }
    let bookName = prompt("Tên sách:");
    let quantity = +prompt("Số lượng thực tế trong kho:");
    while (isNaN(quantity) || quantity < 0) {
      quantity = +prompt("Số lượng không hợp lệ! Nhập lại (≥ 0):");
    }

    let status = +prompt("Tình trạng sách (1-Bình thường, 2-Mất):");
    while (status !== 1 && status !== 2) {
      status = +prompt("Nhập 1 hoặc 2:");
    }

    if (status === 2) {
      console.log(bookName + " → Sách mất");
      lostBooks++;
    } else if (status === 1 && quantity === 0) {
      console.log(bookName + " → Sách hết hàng");
      outOfStockBooks++;
    } else if (status === 1 && quantity >= 10) {
      console.log(bookName + " → Tồn kho nhiều");
      highStockBooks++;
    } else {
      console.log(bookName + " → Tồn kho bình thường");
      normalStockBooks++;
    }

    totalBooks++;
  }
}

console.log("===== BÁO CÁO KIỂM KÊ =====");
console.log("Tổng số sách đã kiểm kê: " + totalBooks + " cuốn");
console.log("Số sách mất: " + lostBooks + " cuốn");
console.log("Số sách hết hàng: " + outOfStockBooks + " cuốn");
console.log("Số sách tồn kho nhiều: " + highStockBooks + " cuốn");
console.log("Số sách tồn kho bình thường: " + normalStockBooks + " cuốn");
