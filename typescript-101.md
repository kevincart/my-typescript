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

- Statically typed languages
    - More rigid. Meant to catch development errors before the code is even executed.
    - Impose restrictions on how you can interact with objects, forcing you to clearly specify everything about the object that you're going to interact with.
    - Errors caught before run time.
    - First must explicitly define a type with the desired method, any parameters required, and values returned.
    - Tooling can actually tell you immediately when you are doing something wrong.

- Each typing system has its advantages. Know when to use each.
- Static typing may take longer to set up, but can save time avoiding errors.
- Don't always have to use static typing in Typescript.

## Resources
- http://www.typescriptlang.org/ Online compiler
- http://www.jetbrains.com/webstorm Webstorm
- https://minhaskamal.github.io/DownGit/#/home DownGit

## IDE Setup
- Install Node
- Download repo: https://github.com/Microsoft/TypeScriptSamples/tree/master/d3
- Run `tsc data.ts`
