function dao_nguoc_mang(){
    let a = [-3, 5, 1, 3, 2, 10];
    let chuoi = "";
    for (let i = 0; i < a.length; i++)
    {
        chuoi += `${a[i]} `
    }
    document.getElementById("firstArray").innerHTML = chuoi;
    //Đảo ngược mảng
    //C1:
    //document.getElementById("lastArray").innerHTML = a.reverse().toString();
    //C2:
    let first = 0;
    let last = a.length -1;
    while(first < last) // first và last là chỉ mục (index)
    {
        //dùng hoán vị
        let temp = a[first];
        a[first] = a[last];
        a[last] = temp;
        first++;
        last--;
    }
    document.getElementById("lastArray").innerHTML = a.toString();
}
dao_nguoc_mang();