var h1 = "Xin chào đây là trang index đã trỏ vào 1 file JS";
//document.getElementById("H1") tương tác với phần tử trong HTML có id là H1
// gán giá trị biến h1 cho thuộc tính id có tên là H1 để hiển thị
document.getElementById("H1").innerHTML = h1;
function onClick (){
    document.getElementById("Like").style.backgroundColor="blue" //thay đổi màu nền
    document.getElementById("Like").style.color="white" //thay đổi màu chữ
    document.getElementById("Like").innerText = "Dislike" //thay đổi nội dung khi nhấn vào nút
}