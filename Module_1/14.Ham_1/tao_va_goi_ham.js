function processConfirm(answer)
{
    let result = "";
    if(answer)
    {
        result = "Excellent. We'll play a nice game of chess.";//chọn ok
    }
    else {
        result = "Maybe later then.";//chọn cancel
    }
    return result;
}
let confirmAnswer = confirm("Shall we play a game?");// tạo 1 hộp thoại lựa chọn
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);