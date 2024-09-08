//Bài 1: Viết chương trình khởi tạo mảng 2 chiều, gồm một bộ các phần tử có sẵn,  in ra các phần tử trong mảng. Chú ý: Sử dụng vòng lặp for lồng nhau
function bai_1()
{
    let mangso = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 28, 14],
        [3, 10, 26, 7]
    ]
    for (let i = 0; i < mangso.length; i++)
    {
        document.write(`Rows: ${i+1} <br>`);
        for (let j = 0; j < mangso[i].length; j++)
        {
            document.write(`${mangso[i][j]} <br>`);
        }
    }
}
//Bài 2: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
// Ví dụ, nếu một mảng chứa các ký tự  [ 'c', 's', 'c', '2', '6', '1' ] sau khi thực hiện đảo ngược sẽ là "162csc"
function bai_2()
{
    let chuoi = ['c', 's', 'c', '2', '6', '1'];
    let temp;
    for (let i = 0; i < Math.floor((chuoi.length)/2); i++) // math.floor là làm tròn số xuống. VD: 5.95 = 5
    {
        for (let j = Math.ceil((chuoi.length)/2); j < chuoi.length; j++) // math.cecil là làm tròn số lên. VD: 0.95 = 1
        {
                temp = chuoi[i];
                chuoi[i] = chuoi[j];
                chuoi[j] = temp;
        }
    }
    document.write(chuoi.toString());
}
//Bài 3: Viết một chương trình khai báo một mảng ký tự và kích thước của mảng. Chương trình này đếm số ký tự số trong mảng.
function bai_3()
{
    let mang = ["a", 1, "b", 10, "r", 22,1];
    let count = 0;
    document.write(mang.toString() + "<br>");
    for (let i = 0; i < mang.length; i++)
    {
        if(mang[i] % 2 == 0 || mang[i] % 2 == 1)
        {
            count++;
        }
    }
    document.write("Có " + count.toString() + " ký tự số trong mảng" );
}
//Bài 4: Viết một chương trình để đếm số từ trong một chuỗi
function bai_4(){
    let chuoi = ["Hello", "Hi", "Xin chào"];
    document.write(`Chuỗi ban đầu: ${chuoi} <br>`);
    document.write(`Số lượng phần tử trong chuỗi: ${chuoi.length} <br>`);
    for(let i = 0; i < chuoi.length; i++)
    {
        document.write(`Chuỗi ${chuoi[i]} có ${chuoi[i].length} ký tự <br>`); //chuoi[i].length là lấy từng ký tự trong phần tử của mảng đếm.
    }
}
//Bài 5: Viết một chương trình nhập vào 2 chuỗi, sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
function bai_5()
{
    let chuoi1 = prompt("Nhập chuỗi 1: ");
    let chuoi2 = prompt("Nhập chuỗi 2: ");
    let ss = true;
    document.write(`${chuoi1} <br> ${chuoi2} <br>`);
    if(chuoi1.length !== chuoi2.length)
    {
        document.write("Hai chuỗi không giống nhau!");
    }
    else
    {
        for (let i = 0; i < chuoi1.length; i++)
            for (let j = 0; j < chuoi2.length; j++)
            {
                if (chuoi1[i] == chuoi2[j])
                {
                    ss = true;
                } else
                {
                    ss = false;
                }
            }
        if(ss == false)
        {
            document.write("Hai chuỗi không giống nhau!");
        }
        else document.write("Hai chuỗi giống nhau!");
    }
}
//Bài 6: Viết chương trình nhập vào một mảng ký tự, tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )
function bai_6(){
    let mang = Array(prompt("Nhập vào một chuỗi: "));
    let mangMoi = [];
    for (let i = 0; i < mang.length; i++)
    {
        for (let j = 0 ; j < mang[i].length; j++)
        {
            if (mang[i][j] == "-")
            {
                mang[i][j] = "_";
                mangMoi.push("_");
            } else mangMoi.push(mang[i][j]);
        }
    }
    document.write("Mảng sửa gồm ["+mangMoi.join("")+"]<br>")
}