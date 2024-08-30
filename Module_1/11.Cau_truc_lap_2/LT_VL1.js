//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
function demSo(){
    let chuoi = "";
    for(let i= 1; i < 100; i++){
        chuoi += i + "<br>";
        document.getElementById("so").innerHTML = chuoi;
        if(i === 99)
        {
            alert("Hoàn thành!");
        }
    }
}
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100,
// yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
function nhietDo(){
    let t = parseFloat(prompt("Nhập nhiệt độ: "));
    while (t > 100) {
        alert("Nhiệt độ cao, mời bạn giảm nhiệt độ!")
        t = parseFloat(prompt("Nhập nhiệt độ: "));
        if(t < 20)
        {
            alert("Nhiệt độ thấp, mời bạn tăng nhiệt độ!")
            t = parseFloat(prompt("Nhập nhiệt độ: "));
        }
    }
    alert(`Nhiệt độ bạn nhập là: ${t}`);
}
nhietDo();
// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
function bai_3(){
    let f = 0, f0 = 0, f1 = 0;
    let fibo = "";
    for (let i = 0; i < 20; i++){
        // hiển thị số đầu tiên trong dãy
        if(i==0)
        {
            f = 1;
            f1 = 1;
            fibo += f +" ";
        }
        //hiển thị các số tiếp theo
        else {
            f = f0 + f1;
            f0 = f1;
            f1 = f;
            fibo += f + " ";
        }
    }
    document.getElementById("fibo").innerHTML = fibo;
}
bai_3();
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
function bai_4(){
    let f = 0, f0 = 0, f1 = 0;
    let fibo = "";
    let div5 = "";
    for (let i = 0; i < 20; i++){
        // hiển thị số đầu tiên trong dãy
        if(i==0)
        {
            f = 1;
            f1 = 1;
            fibo += f +" ";
        }
        //hiển thị các số tiếp theo
        else {
            f = f0 + f1;
            f0 = f1;
            f1 = f;
            fibo += f + " ";
            if(f % 5 == 0)
            {
                //Hiển thị số đầu tiên chia hết cho 5.
                div5 = f;
                break;
            }
        }
    }
    document.getElementById("fibo5").innerHTML = div5;
}
bai_4();
//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
function bai_5(){
    let f = 0, f0 = 0, f1 = 0, tong = 0;
    let fibo = "";
    for (let i = 0; i < 20; i++){
        // hiển thị số đầu tiên trong dãy
        if(i==0)
        {
            f = 1;
            f1 = 1;
            fibo += f +" ";
            tong += f;
        }
        //hiển thị các số tiếp theo
        else {
            f = f0 + f1;
            f0 = f1;
            f1 = f;
            fibo += f + " ";
            tong += f;
        }
    }
    document.getElementById("fiboTong").innerHTML = fibo;
    document.getElementById("tong").innerHTML = tong.toString();
}
bai_5();
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
function bai6(){
    let dayso = "";
    let tong = 0, count = 0;
    for (let i = 0; ;i++)
    {
        if (i % 7 == 0)
        {
            dayso += i + " ";
            tong += i;
            count++;
            if(count == 30) break;
        }
    }
    document.getElementById("dayso").innerHTML = dayso;
    document.getElementById("tongN").innerHTML = tong.toString();
}
bai6();
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz",
// 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
function bai7(){
    let tongChuoi = "", fb = "", f = "", b = "";
    for(let i = 1; i <= 100; i++)
    {
        if(i % 3 == 0 && i % 5 == 0)
        {
            fb += i + "FizzBuzz" + "<br>"
        } else if (i % 3 == 0)
        {
            f += i + "Fizz" + "<br>";
        } else if (i % 5 == 0)
        {
            b += i + "Buzz" + "<br>";
        }
        tongChuoi = fb + f + b;
    }
    document.getElementById("dayB7").innerHTML = tongChuoi;
}
bai7();
// Bài 8: Game đoán số
function bai8(){
    let phamvi = parseInt(prompt("Nhập phạm vi số bạn muốn đoán: "));
    let soDoan = parseInt(prompt("Nhập số bạn muốn đoán:"));
    let soRandom;
    let count = 0;
    if(phamvi)
    {
        soRandom = Math.floor(Math.random()*phamvi);// gán số ngẫu nhiên vào soRandom
        if (soRandom == soDoan)
        {
            alert("Bạn đã đoán đúng!");
        } else
        {
            while (soRandom != soDoan)
            {
                alert("Bạn đã đoán sai");
                soDoan = parseInt(prompt("Nhập số bạn muốn đoán:"));
                count++;
                if (count == 2)
                {
                    alert(`Bạn đã đoán sai, số đúng là: ${soRandom}`);
                    break;
                }
            }
        }
    }
}
