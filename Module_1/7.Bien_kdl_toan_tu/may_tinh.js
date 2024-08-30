function cong(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let kq = parseFloat(so1) + parseFloat(so2);
        document.getElementById("kq").innerHTML = kq.toString();
}
function tru(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let kq = parseFloat(so1) - parseFloat(so2);
    document.getElementById("kq").innerHTML = kq.toString();
}
function nhan(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let kq = parseFloat(so1) * parseFloat(so2);
    document.getElementById("kq").innerHTML = kq.toString();
}
function chia(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let kq = parseFloat(so1) / parseFloat(so2);
    document.getElementById("kq").innerHTML = kq.toString();
}