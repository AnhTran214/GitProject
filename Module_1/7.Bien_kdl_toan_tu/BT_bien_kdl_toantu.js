//Bài 1
function tinh_diem(){
    let diemvl = document.getElementById("vl").value;
    let diemhh = document.getElementById("hh").value;
    let diemsh = document.getElementById("sh").value;
    let sum = parseFloat(diemvl) + parseFloat(diemhh) + parseFloat(diemsh);
    let avg = sum/3;
    document.getElementById("diemtong").innerText = sum.toString();
    document.getElementById("diemTB").innerText = avg.toString();
}
// Bài 2
function doiDoF(){
    let doC = document.getElementById("doC").value;
    let doiDoF = (parseFloat(doC)/5)*9+32;
    document.getElementById("kq").innerText = doiDoF.toString();
}
// Bài 3
const pi = 3.14;
function tinh_S_ht(){
    let r = document.getElementById("r").value;
    let sHT = pi * (parseFloat(r) * parseFloat(r));
    document.getElementById("kqSht").innerText = sHT.toString();
}
// Bài 4
function tinh_C_ht(){
    let r1 = document.getElementById("r1").value;
    let cHT = pi * parseFloat(r1) * 2;
    document.getElementById("kqCht").innerText = cHT.toString();
}