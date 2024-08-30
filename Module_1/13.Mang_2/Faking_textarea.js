let arr = []
let n = "";
arr[0] = "H";
arr[1] = "E";
arr[2] = "L";
arr[3] = "L";
arr[4] = "O";
arr[5] = " ";
arr[6] = "E";
arr[7] = "V";
arr[8] = "E";
arr[9] = "R";
arr[10] = "Y";
arr[11] = "O";
arr[12] = "N";
arr[13] = "E";

function typeTextarea()
{
    let text = document.getElementById("text").value;
    let n = text.length;
    let result = "";
    if (n > 0)
    {
        for(let i = 0; i < n; i++)
        {
            //Cộng chuỗi result bằng số lượng ký tự hiện tại
            result += arr[i];
            // nếu đủ 13 ký tự sẽ tự reset về trống
            if (i === 13)
            {
                document.getElementById("text").value = "";
                result = ""
            }
        }
    }
    document.getElementById("text").value = result;
    // Thực hiện lại hàm typeTextarea sau 0.001s => ghi đè lại toàn bộ nội dung => mất ký tự chúng ta vừa nhập
    setTimeout("typeTextarea()", 1);
}