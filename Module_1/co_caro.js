//Hiển thị bàn cờ
let b = document.getElementById("carogame");
let board = [];
let data = "";
for(let i= 0; i < 5; i++)
{
    board[i] = new Array(0,0,0,0,0);
}
for(let i = 0; i < 5; i++)
{
    data += "<br>";
    for (let j = 0; j<5; j++)
    {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
data += "<br><br><button type='button' onclick='changeValue()'>Change Value</button>"
b.innerHTML = data;
function changeValue()
{
    let posX = prompt("X: ");
    let posY = prompt("Y: ");
    data = "";
    board[posX][posY] = "x";
    for(let i = 0; i<5; i++)
    {
        data += "<br>";
        for(let j = 0; j<5; j++)
        {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br><br><button type='button' onclick='changeValue()'>Change Value</button>"
    b.innerHTML = "<hr>" + data;
}