// Bài 1
/* đầu vào: số ngày lam, tiền lương 1 ngày
Xử lý: tiền lương = lương 1 ngày * số ngày làm
Đầu ra = tiền lương.*/
var ngay = 10, luongNgay = 1000000;
var tienLuong = ngay*luongNgay;
console.log("Bài 1: Tiền lương là:"+ tienLuong);

// Bài 2: 
/*Đầu vào: giá trị 5 số thực;
 Xử lý: giá trị  trung bình = (number1 + number2 + number3 + number4 + number5)/5 
đầu ra: giá trị trung bình;*/

var number1 = 2.5, number2 = 3, number3 = 3/5, number4 = 0, number5 = 12;
var giatriTB = (number1+number2+number3+number4+number5)/5;
console.log("Bài 2:giá trị trung bình là:"+ giatriTB);

//Bài 3
/* Đầu vào: số USD
Xử lý: VND = số USD*23500
Đầu ra: số VND*/

var so_usd = 5.2;
var so_vnd = so_usd*23500;
console.log("Bai 3: số tiền sau quy đổi:"+ so_vnd);

//Bài 4
/*đầu vào: chiều dài, rộng
xử lý: chu vi = (dài + rộng)*2
đầu ra: chu vi*/
var dai = 10, rong = 7;
var chuVi = (dai+rong)*2;
console.log("Bài 4: Chu vi:" + chuVi);


// Bài 5:
/*đầu vào: ký số
xử lý: số hàng chục = math.floor(ký số / 10);
 số hàng dv = ký số % 10;
 đầu ra: tổng = số hàng chục + số hàng dv */
 var n = 35;
 var dv = Math.floor(n/10);
 var chuc = n%10;
 var tong = dv + chuc;
 console.log("Bài 5: tổng 2 ký số:" + tong);
 



