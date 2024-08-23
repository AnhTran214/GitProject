// for (let i = 1; i <=10; i++)
// {
//     if(i % 2 == 0) {
//         alert(`${i} là số chẵn`);
//     } else alert(`${i} là số lẻ`);
// }
let count = 0;
let n = parseFloat(prompt("nhập số cần kiểm tra: "));
for (let i = 1; i <= n; i++)
{
    if(n%i === 0)
        count++;
}
if (count === 2)
{
    alert(`${n} là số nguyên tố`)
}
else alert(`${n} KHÔNG là số nguyên tố`)
