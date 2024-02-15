const myString = "my name is prasad and i am 30 years old"

console.log(myString.substring(0,7))

console.log(myString.slice(1,9))

const myUrl="https://google.com/?prasad%20t"
console.log(myUrl.replace("%20",'-'))

console.log(myString.split(' and '))

console.log(myUrl.includes('google'))