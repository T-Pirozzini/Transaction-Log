// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Travis',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
};


console.log(me)

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('Ben', 'Owes for Pizza last Tuesday', 15);
const invTwo = new Invoice('Chun-li', 'Owes for fighting lessons', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value, 
    details.value,
    amount.valueAsNumber
  )
})