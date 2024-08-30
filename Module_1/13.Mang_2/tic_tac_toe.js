const arr = [];
let isX = true;

// Khởi tạo mảng 2 chiều với 5 hàng và 5 cột
for (let i = 0; i < 5; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
        arr[i][j] = "";
    }
}

// Hiển thị bàn cờ
let board = "<table border='1' style='width: 500px; height: 500px'>"
for (let i = 0; i < 5; i++) {
    board += "<tr>"
    for (let j = 0; j < 5; j++) {
        board += `<td onclick="changeValue(${i}, ${j})">${arr[i][j]}</td>`
    }
    board += "</tr>"
}
board += "</table>"
document.write(board)

function changeValue(i, j) {
    if (arr[i][j] === "") {
        if (isX) {
            arr[i][j] = "X";
            isX = false
        } else {
            arr[i][j] = "O";
            isX = true
        }
        let board = "<table border='1' style='width: 500px; height: 500px'>"
        for (let i = 0; i < 5; i++) {
            board += "<tr>"
            for (let j = 0; j < 5; j++) {
                // fix lại css
                board += `<td onclick="changeValue(${i}, ${j})" style="width: 100px; height: 100px; text-align: center; font-size: 30px">${arr[i][j]}</td>`
            }
            board += "</tr>"
        }
        board += "</table>"
        // clear phần body trước khi vẽ lại
        document.body.innerHTML = ""
        document.write(board)
        checkWin()
    }

}

function checkWin() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if(arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j]!=="") {
                alert(arr[i][j]+" win")
            }
        }
    }
}