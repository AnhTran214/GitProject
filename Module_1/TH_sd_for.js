//Bài 1: Viết chương trình hiển thị chuỗi “The number is N” 5 lần sử dụng vòng lặp for. Với N sẽ hiển thị từ 0 đến 5.
let N = 5;
let chuoi= "";
for (let i = 0; i<N; i++) {
    chuoi += "The number is " + i + "<br>";
}
document.getElementById("b1").innerHTML = chuoi;
//Bài 2: Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
function tinhTong(){
    let n = parseFloat(document.getElementById("N").value);
    let tong = 0;
    for (let i = 1; i <= n; i++)
    {
        tong = tong + i;
    }
    document.getElementById("kq").innerHTML = tong.toString();
}