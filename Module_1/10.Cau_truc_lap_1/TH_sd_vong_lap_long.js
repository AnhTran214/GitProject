//for
// let sout;
// sout = "<table boder ='1' width ='300' cellspacing='0' cellpadding = '3'>";
// for (let i = 1; i<=10; i++) {
//     sout = sout + "<tr>";
//     for (let j = 1; j<=10; j++) {
//         sout = sout + "<td>" + i*j +"</td>";
//     }
//     sout = sout + "</tr>";
// }
// sout = sout + "</table>";
// document.write(sout);
//while
let sout;
sout = "<table boder ='1' width ='300' cellspacing='0' cellpadding = '3'>";
let i = 1;
let j = 1;
while (i <= 10)
{
    sout = sout + "<tr>";
    while(j <= 10)
    {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;//khởi tạo lại j để chạy vòng while của j
    i++;
}
sout = sout + "</table>";
document.write(sout);
