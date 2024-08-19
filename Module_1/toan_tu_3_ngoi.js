// Bài 1 Viết chương trình nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ? :
function showMess(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let sum = a + b;
    let chuoi = (a + b) < 4 ? 'Below':'Over';
    document.getElementById("tong").innerText = sum.toString();
    document.getElementById("chuoi").innerText = chuoi;
}
// Bài 2: Viết chương trình nhập vào giá trị cho chuỗi message.
//
//       + Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
//
//       + Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
//
//       + Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login
//
//       + Còn lại hiển thị chuỗi rỗng
//
//       Sử dụng toán tử ? : để viết chương trình
function showMess2(){
    let chuoi = document.getElementById("chuoi2").value;
    let showChuoi = (chuoi == "Employee") ?'Hello': (chuoi == "Director") ? 'Greetings' : (chuoi == "") ?'No login':"";
    alert(showChuoi);
}