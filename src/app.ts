import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
// when importing you must use the javascript version even if it is a ts file you are using it in.
// You must put type='module' in the script. 
// the module can be only be used on modern browsers

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Invoice('mario', 'pluming work', 200)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)

// INterfaces
// An interface is used to ensure the proper structure of an object
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a:number): number;
}
// if you are not matching the structure of the interface isPerson It will show an error
const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text :string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name)
}

greetPerson(me)

// // The DOM And Type casting
// const anchor = document.querySelector('a')!;
// // if(anchor) {
// //   console.log(anchor.href)
// // }

// console.log(anchor.href)

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

// The ! mark mean you know it exist so ignore the error
// const form = document.querySelector('form')!;

// typecasting
// using as and indicating its type, so instead of using the element type, it uses the specified element indicated after the as
const form = document.querySelector('.new-item-form') as HTMLFormElement

// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {

  let doc: HasFormatter
  if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  e.preventDefault()

  list.render(doc, type.value, 'end');
})

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

// Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// Generics
// TypeScript generics provide a way to make components work with any data type and not restrict to one data type. Generics uses the type variable <T>, a special kind of variable that denotes types and remembers the type that the user provides and works with that particular type only (preserving type information)

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docThree = addUID({name: 'yoshi', age: 40 })
let docFour = addUID({name: 'yoshi', age: 40 })

console.log(docThree.name)

// generic with interface
interface Resource<T>{
  uid: number;
  resourceName: string;
  date: object;
}

// tuples
// Are similar to arrays, the elements within are fixed unlike arrays

// this works
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

// this works
let tup: [string, number, boolean] = ['ryu', 25, true];

// this wont work, because value must match order defined
// let tup: [string, number, boolean] = [40, 'ryu', true];





