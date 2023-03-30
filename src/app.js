"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_js_1 = require("./classes/Invoice.js");
const Payment_js_1 = require("./classes/Payment.js");
// when importing you must use the javascript version even if it is a ts file you are using it in.
// You must put type='module' in the script. 
// the module can be only be used on modern browsers
let docOne;
let docTwo;
docOne = new Invoice_js_1.Invoice('yoshi', 'web work', 250);
docTwo = new Invoice_js_1.Invoice('mario', 'pluming work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
// if you are not matching the structure of the interface isPerson It will show an error
const me = {
    name: 'shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
// // The DOM And Type casting
// const anchor = document.querySelector('a')!;
// // if(anchor) {
// //   console.log(anchor.href)
// // }
// console.log(anchor.href)
// The ! mark mean you know it exist so ignore the error
// const form = document.querySelector('form')!;
// typecasting
// using as and indicating its type, so instead of using the element type, it uses the specified element indicated after the as
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    e.preventDefault();
    console.log(doc);
});
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 350);
// access modifier
// just as you can create arrays that only take in strings example: string[]
// You can also restrict that array in only taking values associated with a certain class. In the example below they use the INvoice class as an example.
// let invoices: Invoice[] = [];
// this will work
// invoices.push(invOne)
// invoices.push(invTwo)
// this wont work
// invoices.push('string')
// invoices.forEach(inv => {
//   console.log(inv.client, inv.details, inv.amount, inv.format());
// })
