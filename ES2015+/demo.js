const { get } = require("express/lib/response");

function add(x,y){
    return x + y;
}

let add = (x, y) =>{
    return x + y;
}

let add = (x,y) => x + y;

//Create an arrow function named subtract() that returns the diffrence of two numbers, x and y. (x-y)
let suntract = (x,y) =>{
    return x - y;
}

let subtract = (x,y) => x - y;

//Create an arrow function named multiply() that returns the product of two numbers, x and y. (x*y)

let multiply = (x,y) => x * y;


class Customer {
    constructor(firstname, lastname ){
        this.firsname = firstname;
        this. lastname = lastname;
    }
}

getFullName(){
    console.log(Name)
   

