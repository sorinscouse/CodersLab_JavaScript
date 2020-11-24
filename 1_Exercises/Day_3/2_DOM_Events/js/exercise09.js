var a = document.getElementById("a");
var b = document.getElementById("b");

// This points to document here (as addEventListener is called
// in the context of the document object)
console.log("obiekt document: ", this);

a.addEventListener("click", function(event){
  // This points to the DOM element with 'a' id
  console.log("a: ", this);
});

b.addEventListener("click", function(event){
  // This points to the DOM element with 'b' id
  console.log("b: ", this);


  function innerFuncOne(){
      // This points to the Window element, because the function
      // was called with no context.
      console.log("innerFuncOne: ", this);
  }
  innerFuncOne();

});
