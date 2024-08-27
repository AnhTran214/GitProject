let a = [5,7,2,8,10,17];
let chuoi = "";
for (let i = 0; i < a.length; i++)
{
    chuoi += `${a[i]} `;
}
document.getElementById("array").innerHTML = chuoi;
function searchValue()
{
    let gt = parseFloat(document.getElementById('gt').value);
    let index = -1;
    for (let i = 0; i < a.length; i++)
    {
        if(gt == a[i])
        {
            index = i;
        }
    }
    if(index > -1) // ban đầu index = -1 là chưa xét giá trị tim kiếm, nếu tìm thấy giá trị thì index sẽ = i nên index > -1 là tìm thấy giá trị
    {
        alert(`Giá trị ${gt} chúng ta cần tìm nằm ở vị trí ${index} trong mảng`);
    }
    else alert(`Không tìm thấy giá trị`);
}