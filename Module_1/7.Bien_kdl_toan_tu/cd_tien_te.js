function fun(){
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCu").value;
    let to = document.getElementById("toCu").value;
    let kq;
    if(from !== to){
        if(from == "VND" && to == "USD")
        {
            kq = parseFloat(amount) / 23000;
            document.getElementById("kq").innerText = kq.toString() + " $";
        } else if(from == "USD" && to == "VND")
        {
            kq = parseFloat(amount) * 23000;
            document.getElementById("kq").innerText = kq.toString() + " VND";
        }
    } else if (from == "USD" && to == "USD")
    {
        document.getElementById("kq").innerText = amount.toString() + " $";
    } else document.getElementById("kq").innerText = amount.toString() + " VND";
}