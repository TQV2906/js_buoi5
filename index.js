// bài 1: quản lý tuyển sinh
document.getElementById("btnKQ").onclick = function () {
let diemtong = 0;
let diemkhuvuc;
let diemdoituong;
let diemchuan = document.getElementById("diemchuan").value;
let khuvuc = document.getElementById("khuvuc").value;
let doituong = document.getElementById("doituong").value;
let diem1 = document.getElementById("diemmonthu1").value*1;
let diem2 = document.getElementById("diemmonthu2").value*1;
let diem3 = document.getElementById("diemmonthu3").value*1;

switch (khuvuc) {
    case "A":
        diemkhuvuc =2;
        break;
    case "B":
        diemkhuvuc = 1;
        break;
    case "c":
        diemkhuvuc = 0.5;
        break;
    default:
        diemkhuvuc = 0;
        break;
}
switch (doituong) {
    case "1":
      diemdoituong = 2.5;
    break;
    case "2":
        diemdoituong = 1.5;
        break;
    case "3":
        diemdoituong = 1;
        break;
    default:
        diemdoituong = 0;
        break;

    }  
if(diemchuan > 30 || diemchuan <= 0){
    document.getElementById("result").innerHTML = "điểm chuẩn của bạn phải lơn hơn 0  và bé hơn hoặc bằng 30"
    return;
}
if (diem1, diem2, diem3 <= 0 || diem1, diem2, diem3 > 10) {
    document.getElementById("result").innerHTML = "điểm từng môn phải từ 0 đến 10."
    return;  
}

diemtong = diem1 + diem2 + diem3 + diemkhuvuc + diemdoituong;

if (diemtong >= diemchuan) {
    document.getElementById("result").innerHTML = `Chúc mừng! Bạn đã đậu. Diemtong: ${diemtong}`;
} else {
    document.getElementById("result").innerHTML = `Rất tiếc! Bạn đã trượt. Diemtong: ${diemtong}`;
}
};
// bài 2: tính tiền điện

// document.getElementById("btntinhtien").onclick = function () {
// let name = document.getElementById("name").value;
// let kw = document.getElementById("kw").value *1;
// let tiendien;
// if (tiendien <= 50){
//     tiendien = kw * 500;
// }else if (tiendien <= 100){
//     tiendien = kw * 650;
// }else if (tiendien <= 200){
//     tiendien =  kw * 850;
// }else if (tiendien <= 350 ) {
//     tiendien = kw * 1100;
// }else {
//     tiendien = kw *1300;
// }
// document.getElementById("result2").innerHTML = `Họ tên: ${name}; Tiền điện: ${tiendien} VND`;
// };

document.getElementById("btntinhtien").onclick = function () {
    let name = document.getElementById("name").value;  // Lấy giá trị tên
    let kw = document.getElementById("kw").value * 1;  // Lấy giá trị kWh và chuyển thành số
    let tiendien;  // Khai báo biến tiendien

    // Tính tiền điện theo mức sử dụng kWh
    if (kw <= 50) {
        tiendien = kw * 500;
    } else if (kw <= 100) {
        tiendien = kw * 650;
    } else if (kw <= 200) {
        tiendien = kw * 850;
    } else if (kw <= 350) {
        tiendien = kw * 1100;
    } else {
        tiendien = kw * 1300;
    }

    // Hiển thị kết quả
    document.getElementById("result2").innerHTML = `Họ tên: ${name}; Tiền điện: ${tiendien} VND`;
};

// bài 3: tính thuế cá nhân
document.getElementById("btnTienThue").onclick = function () {
    let hoTen = document.getElementById("hoTen").value;
    let thuNhap = document.getElementById("thuNhap").value * 1;
    let nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    if (!hoTen || thuNhap <= 0 || nguoiPhuThuoc < 0) {
      document.getElementById("result3").innerHTML =
        "Vui lòng nhập đầy đủ thông tin hợp lệ!";
      return;
    }
    let thuNhapChiuThue = thuNhap - 4000000 - nguoiPhuThuoc * 1600000;
    let thueThuNhap = 0;
  
    if (thuNhapChiuThue <= 60000000) {
      thueThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
      thueThuNhap = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue <= 210000000) {
      thueThuNhap = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
      thueThuNhap = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
      thueThuNhap = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
      thueThuNhap = thuNhapChiuThue * 0.3;
    } else {
      thueThuNhap = thuNhapChiuThue * 0.35;
    }
    document.getElementById(
      "result3"
    ).innerHTML = `Họ tên: ${hoTen}; Thuế thu nhập cá nhân bạn phải đóng là: ${thueThuNhap} VND.`;
  };