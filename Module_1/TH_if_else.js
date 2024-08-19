function answerIf(){
    let ans = document.getElementById("answer").value;
    if(ans == "ECMAScript"){
        document.getElementById("kq").innerText = "Right!";
    } else document.getElementById("kq").innerText = "Didn’t know? ECMAScript!";
}