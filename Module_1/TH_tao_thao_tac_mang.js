let x = 0;
let arr = Array();
function addArray(){
    arr[x] = document.getElementById("so").value; // gán giá trị nhập vào input-text cho phần tử tại vị trí x trong mảng
    alert(`Bạn vừa thêm số ${arr[x]} vào vị trí ${x} của mảng`);// thông báo cho người dùng biết giá trị đã được thêm
    x++;// tăng giá trị x lên để khi thêm phần tử tiếp theo, index mảng tăng lên
    document.getElementById("so").value = "";// gán lại giá trị rỗng cho input-text
}
function displayArray(){
    let display = "";
    for (let i = 0; i<arr.length; i++){
        display += `arr[${i}] = ${arr[i]} <br>`;
    }
    document.getElementById("array").innerHTML = display;
}