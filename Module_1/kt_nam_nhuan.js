function ktnamnhuan(){
    let year = parseInt(document.getElementById("year").value);
    let isLeapYear = false;
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                isLeapYear = true;
            }
        } else isLeapYear = true;
    }
    if(isLeapYear){
        document.getElementById("kq").innerHTML = `${year} là năm nhuận`;
    } else document.getElementById("kq").innerHTML = `${year} là năm KHÔNG nhuận`;
}