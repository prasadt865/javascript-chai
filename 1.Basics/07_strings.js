let name="prasad"

let age=new String(30);

let usn=String(65);

console.log(`${name} your age is ${age} and your usn is ${usn}`);

console.log(age.toString());
console.log(age.valueOf());

let x=null;
// console.log(x.toString());
console.log(String(x));

console.log(typeof "prasad");
console.log(typeof age);
age[0]='a'//immutable
console.log(age[0])
console.log(age)
let name3="prasad"
name3[2]='p'//immutable
console.log((name3));


const game = new String('alpha')
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('p'))

const surname = String(1)
console.log(surname)

let ev="2+2"
console.log(eval(ev))
let em = new String("2+2")
console.log(eval(em.valueOf()))

