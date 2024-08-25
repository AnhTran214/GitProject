let number = parseInt(prompt("Nhập số lượng số nguyên tố đầu tiên: "));
let count = 0;
let n = 2;
function ktNT()
{
    if (n < 2)
    {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++)
    {
        if(n%i === 0)
        {
            return 0;
        }
    }
    return 1;
}
while (count <number)
{
    if(ktNT()){
        document.write(n.toString() + "<br>");
        count++;
    }
    n++;
}
