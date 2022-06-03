import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type')! as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')  
})


// EXTRA INFORMATION - Tutorial

// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docFive = addUID({name: 'yoshi', age: 40});

console.log(docFive.age)

// generics with interfaces
interface TResource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: TResource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'Travis' }
}

const docFour: TResource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docFour)


// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1, 
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind'}
}

const docTwo: Resource<object> = {
  uid: 10, 
  resourceType: ResourceType.PERSON,
  data: { name: 'yoshi'}
}

console.log(docOne, docTwo)