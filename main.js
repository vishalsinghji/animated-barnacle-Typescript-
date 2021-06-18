// tsc filename --watch (for live error)
// tsc filename.ts (It will transcompile and create a .js file for the same)
// node filename.js (To Run .js file)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Variable Declaration & Assignment
var a = "Hello World";
console.log(a);
var x = 10;
var y = 20;
// let will work without initalization
var sum;
// we need to initalize const value;
var vikr = 20;
//  Declaring Type to variable
var isBeginner = true;
var total = 20;
var names = 'vishal';
var sentence = "My name is " + names + ". And I do coding";
console.log(sentence);
// null & undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var lst2 = [1, 2, 3];
// It should be in order otherwise error will be there
var persom1 = ['krish', 1];
//  How to use enum by default start with index value=0
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
var c = color.green;
console.log(c);
//  For any  type we can  reintialize with boolean, number, string
var randomValue = 10;
randomValue = true;
randomValue = 'vishal';
// To check value is present  or created
var myVariable = 'gulu';
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable))
    console.log(myVariable.namex);
console.log(myVariable.toUpperCase());
//  here ax variable can be initalized to be string or number or boolean as it has not been initalized
var ax;
ax = 10;
ax = true;
//  Here variable b must be number otherwise it will give error as it has been initalized with number
var b = 20;
//  Multiple type declaration .Meaning it's value must be of type either number or boolean . 
// some api calls value returned cannot be predicted for that may be one of the use cases .
//  According to value it's shows the function 
var multiType;
multiType = 20;
multiType = true;
//  It can take value of any type meaning null, string,boolean,number
var anyType;
anyType = 20;
anyType = true;
//  Functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5,'10') it will throw error as num2 is type of string
//  Functions with optional Parameter num2
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add1(5, 10);
add1(5);
//  Function with Default Parameter num2 
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add2(5));
//  We have passed the interface Person
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Vishal'
};
fullName(p);
// Class & Use Of constructor
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
//  New Object Initalize
var emp1 = new Employee('vishal');
emp1.greet();
console.log(emp1.employeeName);
// Inheritance
//  We are extending Employee class to access methods & variables
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegate = function () {
        console.log("I am the boss");
    };
    return Manager;
}(Employee));
var m1 = new Manager('king');
m1.greet();
m1.delegate();
// Access Modifires  in class based component
// private   - To access within the class
// public    - To access anywhere inside & outside the class
// protected - To acces within the class & class extending it.
