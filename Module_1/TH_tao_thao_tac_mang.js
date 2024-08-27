let x = 0;
let arr = Array();
function addArray(){
    arr[x] = document.getElementById("so").value;
    alert(`Bạn vừa thêm số ${arr[x]} vào vị trí ${x} của mảng`);
    x++;
    document.getElementById("so").value = "";
}
function displayArray(){
    let display = "";
    for (let i = 0; i<arr.length; i++){
        display += `arr[${i}] = ${arr[i]} <br>`;
    }
    document.getElementById("array").innerHTML = display;
}