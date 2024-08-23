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
function tinhTB(){
    let ktmieng = parseFloat(document.getElementById("ktm").value);
    let kt15 = parseFloat(document.getElementById("kt15").value);
    let ktgk = parseFloat(document.getElementById("ktgk").value);
    let ktck = parseFloat(document.getElementById("ktck").value);
    let avg = 0;
    if (ktmieng >= 0 && ktmieng <= 10 && kt15 >= 0 && kt15 <= 10
        && ktgk >= 0 && ktgk <= 10 && ktck >= 0 && ktck <= 10)
    {
        avg = ((ktmieng + kt15) + (2 * ktgk) + (3 * ktck)) / 7
        if( avg >= 8)
        {
            alert(`Điểm TB: ${avg} đạt học lực GIỎI`);
        } else if (avg >= 6.5)
        {
            alert(`Điểm TB: ${avg} đạt học lực KHÁ`);
        } else if(avg >= 5)
        {
            alert(`Điểm TB: ${avg} đạt học lực TB`);
        } else if(avg >= 3)
        {
            alert(`Điểm TB: ${avg} đạt học lực YẾU`);
        }
        else
        {
            alert(`Điểm TB: ${avg} đạt học lực KÉM`);
        }
    } else alert("Bạn đã nhập sai dữ liệu, yêu cầu nhập lại! (Điểm từ 0 --> 10)");
}
//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
function tinhHH(){
    let dt = parseFloat(document.getElementById("dt").value);
    let thh = 0;
    let hh = 0;
    if(dt >= 0)
    {
        if(dt >= 100000000)
        {
            hh = 0.1;
        } else if(dt > 50000000)
        {
            hh = 0.07;
        } else {
            hh = 0.05;
        }
    } else alert("Dữ liệu nhập vào không đúng. Mời bạn nhập lại!");
    thh = dt * hh;
    document.getElementById("thh").innerHTML = thh.toString();
}
//Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
// (gs: Giá cước điện thoại cố định của một hãng viễn thông bao gồm cước thuê bao là 22 000 đồng/tháng
// và cước gọi là 800 đồng/ phút.)
function tinhCuocDt()
{
    let minute = parseInt(document.getElementById("minute").value);
    let tienThang = 0;
    tienThang = 800*minute + 22000;
    document.getElementById("tienThang").innerHTML = tienThang.toString();

}