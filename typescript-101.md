# My Typescript Notes
These are the personal Typescript learning files from Kevin Cartwright. 2017. MIT License.

### Typescript
- Superset of JavaScript
- Adds concept of static typing to core function of JS
- Allows devs to 'opt in' to static typing when needed, while still enjoying advantages of dynamic typing in a project.

### Static vs Dynamic Typing
- Dynamically typed languages (Javascript)
    - Also known as 'duck typing'.
    - If my code expects an object that has a method called 'Quack,' and I get an object that has such a method, that's good enough for me.. No more validation needed. This is meant to make coding faster, but the net result is that tools don't have enough information to catch errors before the application runs.
    - Errors occur at run-time, when it's too late to correct them.

- Statically typed languages (Typescript)
    - More rigid. Meant to catch development errors before the code is even executed.
    - Impose restrictions on how you can interact with objects, forcing you to clearly specify everything about the object that you're going to interact with.
    - Errors caught before run time.
    - First must explicitly define a type with the desired method, any parameters required, and values returned.
    - Tooling can actually tell you immediately when you are doing something wrong.

- Each typing system has its advantages. Know when to use each.
- Static typing may take longer to set up, but can save time avoiding errors.
- Don't always have to use static typing in Typescript.

### Typescript and Javascript together
- Transpilers of various kinds allow you to write advanced features to be converted to current standards (Babel, Typescript)..
- Typescript aims to stay true to latest ECMAscript standards, while adding new additional features (most importantly static typing).

### Typescript Basics
```
function speak(value: string): string {
    document.write(value);
    return value;
}
```
- In this example, I am declaring the parameter type required, and the expected return type of the function. If these values are not as expected, TS raises an exception.

### Configuring your compiler
- `tsc -w [filename]` Starts the compiler, and it will wait for changes on the specified file.
- `tsconfig.json` Store config options for Typescript here.
    - After you create this config, you can simply run `tsc -w` and Typescript will watch the whole folder for changes.
    - You can specifify a compilation target here, with
    ```
    {
    "compilerOptions": {
        "target": "es5"
    }
    ```
### Use the latest ECMAScript syntax with ease when using Typescript
- TS will transpile to a common version of JS at compile time.
- This means you can take advantage of advanced features, such as spread operators, destructuring, and template strings.

### Computed properties
- Allows you to define a property on an object with a name that is computer dynamically at run-time.
- Computed properties can appear within things like object key strings, so places where template strings might not be available.
- To use a computed property in Typescript, simply wrap the property to be computed in brackets like this:
    - `const HERE = 'Here';`
    - `['HERE is a computed property]`; // 'Here is a computed property'

### Javascript Types
- ECMAScript 5 Types:
    - boolean
    - number
    - string
    - null / undefined
    - object
        - object special types (unique prototypal inheritance):
        - functions
        - arrays

### Typescript Type Inference
- Typescript can determine types on its own from plain Javascript, by inspecting the assignment of each property or variable to see what type of value was assigned to them.
- Return values for function are also inferred, and enforced where that function is used.
- These inferences can echo through the code and effect 'downstream' functions and values, so discipline is key.
- If TS doesn't have enough information to correctly infer types, TS assigns the 'ANY' type. This is the most unrestricted type.

### Specifying Types
- TS uses `parameter: type` format to specify types.
- Basic examples:
    - `var x: number = 42;`
    - `function(x: number): number { return x }`
        - In this case, the return value type is specified after the parens. 
- Union Types:
    - Give consumers of a function the option to pass in several different types for a given property.
    - Specified with `|`.
    - Can be wrapped in parens to clean up code.
    - Examples:
        `var x: (number | string) = 'abc';`
        `function myFunc(x: (string | any[])): string { return x }`
    - `instanceOf` JS method can be used to clarify type:
        - `if ( x instanceOf Array ) { do array stuff }`
        - This is the 'Typeguard syntax.'
        - Primitive Typeguard:
            - `if ( typeof x === 'string' ) { do string stuff }`

### Overloaded Functions
- In classic static languages, you would often define the same function multiple times with specific combinations of parameter types, and when consuming the required typed definition would be used. Javascript won't allow this, but Typescript allows you to.
- Example:
```
function totalLength(x:string, y:string): number
function totalLength(x:any[], y:any[]): number
```
- These overloaded definitions are removed from the compiled JS, and only the valid defition is used.

### Defining Custom Types
- Interfaces
```interface [type name] {
        value: type;
        value: type;
    }
```
- Strictly used for compile time checks, and have no other effects on the code at runtime.
- Once the custom type is defined, it is used like any other type definition:
    - `var x: [custom type name] = {}`
    - `var x = <[custom type name]>{}` this is 'casting'
    
    - Can define optional properties with `?` after the property name.
    - Define methods with a similar syntax to function definitions, just without the 'function' keyword. Can specify expected parameter types, and return types.
```
interface IToDoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}
```
- You can also define a function interface without a named method like this
```
interface jQuery {
    (selector: string): HTMLElement;
    version: number;
}
```
- This will act as a single named function object.
- Extending interface definitions
    - Simply make a new interface definition with the same name, and add the properties and methods you desire.
- Enums
    - Define a custom set of named numeric constants.
    - Example:
```
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}
```
- Anonymous Types
    - `var todo: { name: string };`
- Classes

### Prototype based programming
- Prototype object holds properties. Other objects are linked to that prototype.
- When a member (property or method) is called for an object, JS digs into the prototype chain to find it.
    - Object.prototype is the root object in JS.
- Constructors create linkages to a given prototype chain.

### Javascript ES6 Classes
- ES6 introduces Classes, which provide syntactic sugar for the prototype system.
- In order to define methods and properties, they have to be declared within the Class definition, and initialized.
- TS makes this easy:
```
class TodoService {

    constructor(private todos: Todo[]) {
    }

    getAll() {
        return this.todos;
    }
}
```
- Static properties of classes:
    - `static lastId: number = 0;`
    - Use this to attach something to a class which you want to be a 'single source of truth' about something related to that object. This is akin to attaching a variable to a prototype constructor function in ES5.
    - Static properties are only callable on the class itself, not on instances of that class.
    - Often used to create utility functions.
    - Methods can also be declared as static members of objects too.

### Getter and Setter methods
```
var todo = {
    get state() {
        return this._state;
    },
    set state(newState) {  // Must take a parameter
        // set logic
        this._state = newState;
    }
}
```

Get and set those values like this:

```
todo.state = TodoState.Complete; // set

todo.state;  // get
```

Stated another way, from MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get]
```
{get prop() { ... } }
{get [expression]() { ... } }
```

These methods were introduced in ES6, and provide alternative calling 'routes' for getting and retreiving properties on an object. Like all object methods, this can be used in a variety of places throughout JS, including Classes and object literals.


## Resources
- http://www.typescriptlang.org/ Online compiler
- http://www.jetbrains.com/webstorm Webstorm
- https://minhaskamal.github.io/DownGit/#/home DownGit

## IDE Setup
- Install Node
- `npm install -g typescript`
- OR
- `brew install typescript`
