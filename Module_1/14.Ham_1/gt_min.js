let index;
function min(arr){
    if (arr.length === 0){
        return 'Mảng rỗng!';
    }
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            index = i;
        }
    }
    return `Giá trị nhỏ nhất trong mảng là ${min} nằm ở vị trí ${index}`;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
alert(`Mảng vừa nhập là: ${arr1}`)
let result = min(arr1);
alert(result);