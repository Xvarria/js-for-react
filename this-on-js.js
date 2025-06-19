function Main(){
    console.log("======== 1. Global Context ========");
    console.log(this); // global object in Node.js

    console.log("\n======== 2. Regular Function ========");
    function show() {
    console.log("Inside regular function:", this);
    }
    show();

    console.log("\n======== 3. Object Method ========");
    const obj = {
    name: "Zeus",
    say() {
        console.log("Object method:", this.name);
    }
    };
    obj.say();

    const speak = obj.say;
    speak(); // Object method: undefined -> Lost context

    console.log("\n======== 4. Arrow Function in Object ========");
    const objArrow = {
    name: "Zeus",
    say: () => {
        console.log("Arrow function in object:", this.name);
    }
    };
    objArrow.say(); // Arrow function in object: undefined -> Does NOT use objArrow as `this` (refence come from outer context)


    console.log("\n======== 5. Constructor Function ========");
    
    function Animal(name) {
        this.name = name;

        this.speak = function () {
            console.log("Regular in constructor:", this.name);
        };

        this.shout = () => {
            console.log("Arrow in constructor:", this.name);
        };
    }

    console.log("\n======== - 5.1 Instance dog ========");
    const dog = new Animal("Bobby");
    dog.speak();
    dog.shout();

    console.log("\n======== - 5.2 reference functions in constructor ========");
    const lostSpeak = dog.speak;
    lostSpeak(); // this = global or undefined 

    const preservedShout = dog.shout;
    preservedShout(); // this = captured in constructor

    console.log("\n======== 6. Class Syntax ========");
    class Pet {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log("Class method:", this.name);
        }

        shout = () => {
            console.log("Class arrow:", this.name);
        };
    }

    console.log("\n======== - 6.1 Instance Pets's class ========");
    const cat = new Pet("Whiskers");
    cat.speak();
    cat.shout();

    console.log("\n======== - 6.2 References class functions ========");
    const catSpeak = Pet.speak;
    //catSpeak(); //Runtime error not a function
    console.log(" //catSpeak(); //Runtime error not a function");

    const catShout = Pet.shout;
    //catShout(); //Runtime error not a function
    console.log(" //catShout(); //Runtime error not a function");

    console.log("\n======== 7. bind / call / apply ========");
    function greet() {
        console.log("Greeted:", this.name);
    }

    const person = { name: "Alice" };

    greet(); // No context -- Undefined /no context
    greet.call(person);  // Call 
    greet.apply(person); // Apply
    const bound = greet.bind(person);
    bound();             // Bound

    console.log("\n======== 8. Event Handler Simulation ========");
    console.log("Can't simulate browser DOM in Node, but here's how it behaves:");
    console.log(`
    // Normal function:
    btn.addEventListener("click", function () {
    console.log(this); // 👉 the button
    });

    // Arrow function:
    btn.addEventListener("click", () => {
    console.log(this); // 👉 outer scope, NOT the button
    });
    `);  
    }

Main();