//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
function checkadiv(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (a % b == 0){
        alert(`${a} chia hết cho ${b}`);
    } else  alert(`${a} KHÔNG chia hết cho ${b}`);
}
//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
function checkTuoi(){
    let tuoi = parseFloat(document.getElementById("tuoi").value);
    if(tuoi < 15)
    {
        alert("Không đủ điều kiện vào học lớp 10");
    } else alert("Đủ điều kiện vào học lớp 10");
}
//Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
function checkSoNguyen(){
    let so = parseInt(document.getElementById("num").value);
    if(so > 0)
    {
        alert(`${so} LỚN hơn 0`);
    } else alert(`${so} NHỎ hơn 0`);
}
//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
function checkMax(){
    let so1 = parseInt(document.getElementById("so1").value);
    let so2 = parseInt(document.getElementById("so2").value);
    let so3 = parseInt(document.getElementById("so3").value);
    let max = so1;
    if (max < so2)
    {
        max = so2;
    }
    if (max < so3)
    {
        max = so3;
    }
    alert(`Giá trị lớn nhất: ${max}`);
}
//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ