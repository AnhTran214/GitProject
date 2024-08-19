//Bài 1
function kiemTraTrinhDuyet(){
    let td = document.getElementById("trinhDuyet").value;
    switch (td)
    {
        case "Edge": alert("You've got the Edge!");
            break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert("Okay we support these browsers too");
            break;
        default: alert("We hope that this page looks ok!")


    }
}
//Bài 2
function kiemTraA()
{
    let a = parseInt(document.getElementById("a").value);
    switch (a){
        case 0: alert("0");
        break;
        case 1: alert("1")
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
        default: alert("Không hợp lệ!");
    }
}
//Bài 3
function kiemTraSo(){
    let so = parseFloat(document.getElementById("so").value);
    if(so > 0)
    {
        alert("1");
    } else if (so < 0)
    {
        alert("-1");
    } else alert("0");
}