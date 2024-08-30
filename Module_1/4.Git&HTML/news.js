//prompt tương đương với input
//Do trong string không có phép nhân, chỉ có phép cộng nên khi nhân 1 sẽ chuyển từ string sang number
let diemToan = prompt('Nhập điểm môn toán') * 1;
//parseFloat() chuyển từ string sang float (số thực)
let diemVan = parseFloat(prompt('Nhập điểm môn Văn'));
let diemAnh = parseFloat(prompt('Nhập điểm môn Anh'));
let avg = (diemToan + diemVan + diemAnh)/3;
alert(avg);