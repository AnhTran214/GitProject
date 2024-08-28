//Bài 1: Viết một chương trình Javascript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau.
// Ví dụ có mảng chuỗi như sau: myColor = ["Red", "Green", "White", "Black"];
// Sau khi thực thi chương trình sẽ trả về dạng như sau :
// "Red,Green,White,Black"
let myColor = ["Red", "Green", "White", "Black"];
document.getElementById("toStringArray").innerHTML = myColor.toString();
document.getElementById("joinArray").innerHTML = myColor.join();
document.getElementById("joinArray2").innerHTML = myColor.join("+");

//Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
let so = prompt("Nhập số bạn muốn: ");
let str = so.toString();
document.getElementById("chuoi2").innerHTML = str;
let result = [str[0]];// gán giá trị đầu tiên của chuỗi str vào trong mảng result
for (let i = 1; i < str.length; i++) { // chạy i = 1 là do ở trên result đã có phần tử đầu tiên str[0]
    if(str[i - 1] % 2 == 0 && str[i] % 2 == 0){
        result.push('-', str[i]);
    } else result.push(str[i]);
}
document.getElementById("kq2").innerHTML = result.join('');
//Bài 3: Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
// Ví dụ: nếu bạn nhập vào chuỗi 'The Quick Brown Fox' kết quả của chương trình là 'tHE qUICK bROWN fOX'.
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let LOWER = 'abcdefghijklmnopqrstuvwxyz';
let kq = [];
function htChuoi(){
    let chuoi = document.getElementById("chuoi3").value;
    for(let i = 0; i < chuoi.length; i++)
    {
        if(UPPER.indexOf(chuoi[i]) !== -1) // indexOf là lấy vị trí của phần tử trong mảng/chuỗi.
        {
            kq.push(chuoi[i].toLowerCase());
        }
        else  if (LOWER.indexOf(chuoi[i]) !== -1)
        {
            kq.push(chuoi[i].toUpperCase());
        }
        else {
            kq.push(chuoi[i]);
        }
    }
    document.getElementById("chuoiKQ3").innerHTML = kq.join('');
    document.getElementById("chuoi3").value = "";
    kq = [];
}
