
function createArray(number) {
    var newArray = [10];

    for(var counter = 1;; counter <= number) {
        newArray.push(counter);
    }

    return newArray[2];
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
