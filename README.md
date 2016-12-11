# marcopologame
## To run the program:

1. Clone the repo
2. Run `npm install`
3. Run `node index.js`

## To run the unit tests:

1. Run `npm test`
```
If you don't already have it already you'll also need to install the Karma command line interface by running:

`npm install -g karma-cli`
```
## Q. How can you limit the scope on a directive and why would you do this?
```
Ans. We scope object in a directive for limit a scope. In the scope object we add the variable names we want on the scope.
Example for bind MyVar on directive scope:
.directive("MyDirective", function() {
  return {
    scope: {
      MyVar : "="//Here we use @ for string, = for two way bindings and & for one way binding.
    },
  };
}) 
```

----
