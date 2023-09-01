//#2
alert('х - число')
//undefined
x = 5;
//5
x = ('пять');
//'пять'
x = true;
//true


let x = 5;
//undefined
typeof x;
//'number'
x = '5';
//'5'
typeof x;
//'srting'


if (result === 5) {
    console.log("результат равен 5") 
} else if (result === 'number') {
    console.log("результат равен 'number'")
} else if(result === 'string') {
    console.log("результат равен 'string'")
} else if(result === 'true') {
    console.log("результат равен 'true'")
} else {
    console.log("тип х не определен")
}