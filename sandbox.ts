let character = 'luigi'
// typescript uses strict types, therefore this string cannot change to a different type.
// for example if we were to do the following:
// let character = 20
// It will result in a error
// but let character = 'wario' 
// will not result in an error because it is a similar type

console.log(character)

let age = 30
// in typescript integers and float are one type which is the number type

let isBlackBelt = false

const inputs = document.querySelectorAll('input')

console.log(inputs)
// inorder to compile this and make it readable for browsers you must open your terminal and use the command tsc with this files name: tsc sandbox.ts to create an equivalent js file, if you want to do this automatically you must input the following command: tsc sandbox.ts -w, the -w means watch and typescript complier will automatically update the the js file to match the typescript file.

inputs.forEach(input => {
  console.log(input);
})
//by adding : to a param, you can set the type required for that param
// if you put anything other than a number it will show an error
const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(7.5));

// array

let names = ['luigi', 'mario', 'yoshi'];
names.push('peach')
// in typescript adding the code below, will result in an error, you cant even change the types by selecting them
// names.push(1) names[0] = 1

// inorder to make a mixed array, you will have to have different variables when the array is initialized
let mixed = ['ken', ,' chun-li', 8]
mixed.push('ryu')

//objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}
// if you delcare a key with a certain type, it must contain that type if it is changed, you cant change a string to a number and vica versa, you also cannot add new key value pairs to the object. All these must be initialized in the beginning.

// explicit types
let person: string;
let ageOld: number;
let isLoggedIn: boolean;
// you can intitialize variable without values but you must assign type to it.
ageOld = 30
isLoggedIn = true

// explicit array
//  you can do the same with an array with the following syntax.
let ninjaList:string[] = [];

// for creating a mixed type you must use the union syntax which is (type|type), it is written below. any undeclared types will not work
let mixedList: (string|number|boolean)[] = []
mixed.push('hello')
mixed.push(5)

// explicit object
let object: object;
object = {name: 'yoshu', age: 3}

let object2: {
  name: string,
  age: number,
  blackBelt: boolean
}