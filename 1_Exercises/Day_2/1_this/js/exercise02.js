var calculator = {
    save: function(newA,newB) {
        this.a = newA;
        this.b = newB;
    }

};
  
calculator.save(2,3);
console.log( calculator.sum() );
console.log( calculator.multiply() );
