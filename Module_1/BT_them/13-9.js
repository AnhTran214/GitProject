//Bài 1	Nhập 1 mảng số từ bàn phím với độ dài n (n <=20)
// 	Hiện thị mảng sau khi thêm mới các phần tử
// 	Kiểm tra mảng vừa nhập.
// 	Nếu mảng tăng dần đều thì hiện thị OK, không phải thì trả về NO
// 	Ví dụ	Input	Output
// 		        0,2,4,6,8	TRUE
// 		       5,10,15,20	TRUE
// 		       2,4,7,9	FALSE
function bai_1()
{
    let n = prompt("Nhập số phần tử mảng: ");
    let arr = Array(n);
    let chuoi = "";
    let check = true;
    for (let i = 0; i < n; i++)
    {
        arr[i] = parseFloat(prompt(`Nhập phần tử thứ ${i}: `));
        chuoi += arr[i] + " ";
    }
    document.getElementById("arr1").innerHTML = chuoi;
    let tang = arr[1] - arr[0];
    for (let i = 0; i < n - 1; i++) // lý do chạy tới n-2 là do nếu lấy đến n-1 thì sau nó (n+1) sẽ là undefined thì cộng lại sẽ không được nên sai
    {
        if(arr[i + 1] - arr[i] !== tang )
        {
            check = false
        }
    }
    if (check)
    {
        document.getElementById("result1").innerHTML = "OK";
    }
    else document.getElementById("result1").innerHTML = "NO";

}
// Kiểm tra 2 số có phải là cặp số thân thiết hay không.
// Cặp số thân thiết là tổng ước của số này (trừ chính số đó) bằng với số còn lại.
// Ví dụ: cặp số  220 và 284
function tongUoc (a){
    let tong = 0;
    for (let i = 1; i < a; i++){
        if(a%i === 0){
            tong += i;
        }
    }
    return tong;
}
function bai_2(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (a == tongUoc(b) && b == tongUoc(a))
    {
        alert("Đây là cặp số thân thiết");
    }
    else alert("Đây KHÔNG là cặp số thân thiết");
}