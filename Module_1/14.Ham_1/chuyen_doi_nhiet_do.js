function chuyenDoiNhietDo(nhietDo){
    if(nhietDo === "")
    {
        document.getElementById('result').innerHTML = "";
    }
    else {
        nhietDo = parseFloat(nhietDo);
        document.getElementById('result').innerHTML = (nhietDo - 32)/1.8;
    }
}