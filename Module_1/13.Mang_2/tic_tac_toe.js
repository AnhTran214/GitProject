let arr = [];
let isX = true;
//Khởi tạo mảng 2 chiều với 5 hàng và 5 cột
for (let i = 0 ; i < 5; i++)
{
    arr[i] = [];
    for (let j = 0; j < 5; j++)
    {
        arr[i][j] = "";
    }
}
//Hiển thị bàn cờ
let bang = "<table border = '1' style='width: 500px; height: 500px'>"
for (let i = 0; i < 5; i++)
{
    bang += "<tr>";
    for (let j = 0; j < 5; j++)
    {
        bang += `<td onclick='changeValue(${i},${j})'>${arr[i][j]}</td>`;
    }
    bang+= "</tr>";
}
bang += "</table>";
document.write(bang);

function changeValue(i,j)
{
    if (arr[i][j] === "")
    {
        if (isX)
        {
            arr[i][j] = "X";
            isX = false;
        } else {
            arr[i][j] = "O";
            isX = true;
        }
    }
    let bang = "<table border = '1' style='width: 500px; height: 500px'>"
    for (let i = 0; i < 5; i++)
    {
        bang += "<tr>";
        for (let j = 0; j < 5; j++)
        {
            bang += `<td style="width: 100px; height: 100px; text-align: center; font-size: 30px>" onclick='changeValue(${i},${j})'>${arr[i][j]}</td>`;
        }
        bang+= "</tr>";
    }
    bang += "</table>";
    //clear phần body trước khi vẽ lại
    document.body.innerHTML = "";
    document.write(bang);
    checkWin();
}
//Check win
function checkWin(){
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            if((arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j] !== "") ||
                (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i][j] !== ""))
            {
                alert(`${arr[i][j]} WIN`);
            }
        }
    }
}