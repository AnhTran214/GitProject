//Kiểm tra số nguyên tố
function isPrime(number){
    if(number < 2)
    {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0)
        {
            return 0
        }
    }
    return 1;
}
//hàm chạy nhấn nút button
function checkNumber(){
    let number = parseFloat(document.getElementById("so").value);
    if(isPrime(number))
    {
        alert(`${number} là số nguyên tố`);
    } else alert(`${number} KHÔNG là số nguyên tố`);
}