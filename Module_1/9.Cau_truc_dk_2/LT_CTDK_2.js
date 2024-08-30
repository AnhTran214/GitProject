//Bài 1: Chuyển từ độ C sang độ F.
// °C  x  9/5 + 32 = °F
function tinh(){
    let t = parseFloat(document.getElementById("nhietDo").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let kq = 0;
    if(from == "°C" && to == "°F")
    {
        kq = t * (9/5) + 32;
        document.getElementById("kq1").innerHTML = kq.toString() + "°F";
    } else if(from == "°F" && to == "°C")
    {
        kq = (t - 32)*5/9;
        document.getElementById("kq1").innerHTML = kq.toString() + "°C";
    } else if(from == "°F" && to == "°F")
    {
        document.getElementById("kq1").innerHTML = t.toString() + "°F";
    } else {
        document.getElementById("kq1").innerHTML = t.toString() + "°C";
    }
}
// Bài 2: Chuyển từ mét sang feet:
// ft =m * 3.2808
function tinh2(){
    let dv = parseFloat(document.getElementById("dv").value);
    let from1 = document.getElementById("from1").value;
    let to1 = document.getElementById("to1").value;
    let kq = 0;
    if(from1 == "met" && to1 == "feet")
    {
        kq = dv * 3.2808;
        document.getElementById("kq2").innerHTML = kq.toString() + "ft";
    } else if(from1 == "feet" && to1 == "met")
    {
        kq = dv/3.2808;
        document.getElementById("kq2").innerHTML = kq.toString() + "m";
    } else if(from1 == "feet" && to1 == "feet")
    {
        document.getElementById("kq2").innerHTML = dv.toString() + "ft";
    } else {
        document.getElementById("kq2").innerHTML = dv.toString() + "m";
    }
}
//Bài 3: Tính diện tích hình vuông khi biết cạnh a.
function tinhShv(){
    let a = parseFloat(document.getElementById("a").value);
    let s = 0;
    if (a <= 0)
    {
        alert("Không phải hình vuông");
    } else
    {
        s = a*a;
        document.getElementById("kq3").innerHTML = s.toString();
    }
}
//Bài 4: Tính diện tích hình  chữ nhật khi biết 02 cạnh a, b.
function tinhShcn(){
    let a = parseFloat(document.getElementById("cd").value);
    let b = parseFloat(document.getElementById("cr").value);
    let s = 0;
    if(a > 0 && b > 0)
    {
        s = a * b;
        document.getElementById("kq4").innerHTML = s.toString();
    } else alert('Bạn đã nhập giá trị sai, mời bạn nhập lại!');
}
//Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
function tinhStgv(){
    let a = parseFloat(document.getElementById("cc").value);
    let b = parseFloat(document.getElementById("cday").value);
    let s = 0;
    if (a > 0 && b > 0)
    {
        s = 1/2 * (a * b);
        document.getElementById('kq5').innerHTML = s.toString();
    } else alert('Bạn đã nhập giá trị sai, mời bạn nhập lại!');
}
//Bài 6: Giải phương trình bậc 1. (ax + b = 0)
function tinhPt1(){
    let a = parseFloat(document.getElementById("soa").value);
    let b = parseFloat(document.getElementById("sob").value);
    let x = 0;
    if( a == 0){
        if(b == 0)
        {
            alert("Phương trình vô số nghiệm");
        } else alert("Phương trình vô nghiệm");
    } else {
        x = -b / a;
        alert(`Phương trình có 1 nghiệm: ${x}`);
    }
}
//Bài 7: Giải phương trình bậc 2. ax2+bx+c=0 (a≠0)
function tinhPt2()
{
    let a = parseFloat(document.getElementById("soa2").value);
    let b = parseFloat(document.getElementById("sob2").value);
    let c = parseFloat(document.getElementById("soc2").value);
    let x;
    let x1;
    let x2;
    let delta;
    if(a == 0)
    {
        //Pt bậc 1
        if (b == 0)
        {
            if(c == 0)
            {
                alert("Phương trình vô số nghiệm");
            } else alert("Phương trình vô nghiệm");
        } else {
            x = -c / b;
            alert(`Phương trình có 1 nghiệm: ${x}`);
        }
    }   //Pt bậc 2
    else {
        delta = b*b - 4*a*c;
        if(delta < 0)
        {
            alert("Phương trình vô nghiệm");
        } else if(delta == 0)
        {
            x = -b / (2*a);
            alert(`Phương trình có nghiệm kép x1 = x2 = ${x}`)
        } else {
            x1 = (-b + Math.sqrt(delta))/(2*a);
            x2 = (-b - Math.sqrt(delta))/(2*a);
            alert(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
        }
    }
}
//Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không. Một số nguyên là tuổi của một người khi nhỏ 120 và lơn hơn 0.
function checkTuoi8()
{
    let tuoi = parseInt(document.getElementById("tuoi").value);
    if (tuoi > 0 && tuoi < 120 && parseInt(tuoi) === tuoi)
    {
        alert(`${tuoi} là tuổi của một người`);
    } else alert("Không phải tuổi của một người");
}
//Bài 9: Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác. Điều kiện để a,b,c là cạnh của một tam giác là:
function checkCanh(){
    let a = parseFloat(document.getElementById("soa9").value);
    let b = parseFloat(document.getElementById("sob9").value);
    let c = parseFloat(document.getElementById("soc9").value);
    if(a > 0 && b > 0 && c > 0 && a+b>c && b+c>a && a+c>b)
    {
        alert(`Ba cạnh a = ${a}, b = ${b}, c = ${c} là ba cạnh của một tam giác`);
    } else alert(`Ba cạnh a = ${a}, b = ${b}, c = ${c} KHÔNG phải là cạnh của một tam giác`)
}
//Bài 10: Viết chương trình tính giá điện.
function tinhGiaDien(){
    let soDien = parseFloat(document.getElementById("sodien").value);
    let tienDien;
    let bac1= 1806;
    let bac2= 1866;
    let bac3= 2167;
    let bac4= 2729;
    let bac5= 3050;
    let bac6= 3151;
    if(soDien < 0)
    {
        alert("Vui lòng nhập lại số điện, số điện không được nhỏ hơn 0!");
    } else if(soDien <= 50)
    {
        tienDien = soDien*bac1;
        alert(`Bạn đã dùng điện trong khoảng 0 - 50 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    } else if(soDien <= 100)
    {
        tienDien = 50*bac1+((soDien-50)*bac2); //(soDien-50) là trừ 50 của bậc 1; 50*bac1 là tiền điện cao nhất bậc 1
        alert(`Bạn đã dùng điện trong khoảng 51 - 100 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    } else if(soDien <= 200)
    {
        tienDien = 50*bac1+ 50*bac2 + ((soDien-100)*bac3);
        alert(`Bạn đã dùng điện trong khoảng 101 - 200 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    } else if(soDien <= 300)
    {
        tienDien = 50*bac1+ 50*bac2 + 100*bac3 + ((soDien-200)*bac4);
        alert(`Bạn đã dùng điện trong khoảng 201 - 300 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    } else if(soDien <= 400)
    {
        tienDien = 50*bac1+ 50*bac2 + 100*bac3 + 100*bac4 + ((soDien-300)*bac5);
        alert(`Bạn đã dùng điện trong khoảng 301 - 400 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    } else if(soDien > 400)
    {
        tienDien = 50*bac1+ 50*bac2 + 100*bac3 + 100*bac4 + 100*bac5 + ((soDien-400)*bac6);
        alert(`Bạn đã dùng điện trên 400 kwh số tiền bạn phải trả là: ${tienDien} VND`);
    }
}
//Bài 11: Viết chương trình tính thuế thu nhập cá nhân.
function tinhLuong(){
    let thuesuat, sothue, luongnhan = 0;
    let luong = parseFloat(document.getElementById("luong").value);
    if (luong > 15000000)
    {
        sothue = luong * (30/100);
        thuesuat = 30;
    } else if (luong >= 7000000)
    {
        sothue = luong * (20/100);
        thuesuat = 20;
    } else
    {
        sothue = luong * (10/100);
        thuesuat = 10;
    }
    luongnhan = luong - sothue;
    document.getElementById("luongcb").innerHTML = `Lương nhận theo hợp đồng: ${luong} VND`;
    document.getElementById("sothue").innerHTML = `Thuế thu nhập với mức thuế suất ${thuesuat}%: ${sothue} VND`;
    document.getElementById("luongnhan").innerHTML = `Số tiền lương nhận được là: ${luongnhan} VND`
}
//Bài 12: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
function tinhLaiSuat()
{
    let tienvay = parseFloat(document.getElementById("tienvay").value);
    let thangvay = parseFloat(document.getElementById("thangvay").value);
    let laisuat = parseFloat(document.getElementById("laisuat").value);
    let tientra;
    if (tienvay > 0 && tienvay < 100000000000 && thangvay > 0 && thangvay < 360)
    {
        laisuat = (laisuat/100)/12;
        tientra = tienvay * Math.pow((1 + (laisuat)),thangvay);
        alert(`Số tiền bạn phải trả khi vay ${thangvay} là: ${tientra} VND`);
    } else {
        alert("Giá trị bạn nhâp không hợp lệ, mời bạn nhập lại");
    }

}