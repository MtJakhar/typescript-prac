"use strict";
let character = 'luigi';
// typescript uses strict types, therefore this string cannot change to a different type.
// for example if we were to do the following:
// let character = 20
// It will result in a error
// but let character = 'wario' 
// will not result in an error because it is a similar type
console.log(character);
let age = 30;
// in typescript integers and float are one type which is the number type
let isBlackBelt = false;
const inputs = document.querySelectorAll('input');
console.log(inputs);
// inorder to compile this and make it readable for browsers you must open your terminal and use the command tsc with this files name: tsc sandbox.ts to create an equivalent js file, if you want to do this automatically you must input the following command: tsc sandbox.ts -w, the -w means watch and typescript complier will automatically update the the js file to match the typescript file.
inputs.forEach(input => {
    console.log(input);
});
//by adding : to a param, you can set the type required for that param
// if you put anything other than a number it will show an error
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// array
let names = ['luigi', 'mario', 'yoshi'];
names.push('peach');
// in typescript adding the code below, will result in an error, you cant even change the types by selecting them
// names.push(1) names[0] = 1
// inorder to make a mixed array, you will have to have different variables when the array is initialized
let mixed = ['ken', , ' chun-li', 8];
mixed.push('ryu');
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// if you delcare a key with a certain type, it must contain that type if it is changed, you cant change a string to a number and vica versa, you also cannot add new key value pairs to the object. All these must be initialized in the beginning.
// explicit types
let person;
let ageOld;
let isLoggedIn;
// you can intitialize variable without values but you must assign type to it.
ageOld = 30;
isLoggedIn = true;
// explicit array
//  you can do the same with an array with the following syntax.
let ninjaList = [];
// for creating a mixed type you must use the union syntax which is (type|type), it is written below. any undeclared types will not work
let mixedList = [];
mixed.push('hello');
mixed.push(5);
// explicit object
let object;
object = { name: 'yoshu', age: 3 };
let object2;
// any type, can have any type or more specifically type any as opposed to type string
let ageYear = 25;
// above age is number
ageYear = true;
// here age is now boolean
ageYear = 'hello';
// here it si string,, and it will change to many different types
// this reverts typescript to javascript. probably shouldn't use this because you might as well use javascript
let mixedArray = [];
mixedArray.push(6);
mixedArray.push('mario');
mixedArray.push(false);
//  as you can see the any type can be applied to arrays and objects
let mixedObject;
mixedObject = { name: 'yoshi', age: 35 };
mixedObject = { name: 24, age: 'sdfdsf' };
// better workflow
// you cant update ts when typescipt file and javascript are in different folders inorder to work around this you must,do tsc --init, this creates a tsconfig file. Then go into it and find the rootDir :"./" and change it to "./src", then find the outDir: "./" and change it to "./public". now we can enter tsc, or tsc -w without specifying the file and it will update teh javascript
// As of right now,if for some reason you have a ts file outside of src, that ts file will also create a js file in public. in order to prevent this you can go to the tsconfig and go to the end of the nested object and create a key value pair which has the key of include and an array with the string src so "include" : ["src"]. This will make it so that only ts files in the src folder will create a public js file
// function types
let greet = () => {
    console.log('hello world');
};
// ts will infer that this is a type function, hense you can not set greet to a string or anything else
let greet2;
// You can specifically set a variable with type Function, with Capital F, greet2 can only in the future be used only for functions.
// you can pass params and set their types also the syntax for c is a optional param that can take either ea string or a number
//if the c were like follows: c:number| string = 10, this will be an optional with a default of 10 if option is not provided, observe that the question mark is not there. console log returns a void value, because console.log is a side effect not a return.
//  if you want to write it explicitly do this:
// const add = (a: number, b: number, c?: number | string): void => {
//   console.log( a + b );
// }
const add = (a, b, c) => {
    console.log(a + b);
};
// this add will work 
add(5, 10);
// this wont
// add(2, "10")
// when you create a function you usually return a value, in a return ts will infer the value based on the type of inputs. so result type will be string and it cannot be anything else. you can explictly declare return type by doing the following:
//  const minus = (a: number, b: number): number => {
//   return a + b;
// }
// this is not necessary, but it can be used to make code more readable
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
