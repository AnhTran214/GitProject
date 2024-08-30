// Bài 1: In dãy Fibonaci
function bai_1(){
    let f = 0, f0 = 0, f1 = 0;
    let fibo = "";
    for (let i = 0; i < 50; i++)
    {
        if(i==0)
        {
            f = 1;
            f1 = 1;
            fibo += f +" ";
        } else
        {
            f = f0 + f1;
            f0 = f1;
            f1 = f;
            fibo += f+" ";
        }
    }
    document.getElementById("fibo").innerHTML = fibo;
}
bai_1();
//Bài 2: Tính giai thừa của một số nguyên dương
function bai_2(){
    let so = parseFloat(document.getElementById("soGT").value);
    let gt = 1;
    // 0! = 1! = 1.
    if(so == 0 || so == 1)
    {
        gt = 1;
        alert(`Giai thừa của số ${so} = ${gt}`);
    } else if(so < 0)
    {
        alert("Error!");
    } else
    {
        //các số còn lại > 1
        for (let i = 1; i <= so; i++)
        {
            gt = gt*i;
        }
        alert(`Giai thừa của số ${so} = ${gt}`);
    }
}
//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
function bai_3()
{   //tam giác vuông bt
    for(let i = 0; i<5; i++)
    {
        for(let j = 0; j <=i; j++)
        {
            let sao = "*";
            document.write(sao);
        }
       let spa = "<br>";
        document.write(spa);
    }
    document.write("<br><br>")
    //tam giác vuông bt ngược đầu
    for(let i = 5; i > 0; i--)
    {
        for(let j = 0; j < i; j++)
        {
            let sao = "*";
            document.write(sao);
        }
        let spa = "<br>";
        document.write(spa);
    }
    document.write("<br><br>")
    //tam giác vuông bt quay mặt ngược
    document.write("<div style='width: 50px; text-align: right'>")
    for(let i = 0; i<5; i++)
    {
        for(let j = 0; j <=i; j++)
        {
            let sao = "*";
            document.write(sao);
        }
        let spa = "<br>";
        document.write(spa);
    }
    document.write("<div><br><br>");
    //tam giác vuông bt quay mặt ngược đảo đầu
    document.write("<div style='width: 50px; text-align: right'>")
    for(let i = 5; i > 0; i--)
    {
        for(let j = 0; j < i; j++)
        {
            let sao = "*";
            document.write(sao);
        }
        let spa = "<br>";
        document.write(spa);
    }
    document.write("<div><br><br>");
}
//Bài 4: In hình chữ nhật
function bai_4(){
    for (let i = 0; i < 7; i++)
    {
        for (let j = 0; j < 21; j++)
        {
            if(i == 0 || i == 6)
            {
                document.write("<a style='color: black'>*</a>")
            } else document.write("<a style='color: white'>*</a>")
            if(j == 0 || j == 20)
            {
                document.write("<a style='color: black'>*</a>")
            }
        }
        document.write("<br>")
    }
}
//Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con)
// khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.
function bai_5()
{
    let sotien = parseFloat(document.getElementById("sotien").value);
    let sothang = parseFloat(document.getElementById("sothang").value);
    let tienlai_thang = 0;
    let tongtienlai = tienlai_thang;
    let chuoi_thang = "";
    document.getElementById("gt").innerHTML = `Số tiền bạn gửi là ${sotien} VNĐ trong ${sothang} tháng với lãi suất 7%/ năm<br>`;
    for (let i = 0; i < sothang; i ++)
    {
        tienlai_thang = ((sotien*7)/100)/12; // tính tiền lãi hàng tháng, do 7%/năm nên phải chia 12 để ra tháng
        tongtienlai += tienlai_thang; //tính tổng tiền lãi các tháng
        sotien += tienlai_thang; // tăng số tiền lên sau khi có lãi, cộng thêm vào số tiền ban đầu mình gửi
        chuoi_thang += `Tiền lãi tháng ${i + 1} là ${tienlai_thang.toFixed(0)} VND<br>`;
        document.getElementById("laithang").innerHTML = chuoi_thang;
    }
    document.getElementById("tonglai").innerHTML = `Tổng tiền lãi của bạn trong ${sothang} tháng là ${tongtienlai.toFixed(0)} VNĐ`;
}
//Bài 6: In hình trái tim
function bai_6()
{
    for (let i = 1; i < 7; i++)
    {
        for (let j = 1; j<=7; j++)
        {
            if(!((i == 1 && (j == 1 || j == 4 || j == 7)) || (i == 4 && j == 1 || j == 7) || (i == 5 && (j <= 2 || j >= 6)) || (i == 6 && (j <= 3 || j >= 5))))
            {
                document.write("<a style='color: black'>*</a>")
            } else {
                document.write("<a style='color: white'>*</a>")
            }
        }
        document.write("<br>");
    }
}