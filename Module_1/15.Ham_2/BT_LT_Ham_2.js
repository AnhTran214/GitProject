//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function bai_1(number){
    let bp;
    bp = number * number;
    document.getElementById("result1").innerHTML = bp.toString();
    return bp;
}
//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
function bai_2(){
    let r = parseFloat(document.getElementById("r").value);
    let C;
    let S;
    //Tính chu vi
    C = 2*3.14*r;
    //Tính diện tích
    S = Math.pow( C,2)/(4*3.14);
    document.getElementById("chuVi").innerHTML = C.toString();
    document.getElementById("dienTich").innerHTML = S.toString();
}
//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
function bai_3(number)
{
    let result;
    result = number;
    if(number < 0 || isNaN(number) || parseInt(number) === number){
        alert("Xin mời bạn nhập lại một số nguyên dương!");
        document.getElementById("num3").innerHTML = "";
    }
    else {
        for(let i= 1; i < result; i++){
            number = i * number;
        }
        document.getElementById("result3").innerHTML = number.toString();
    }
    return 0;
}
//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
function bai_4(){
    let input = prompt("Nhập giá trị cần: ");
    if(isNaN(input))
    {
        alert("False")
    } else alert("True")
}
//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
function bai_5(){
    let a = parseInt(document.getElementById("numa").value);
    let b = parseInt(document.getElementById("numb").value);
    let c = parseInt(document.getElementById("numc").value);
    let min = a;
    if(a > b)
    {
        min = b;
    }
    if (b > c)
    {
        min = c;
    }
    alert(`Giá trị nhỏ nhất là: ${min}`);
}
//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
function bai_6(){
    let num = parseFloat(document.getElementById("num6").value);
    if(num > 0 && Number.isInteger(num)){
        alert("True");
    } else {
        alert("False");
    }
}
//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
function bai_7(){
    let a = parseFloat(document.getElementById("soNa").value);
    let b = parseFloat(document.getElementById("soNb").value);
    if(Number.isInteger(a) && Number.isInteger(b))
    {
        document.getElementById("ab").innerHTML = `Số a: ${a} và số b: ${b}`;
        let temp;
        temp = a;
        a = b;
        b = temp;
        document.getElementById("ba").innerHTML = `Số a: ${a} và số b: ${b}`;
    } else {
        alert("Mời bạn nhập lại số nguyên!");
    }
}
//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
function bai_8(){
    let n = parseInt(prompt("Nhập số phần tử mảng: "));
    let arr = Array(n);
    let chuoi= "";
    for (let i = 0; i < n; i++)
    {
        arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i}: `));
        chuoi += arr[i] + " ";
    }
    document.getElementById("dsMangBD").innerHTML = chuoi;
    let chuoiNguoc = arr.reverse().join(" ");
    document.getElementById("dsMangDN").innerHTML = chuoiNguoc;
}
//Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.
function bai_9(){
    let n = parseInt(prompt("Nhập số phần tử mảng: "));
    let arr = Array(n);
    let chuoi= "";
    let count = 0;
    for (let i = 0; i < n; i++)
    {
        arr[i] = prompt(`Nhập phần tử thứ ${i}: `);
        while(!isNaN(arr[i]))
        {
            alert("Mời bạn nhập lại!");
            arr[i] = prompt(`Nhập phần tử thứ ${i}: `);
        }
        chuoi += arr[i] + " ";
    }
    alert(chuoi);
    let checkText = prompt("Nhập vào ký tự bất kỳ: ");
    while (!isNaN(checkText))
    {
        alert("Mời bạn nhập lại!");
        checkText = prompt("Nhập vào ký tự bất kỳ: ");
    }
    for (let i = 0; i < n; i++)
    {
        if(checkText === arr[i])
        {
            count++;
        }
    }
    if(count > 0)
    {
        alert(`Ký tự ${checkText} xuất hiện ${count} lần trong chuỗi ${chuoi}`);
    } else {
        alert(`Ký tự ${checkText} KHÔNG có trong chuỗi ${chuoi}`);
    }
}