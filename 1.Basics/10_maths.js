const num=10

let value = new Number(10)
console.log(Math)
console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.pow(2,3));
console.log(Math.floor(2.2));
console.log(Math.ceil(2.2));

let arr=new Array(1,2,3);
console.log(arr);
console.log(Math.max(...[1,2,3]));
console.log(Math.min(...arr));

console.log(Math.floor(Math.random()*10));

let min=10
let max=100
let range=max-min
console.log(Math.floor(Math.random()*range +min));

for(i=0;i<100;i++)
{
    if((Math.floor(Math.random()*range +min)==99))
        console.log("99 generated")
}


