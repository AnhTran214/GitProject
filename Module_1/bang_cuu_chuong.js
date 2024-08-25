let i;
let j;
let sout = "<table style='border: 1px solid black; width: 50%; border-collapse: collapse'>"
for ( i = 1; i < 10; i++){
    sout = sout + "<tr style='text-align: center; border: 1px solid black'>"
    for (j = 2; j < 10; j++){
        sout = sout + "<td style='border: 1px solid black; padding: 8px'>" + `${j} * ${i} = ${j*i}` + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
let titl = "<h2>Bảng cửu chương</h2>";
document.write(titl);
document.write(sout);
