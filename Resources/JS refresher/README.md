## JS refersher

##  Var 
- Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, though. That is why it was necessary for new ways to declare variables to emerge.

    - Scope of var: Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped. This means that any variable that is declared with var outside a function block is available for use in the whole window. var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

    ``` var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    } ```

    - var variables can be re-declared and updated

    ``` var greeter = "hey hi";
    var greeter = "say Hello instead";```

    - Hoisting of var: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

    ```    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello";```

    - Problem with var: So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

    If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code

    ```var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead" ```

##  Let
-  let is block scoped: A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.So a variable declared in a block with let  is only available for use within that block.

    ```let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined ```

- let can be updated but not re-declared.Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope

   ```let greeting = "say Hi";
    greeting = "say Hello instead";```

- Hoisting of let: Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

##  Const
- Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

    - const declarations are block scoped

    - const cannot be updated or re-declared: This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. 

    ```const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. ```

-  Hoisting of const: Just like let, const declarations are hoisted to the top but are not initialized.

- Using https://jsbin.com/?js,console from simple practice

## Functions

- Regular JS function

```function mfFnc(){ .... }```

- Arrow functions are a different way of creating functions in JavaScript. Besides a shorter syntax, they offer advantages when it comes to keeping the scope of the this keyword( this.name replaced by =>). 

Arrow function syntax may look strange but it's actually simple.

    function callMe(name) { 
        console.log(name);
    }

which you could also write as:

    const callMe = function(name) { 
        console.log(name);
    }

becomes: 

    const callMe = (name) => { 
        console.log(name);
    }

Important: When having no arguments, you have to use empty parentheses in the function declaration:

    const callMe = () => { 
        console.log('Max!');
    }

When having exactly one argument, you may omit the parentheses:

    const callMe = name => { 
        console.log(name);
    }

When just returning a value, you can use the following shortcut:

    const returnMe = name => name

That's equal to:

    const returnMe = name => { 
        return name;
    }

array prototype

    map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
    concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
    slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## Exports & Imports

In React projects (and actually in all modern JavaScript projects), you split your code across multiple JavaScript files - so-called modules. You do this, to keep each file/ module focused and manageable.

To still access functionality in another file, you need export  (to make it available) and import  (to get access) statements.

You got two different types of exports: default (unnamed) and named exports:

default => export default ...; 

named => export const someData = ...; 

You can import default exports like this:

import someNameOfYourChoice from './path/to/file.js'; 

Surprisingly, someNameOfYourChoice  is totally up to you.

Named exports have to be imported by their name:

import { someData } from './path/to/file.js'; 

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.

When importing named exports, you can also import all named exports at once with the following syntax:

import * as upToYou from './path/to/file.js'; 

upToYou  is - well - up to you and simply bundles all exported variables/functions in one JavaScript object. For example, if you export const someData = ...  (/path/to/file.js ) you can access it on upToYou  like this: upToYou.someData .

## JS Class

- Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. 
    - Properties: variables atteched to the classes
    - Method: functions atteched to the classes

Like this:

    class Person {
        constructor () {
            this.name = 'Max';
        }
    }
     
    const person = new Person();
    console.log(person.name); // prints 'Max'

In the above example, not only the class but also a property of that class (=> name ) is defined. The syntax you see there, is the "old" syntax for defining properties. In modern JavaScript projects (as the one used in this course), you can use the following, more convenient way of defining class properties:

    class Person {
        name = 'Max';
    }
     
    const person = new Person();
    console.log(person.name); // prints 'Max'

You can also define methods. Either like this:

    class Person {
        name = 'Max';
        printMyName () {
            console.log(this.name); // this is required to refer to the class!
        }
    }
     
    const person = new Person();
    person.printMyName();

Or like this:

    class Person {
        name = 'Max';
        printMyName = () => {
            console.log(this.name);
        }
    }
     
    const person = new Person();
    person.printMyName();

The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.

You can also use inheritance when using classes:

    class Human {
        species = 'human';
    }
     
    class Person extends Human {
        name = 'Max';
        printMyName = () => {
            console.log(this.name);
        }
    }
     
    const person = new Person();
    person.printMyName();
    console.log(person.species); // prints 'human'


## Spread & Rest Operator

The spread and rest operators actually use the same syntax: ... 

Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.

Using the Spread Operator:

The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:

    const oldArray = [1, 2, 3];
    const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];

Here's the spread operator used on an object:

    const oldObject = {
        name: 'Max'
    };
    const newObject = {
        ...oldObject,
        age: 28
    };

newObject  would then be

    {
        name: 'Max',
        age: 28
    }

The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

## Destructuring

Destructuring allows you to easily access the values of arrays or objects and assign them to variables.

Here's an example for an array:

    const array = [1, 2, 3];
    const [a, b] = array;
    console.log(a); // prints 1
    console.log(b); // prints 2
    console.log(array); // prints [1, 2, 3]

And here for an object:

    const myObj = {
        name: 'Max',
        age: 28
    }
    const {name} = myObj;
    console.log(name); // prints 'Max'
    console.log(age); // prints undefined
    console.log(myObj); // prints {name: 'Max', age: 28}

Destructuring is very useful when working with function arguments. Consider this example:

    const printName = (personObj) => {
        console.log(personObj.name);
    }
    printName({name: 'Max', age: 28}); // prints 'Max'

Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:

    const printName = ({name}) => {
        console.log(name);
    }
    printName({name: 'Max', age: 28}); // prints 'Max')

We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.

