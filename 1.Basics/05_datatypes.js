//string
const name="prasad"

//number
const value=100.3

//null
const empty=null;

//undefined
let email;

//symbol
const id=Symbol('123')

//bigint
const bigValue=12133232323n

//reference
//arrays
const info =["prasad",30,"male"]

//objects
const dinfo={
    name:"prasad",
    age:30,
}

//functions
const datacall = function(){
    console.log("hello world")
}

datacall();

console.log(`Number - ${typeof(100)}`)
console.log(`String - ${typeof("prasad")}`)
console.log(`Null - ${typeof(null)}`)
console.log(`undefined - ${typeof(undefined)}`)
console.log(`Symbol - ${typeof(id)}`)
console.log(`bigint - ${typeof(bigValue)}`)
console.log(`Array - ${typeof(info)}`)
console.log(`Object - ${typeof(dinfo)}`)
console.log(`Function - ${typeof(datacall)}`)