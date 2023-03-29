"use strict";
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
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
// classes
// here is how yu create classes in typescirpt, it is very similar to javasscript except that you can declare types in the beginning of the class
class Invoice {
    // every type is considered to be public by default meaning that it can be logged by the console, and it can be accessed outside of the class, The private class ensures that the variable is only accessable with in the class. readonly is another modifer which can be used, which allows you to access and read the variable in and out side of the class, but you wont be able to edit the class.
    // public amount: number;
    // amount: number; same as public above
    // private amount: number;
    // readonly amount:number;
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // below as a shorthand version above if you used access modifiers, it only works if you use access modifiers 
    // constructor(
    //   readonly client: string,
    //   private details: string,
    //   public amount: number,
    // ){}
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 350);
// access modifier
// just as you can create arrays that only take in strings example: string[]
// You can also restrict that array in only taking values associated with a certain class. In the example below they use the INvoice class as an example.
let invoices = [];
// this will work
invoices.push(invOne);
invoices.push(invTwo);
// this wont work
// invoices.push('string')
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
