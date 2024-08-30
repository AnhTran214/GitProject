let thang = prompt("Nhập tháng: ");
if(parseFloat(thang) === 1 || parseFloat(thang) === 3 || parseFloat(thang) === 5 || parseFloat(thang) === 7|| parseFloat(thang) === 8 || parseFloat(thang) === 10 || parseFloat(thang) === 12){
    alert("Có 31 ngày");
} else if( parseFloat(thang) === 2)
{
    alert("Có 28 hoặc 29 ngày")
} else if(parseFloat(thang) === 4 || parseFloat(thang) === 6 || parseFloat(thang) === 9 || parseFloat(thang) === 11){
    alert("Có 30 ngày");
} else alert("Không hợp lệ");