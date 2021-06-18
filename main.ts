// tsc filename --watch (for live error)
// tsc filename.ts (It will transcompile and create a .js file for the same)
// node filename.js (To Run .js file)

// Variable Declaration & Assignment
let a = "Hello World";
console.log(a);

let x = 10;
let y = 20;
// let will work without initalization
let sum;

// we need to initalize const value;
const vikr = 20;

//  Declaring Type to variable
let isBeginner: boolean = true;
let total: number = 20;

let names: string = "vishal";

let sentence: string = `My name is ${names}. And I do coding`;
console.log(sentence);

// null & undefined
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let lst2: Array<number> = [1, 2, 3];

// It should be in order otherwise error will be there
let persom1: [string, number] = ["krish", 1];

// enum
//  How to use enum by default start with index value=0
enum color {
  red = 5,
  green,
  blue,
}
let c: color = color.green;
console.log(c);

//  For any  type we can  reintialize with boolean, number, string
let randomValue: any = 10;
randomValue = true;
randomValue = "vishal";

// To check value is present  or created
let myVariable: unknown = "gulu";

function hasName(obj: any): obj is { namex: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) console.log(myVariable.namex);
console.log((myVariable as string).toUpperCase());

//  here ax variable can be initalized to be string or number or boolean as it has not been initalized
let ax;
ax = 10;
ax = true;

//  Here variable b must be number otherwise it will give error as it has been initalized with number
let b = 20;

//  Multiple type declaration .Meaning it's value must be of type either number or boolean .
// some api calls value returned cannot be predicted for that may be one of the use cases .
//  According to value it's shows the function
let multiType: number | boolean;
multiType = 20;
multiType = true;

//  It can take value of any type meaning null, string,boolean,number
let anyType: any;
anyType = 20;
anyType = true;

//  Functions

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(5, 10);
// add(5,'10') it will throw error as num2 is type of string

//  Functions with optional Parameter num2
function add1(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

add1(5, 10);
add1(5);

//  Function with Default Parameter num2
function add2(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

console.log(add2(5));

//  Interface
//  Here lastName is optional Parameter
interface Person {
  firstName: string;
  lastName?: string;
}

//  We have passed the interface Person
//  here person is of Type Person interface which we have declared
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Vishal",
};
console.log(fullName(p));

// Class & Use Of constructor
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

//  New Object Initalize
let emp1 = new Employee("vishal");
emp1.greet();
console.log(emp1.employeeName);

// Inheritance
//  We are extending Employee class to access methods & variables
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegate() {
    console.log("I am the boss");
  }
}

let m1 = new Manager("king");
m1.greet();
m1.delegate();

// Access Modifires  in class based component
// private   - To access within the class
// public    - To access anywhere inside & outside the class
// protected - To acces within the class & class extending it.

// Array
// Generic Type

type numArray = Array<number>; // Array of numbers
type strArray = Array<String>; // Array of Strings

const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 5, 6]);
const l1 = last(["a", "b", "c"]);

const makeArr = <X, Y>(x: X, y: Y):[X,Y] => {
  return [x, y];
};

const br = makeArr("a", 1);
const bmw = makeArr(2, 1);
const bl = makeArr("a", "b");


