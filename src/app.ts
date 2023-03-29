import { Invoice } from './classes/Invoice.js'
// when importing you must use the javascript version even if it is a ts file you are using it in.
// You must put type='module' in the script. 
// the module can be only be used on modern browsers

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
  e.preventDefault()
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value
  )
})

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 350);

// access modifier
// just as you can create arrays that only take in strings example: string[]
// You can also restrict that array in only taking values associated with a certain class. In the example below they use the INvoice class as an example.
let invoices: Invoice[] = [];
// this will work
invoices.push(invOne)
invoices.push(invTwo)
// this wont work
// invoices.push('string')


invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
})

