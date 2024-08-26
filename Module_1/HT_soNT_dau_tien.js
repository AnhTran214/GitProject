let number = parseInt(prompt("Nhập số lượng số nguyên tố đầu tiên: "));
let count = 0;
let n = 2;
function ktNT()
{
    //Không phải số nguyên tố
    if (n < 2)
    {
        return 0;
    }
    // kiểm tra số nguyên tố khi n >= 2
    for (let i = 2; i <= Math.sqrt(n); i++)
    {
        if(n%i === 0)
        {
            return 0;// không phải số nguyên tố (False)
        }
    }
    return 1;// là số nguyên tố (True)
}
while (count <number)
{
    if(ktNT()){
        document.write(n.toString() + "<br>");
        count++;
    }
    n++;
}
