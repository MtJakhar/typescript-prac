import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
// here is how yu create classes in typescirpt, it is very similar to javasscript except that you can declare types in the beginning of the class


export class Invoice implements HasFormatter {
  client: string;
  details: string;
  amount: number;
  // every type is considered to be public by default meaning that it can be logged by the console, and it can be accessed outside of the class, The private class ensures that the variable is only accessable with in the class. readonly is another modifer which can be used, which allows you to access and read the variable in and out side of the class, but you wont be able to edit the class.
  // public amount: number;
  // amount: number; same as public above

  // private amount: number;
  // readonly amount:number;


  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a
  }
// below as a shorthand version above if you used access modifiers, it only works if you use access modifiers 
  // constructor(
  //   readonly client: string,
  //   private details: string,
  //   public amount: number,
  // ){}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}