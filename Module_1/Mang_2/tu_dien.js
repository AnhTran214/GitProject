function transViet (){
    let chuoi = document.getElementById("eng").value;
    let eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let viet = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let index_eng = -1;
    let result = "";
    let check = false;
    for (let i = 0; i < eng.length; i++) {
        if (chuoi === eng[i]){
            index_eng = i;
        }
        for (let j = 0; j < viet.length; j++)
        {
            if(index_eng === j)
            {
                result = viet[j];
                check = true;
            }
        }
    }
    if (check)
    {
        alert(result);
    } else alert("Không tìm thấy");
}