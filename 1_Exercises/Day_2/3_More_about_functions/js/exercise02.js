function callOtherFunction( nameOfFunction ) {
    console.log("Hi I'm a function called 'callOtherFunction' and I call the function that you throw at me as a parameter");

    var randomNumber1 = Math.random() * 20;
    var randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1,randomNumber2);
}

callOtherFunction( function(a,b) {
    console.log("The first number:", a);
    console.log("The second number", b)
    console.log("The result", a + b)
})
