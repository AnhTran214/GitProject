//Bài 1
document.write("Bài 1")
document.write("<br>");
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

document.write("i = " + i);
document.write("<br>");
document.write("f = " + f);
document.write("<br>");
document.write("b = " + b);
document.write("<br>");
document.write("s = " + s);
document.write("<br>");
document.write("<br>");
//Bài 2
document.write("Bài 2")
document.write("<br>");
let width = 20;
let height = 10;
let area = width * height;
document.write("Area = " + area);
document.write("<br>");
document.write("<br>");
//Bài 3
let a = parseFloat(prompt("Nhập giá trị của a:"));
let c = parseFloat(prompt("nhập giá trị của b:"));
if(a % c == 0){
    alert(`${a} là bội số của ${c}`);
} else alert(`${a} không là bội số của ${c}`);