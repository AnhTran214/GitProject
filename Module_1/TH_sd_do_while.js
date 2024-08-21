//Sử dụng vòng lặp do while để viết lại chương trình yêu cầu nhập các số từ 1 -> 10 ở ví dụ trong phần vòng lặp while.
let so = null;
do {
    so = parseFloat(prompt("Nhập các số từ 1 -> 10: "));
} while (parseFloat(so) < 1 || parseFloat(so) > 10);
alert(`Số bạn nhập là ${so}`);