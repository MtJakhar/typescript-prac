var character = 'luigi';
// typescript uses strict types, therefore this string cannot change to a different type.
// for example if we were to do the following:
// let character = 20
// It will result in a error
// but let character = 'wario' 
// will not result in an error because it is a similar type
console.log(character);
var age = 30;
// in typescript integers and float are one type which is the number type
var isBlackBelt = false;
var inputs = document.querySelectorAll('input');
console.log(inputs);
// inorder to compile this and make it readable for browsers you must open your terminal and use the command tsc with this files name: tsc sandbox.ts to create an equivalent js file, if you want to do this automatically you must input the following command: tsc sandbox.ts -w, the -w means watch and typescript complier will automatically update the the js file to match the typescript file.
inputs.forEach(function (input) {
    console.log(input);
});
//by adding : to a param, you can set the type required for that param
// if you put anything other than a number it will show an error
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// array
var names = ['luigi', 'mario', 'yoshi'];
names.push('peach');
// in typescript adding the code below, will result in an error, you cant even change the types by selecting them
// names.push(1) names[0] = 1
// inorder to make a mixed array, you will have to have different variables when the array is initialized
var mixed = ['ken', , ' chun-li', 8];
mixed.push('ryu');
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// if you delcare a key with a certain type, it must contain that type if it is changed, you cant change a string to a number and vica versa, you also cannot add new key value pairs to the object. All these must be initialized in the beginning.
// explicit types
var person;
var ageOld;
var isLoggedIn;
// you can intitialize variable without values but you must assign type to it.
ageOld = 30;
isLoggedIn = true;
// explicit array
//  you can do the same with an array with the following syntax.
var ninjaList = [];
// for creating a mixed type you must use the union syntax which is (type|type), it is written below. any undeclared types will not work
var mixedList = [];
mixed.push('hello');
mixed.push(5);
// explicit object
var object;
object = { name: 'yoshu', age: 3 };
var object2;
// any type, can have any type or more specifically type any as opposed to type string
var ageYear = 25;
// above age is number
ageYear = true;
// here age is now boolean
ageYear = 'hello';
// here it si string,, and it will change to many different types
// this reverts typescript to javascript. probably shouldn't use this because you might as well use javascript
var mixedArray = [];
mixedArray.push(6);
mixedArray.push('mario');
mixedArray.push(false);
//  as you can see the any type can be applied to arrays and objects
var mixedObject;
mixedObject = { name: 'yoshi', age: 35 };
mixedObject = { name: 24, age: 'sdfdsf' };
