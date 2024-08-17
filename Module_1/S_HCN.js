function S_HCN(){
    let inputH = document.getElementById("chieucao").value;
    let inputW = document.getElementById("chieurong").value;
    let shcnValue = inputH * inputW;
    document.getElementById("shcn").innerText = shcnValue.toString();
}