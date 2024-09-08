//Bài 1- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
//     let n = 10;
//     let arr = Array(n);
//     let chuoiMang = "";
//     let chuoiMang10 = "";
//     let count = 0;
//     for (let i = 0; i < n; i++)
//     {
//         arr[i] = prompt(`Nhập phần tử thứ ${i}: `);
//         chuoiMang += arr[i] + " ";
//         if(arr[i] >= 10)
//         {
//             chuoiMang10 += arr[i] + " ";
//             count++;
//         }
//     }
//     document.getElementById("dsMang").innerHTML = chuoiMang;
//     document. getElementById("count").innerHTML = count.toString();
//     document.getElementById("arr10").innerHTML = chuoiMang10;
//Bài 2- Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau.
//                 Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
//     let n = 10;
//     let arr = Array(n);
//     let index = 0;
//     let chuoiMang = "";
//     let max = 0;
//     for (let i = 0; i < 5; i++) {
//         arr[i] = prompt(`Nhập phần tử thứ ${i}: `);
//         chuoiMang += arr[i] + " ";
//         if( arr[i] > max) {
//             max = arr[i];
//             index = i;
//         }
//     }
//     document.getElementById("dsMang2").innerHTML = chuoiMang;
//     document.getElementById("max").innerHTML = `${max}, có vị trí trong mảng là ${index}`;
//Bài 3- Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó.
// In ra giá trị trung bình của các phần tử trong mảng.
// let n = prompt("Nhập số phần tử mảng: ");
// let arr = Array(n);
// let index = 0;
// let chuoiMang = "";
// let max = 0;
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < n; i++) {
//     arr[i] = parseFloat(prompt(`Nhập phần tử thứ ${i}: `));
//     chuoiMang += arr[i] + " ";
//     if(arr[i] > max)
//     {
//         max = arr[i];
//         index = i;
//     }
//     sum += arr[i];
// }
// avg = sum/n;
// document.getElementById("dsMang3").innerHTML = chuoiMang;
// document.getElementById("max3").innerHTML = `${max}, có vị trí trong mảng là ${index}`;
// document.getElementById("avgArr").innerHTML = avg.toString();
//Bài 4- Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
// let n = prompt("Nhập số phần tử mảng: ");
// let arr = Array(n);
// let index = 0;
// let chuoiMang = "";
// let chuoiMangNguoc = "";
// let temp;
// for (let i = 0; i < n; i++) {
//     arr[i] = parseFloat(prompt(`Nhập phần tử thứ ${i}: `));
//     chuoiMang += arr[i] + " ";
// }
// document.getElementById("dsMang4").innerHTML = chuoiMang;
//     for (let j = arr.length - 1 ; j >= 0 ; j--)
//     {
//         chuoiMangNguoc += arr[j] + " ";
//     }
// document.getElementById("dsMang4n").innerHTML = chuoiMangNguoc;
//Bài 5- Viết chương trình đếm số nguyên âm trong một chuỗi
// let n = prompt("Nhập số phần tử mảng: ");
// let arr = Array(n);
// let index = 0;
// let chuoiMang = "";
// let count = 0;
// for (let i = 0; i < n; i++) {
//     arr[i] = parseFloat(prompt(`Nhập phần tử thứ ${i}: `));
//     chuoiMang += arr[i] + " ";
//     if (arr[i] < 0)
//     {
//         count++;
//     }
// }
// document.getElementById("dsMang5").innerHTML = chuoiMang;
// document.getElementById("dsSoNguyenAm").innerHTML = count.toString();
//Bài 6- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình tìm xem V có nằm trong mảng số nguyên không? Nếu V thuộc mảng số nguyên thì in ra "V is in the array"
// còn lại in ra "V is not in the array".
// let arr = [1,6,2,5,9,10,12,13,14,11];
// let v = parseFloat(prompt("Nhập số nguyên cần kiểm tra: "));
// let check = false;
// for (let i = 0; i < arr.length; i++) {
//     if(v == arr[i]) {
//        check = true;
//     }
// }
// if(check)
// {
//     alert(`số ${v} is in the array`);
// } else  alert(`số ${v} is not in the array`);
//Bài 7- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
//Chương trình kiểm tra xem V có thuộc mảng đã cho không, nếu V thuộc mảng đã cho xoá V khỏi mảng
//(Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)
// let arr = [1,6,2,5,9,10,12,13,14,11];
// let v = parseFloat(prompt("Nhập số nguyên cần kiểm tra: "));
// let check = false;
// let index = 0;
// document.getElementById("dsMang7").innerHTML = arr.toString();
// //kt xem v có tồn tại trong mảng hay không
// for (let i = 0; i < arr.length; i++) {
//     if(v == arr[i])
//     {
//         index = i;//lấy vị trí phần tử cần xóa
//     }
// }
// //dùng for chạy từ index đến cuối mảng để đôn mảng lên
// for (let j = index; j < arr.length; j++)
// {
//     arr[j] = arr[j + 1];
// }
// arr.length--;
// document.getElementById("dsXoaV").innerHTML = arr.toString();
//Bài 8- Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
// let n = 10;
// let arr = Array(n);
// let chuoi = "";
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = parseInt(prompt(`Nhập nhập phần tử thứ ${i}`));
//     chuoi += arr[i] + " ";
// }
// document.getElementById("dsMang8").innerHTML = chuoi;
// for (let i = 0; i < arr.length; i++)
// {
//     for(let j = i; j <= arr.length; j++)
//     {
//         if(arr[j] > arr[i])
//         {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// document.getElementById("dsSX").innerHTML = arr.join(" ");
//Bài 9- Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.
let arrA = Array(10);
let arrB = Array(10);
let chuoiA = "";
let chuoiB = "";
for (let i = 0; i < arrA.length; i++) {
    arrA[i] = parseInt(prompt(`Nhập nhập phần tử thứ ${i}`));
    chuoiA += arrA[i] + " ";
}
document.getElementById("manga").innerHTML = chuoiA;
for (let i = 0; i < arrB.length; i++) {
    arrB[i] = parseInt(prompt(`Nhập nhập phần tử thứ ${i}`));
    chuoiB += arrB[i] + " ";
}
document.getElementById("mangb").innerHTML = chuoiB;
document.getElementById("mangc").innerHTML = chuoiA + " " + chuoiB;