// What is the difference between the ES6 and ES5 standards?
// ES5
1.
var a = 10
console.log(10)
2.
var b = "helloe",a;
console.log(b)
3.
// var modulue = require("module")
4.
function  sum(a,b) {
    a=a||2
    b=b||5
    return a+b
}
console.log(sum())
5.
var person={
    name:"anurag",
    age:22
}
console.log(person.name,person.age)
// ES6
1.
let c =10
const d=9;
console.log(c,d)

2.
let e = `hello ${c,d}`
console.log(e)

3.
// import {  } from "module";
// export const myfunction=()=>{}
4.
const Sum=(a=2,b=4)=>{
    console.log(a+b)
}    
Sum()
5.
const Person ={
    name:"anurag",
    age:22
}
const {name,age}=Person
console.log(name,age)
