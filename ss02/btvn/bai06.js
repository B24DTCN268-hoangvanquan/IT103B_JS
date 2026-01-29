let bookName = prompt("Nhập tên sách:");
let borrowerName = prompt("Nhập tên người mượn:");
let bookStatus = prompt("Nhập tình trạng sách (có sẵn/đã mượn/không có sẵn):");
let borrowDays = +prompt("Nhập số ngày mượn:");
let hasLibraryCard = prompt("Người mượn có thẻ thư viện không? (có/không):");

if (bookStatus === "có sẵn") {
    if (hasLibraryCard === "có") {
        console.log("Chúc mừng, bạn có thể mượn sách này");
    } else {
        console.log("Bạn cần có thẻ thư viện để mượn sách");
    }
} else if (bookStatus === "đã mượn") {
    if (borrowDays < 30) {
        if (hasLibraryCard === "có") {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }
    } else {
        console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    }
} else if (bookStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
