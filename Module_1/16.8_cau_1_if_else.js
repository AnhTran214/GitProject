let diem = prompt("Nhập điểm học viên");
if(parseFloat(diem) >=75 && parseFloat(diem) <= 100){
    alert("Pass module");
} else if(parseFloat(diem)>=0 && parseFloat(diem) < 75){
    alert("Fail");
} else alert("Invalid value");