//for-each để in ra thông tin của đối tượng trong mảng
let animal = [
    {
        id: 1,
        name: "cat",
        size: "small"
    },
    {
        id: 2,
        name: "dog",
        size: "small"
    }
]
animal.forEach(function (animal){
    console.log(animal);
})

//for-of để in ra từng ký tự trong chuỗi
let webPage = "codegym.com";
for (let w of webPage)
{
    console.log(w);
}

// for-in để in ra các giá trị thuộc tính của đối tượng Person
let person = {firstName: "Le", lastName: "Loi", address: "Ha Noi"};
for (let p in person)
{
    console.log(person[p]);
}