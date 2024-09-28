// function firstFunction(animal){
//     return animal+ " is my favourite animal"
// }

// console.log(firstFunction())

function add7(num){
    const add= num;
    return add +7;
}
console.log(add7(5))

function multiply(num1,num2){
    return num1*num2
}
console.log(multiply(5,4))

function capitalize(str){
    let capital = str.toUpperCase()[0]+str.slice(1);
    return capital
}

console.log(capitalize("hello"))

function lastLetter(arg){
    let last = arg.slice(arg.length-1);
    return last;
}
console.log(lastLetter("hello"))