function showPass(){
    let acc = document.getElementById("taikhoan").value;
    if(acc == "Admin")
    {
        document.getElementById("divPass").style.display = "inline";
    } else document.getElementById("divPass").style.display = "none";
}
function test_Account(){
    let acc = document.getElementById("taikhoan").value;
    let  pass = document.getElementById("matkhau").value;
    if(acc == "Admin")
    {
        if(pass == "TheMaster")
        {
            alert("Welcom");
        } else if(pass == null)
        {
            alert("Canceled");
        } else alert(" Wrong password");
    } else if(acc == null)
    {
        alert("canceld");
    } else alert("I don’t know you");
}