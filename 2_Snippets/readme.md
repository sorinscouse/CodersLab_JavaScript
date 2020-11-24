<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - Snippets
> Short pieces of code that solve various problems, illustrate dependencies, or show how to use some more complicated functions.

#### 1. Creating objects based on the constructor
```JavaScript
function Animal(type) {
    this.type = type;
}

Animal.prototype.sayVoice = function(voice) {
    console.log(voice)
}

var lion = new Animal('lion');
lion.sayVoice("roar");

var pigeon = new Animal('pigeon');
pigeon.sayVoice("coo coo");
```
#### 2. Creating objects with Object.create()

```JavaScript
var Animal = {
    type: "",
    sayVoice: function(voice) {
        console.log(voice)
    }
}

var lion = Object.create(Animal);
lion.type = "lion";
lion.sayVoice("roar");


var pigeon = Object.create(Animal);
pigeon.type = "pigeon";
pigeon.sayVoice("coo coo");
```

#### 3. setInterval & clearInterval

```JavaScript
var id = setInterval(function() {
    console.log('I am executed every 2 seconds');
}, 2000 )

clearInterval(id);
```

#### 4. setTimeOut & clearSetTimeout
> Execute code after a given period of time has passed

```JavaScript
var id = setTimeout(function() {
    setOpacity(1);
}, 1000);

clearSetTimeout(id);
```

#### 5. Different types of events

* click
```JavaScript
var button = document.getElementById('send');
button.addEventListener('click', function(){
    console.log('hurray, I was clicked');
})
```

* keyup/keydown/keypress
```JavaScript
var inputField = document.getElementById('name');
inputField.addEventListener('keyup', function(){
    console.log('hurray, text was entered');
})
```
**keyup** - triggered when you release the key;
**keydown** - triggered when the key is pressed;
**keypress** - triggered when the key is pressed, but it returns entered character hidden under the key, not the number of the key as the previous ones.
See the difference - http://jsfiddle.net/user2314737/543zksjc/3/show/


* mouseeneter/mouseleave/mousemove/mouseover
```JavaScript
var myButton = document.getElementById('myButton');
myButton.addEventListener('mouseeneter', function(){
    console.log('hurray, mouse over the element');
})
```
**mouseeneter** - triggered once when you move the cursor over an element, but it does not react to children;
**mouseover** - triggered once when you move the cursor to place it over an element or its children;
**mouseleave** - triggered when you move the cursor away from an element;
**mousemove** - triggered when you move the cursor within the element and its children.


#### 6. Pobieranie różnych wartości z elementów z formularza
* input
```JavaScript
var inputField = document.getElementById('card');
inputField.value;
```

* checkbox
```JavaScript
var checkboxField = document.getElementById('condition')
checkboxField.checked
```

* radiobutton
```JavaScript
var radioBtn = document.getElementById('radio');
radioBtn.checked;
```
* textarea
```JavaScript
var msgField= document.getElementById('message');
msgField.value;
```
* select & option

 Getting value
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[msgField.selectedIndex].value;
```
Setting value
```JavaScript
var selectField = document.getElementById('infos');
selectField.options[1].selected = true
```
