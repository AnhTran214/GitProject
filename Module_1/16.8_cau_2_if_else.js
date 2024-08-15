let so = prompt("Nhập ngày trong tuần")
//Cách 1: dùng if bậc thang
// if(parseFloat(so) == 1){
//     alert("Chủ nhật");
// } else if(parseFloat(so) == 2){
//     alert("Thứ 2");
// } else if(parseFloat(so) == 3){
//     alert("Thứ 3");
// } else if(parseFloat(so) == 4){
//     alert("Thứ 4");
// } else if(parseFloat(so) == 5){
//     alert("Thứ 5");
// } else if(parseFloat(so) == 6){
//     alert("Thứ 6");
// } else if(parseFloat(so) == 7){
//     alert("Thứ 7");
// } else alert("Không phải ngày trong tuần")

//Cách 2: dùng switch case
switch (parseFloat(so)) {
    case 1: alert("Chủ nhật");
        break;
    case 2: alert("Thứ 2");
        break;
    case 3: alert("Thứ 3");
        break;
    case 4: alert("Thứ 4");
        break;
    case 5: alert("Thứ 5");
        break;
    case 6: alert("Thứ 6");
        break;
    case 7: alert("Thứ 7");
        break;
    default: alert("Không phải ngày trong tuần");
}