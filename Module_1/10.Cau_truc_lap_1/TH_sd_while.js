// Bài 1: Viết chương trình nhận vào một số từ hộp thoại, việc nhập kết thúc khi người dùng nhập vào giá trị -1.
// Mỗi giá trị nhập được sẽ được hiển thị ra và thực hiện tính tổng các giá trị đó.
let so = prompt("Nhập vào một số bất kì khác -1: ");
let tong = 0;
while(parseFloat(so) != -1)
{
    document.getElementById("so").innerHTML += so + " ";
    tong += parseFloat(so);
    so = prompt("Nhập vào một số bất kì khác -1: ");
}
document.getElementById("tong").innerHTML = tong.toString();
//Bài 2: Viết chương hình hiển thị thẻ <hr> theo độ rộng từ 1 đến 100. Kết quả sẽ được hiển thị như hình
let i = 1;
while (i <= 100){
    document.write("<hr width = " + i + "%>");
    i++;
}