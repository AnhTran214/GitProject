let n = parseInt(prompt("Nhập số lượng phần tử mảng: "))
let a = Array();
let index = 0;
for (let i = 0; i < n; i++)
{
    a[i] = parseFloat(prompt(`a[${i}] = `));
}
document.write("Mảng vừa nhập là: " + a.toString() + "<br>");
let max = a[0];
for (let i = 0; i < n; i++)
{
    if (a[i] > max)
    {
        max = a[i];
        index = i;
    }
}
document.write(`Phần tử lớn nhất trong mảng là ${max} nằm ở vị trí ${index}`);