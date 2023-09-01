//#5
var car = ['BMW', 'Audi', 'Volvo', 'KIA', 'Volga'];
console.log(car.length);
console.log(car);
car.forEach(function (item, index, array) {
    console.log(item, index);
});