function varExample() {
    console.log("== var example ==");

    if (true) {
        var x = 10;
    }

    console.log("x with var:", x); // ✅ 10 (function-scoped, not block-scoped)

    var y = 5;
    var y = 20; // ✅ allowed to redeclare
    console.log("Redeclared y:", y); // 20
}

function letExample() {
    console.log("== let example ==");

    let a = 10;

    if (true) {
        let a = 15;
        console.log("a inside block:", a); // ✅ 15
    }

    // console.log(a); ❌ ReferenceError: a is not defined

        
    let b = 5;
    // let b = 10; ❌ SyntaxError: Identifier 'b' has already been declared

    b = 10; // ✅ Reassignment is fine
    console.log("a main block scope:", a);
    console.log("b reassigned:", b);
}

function constExample() {
    console.log("== const example ==");
    const pi = 3.1416;

    if (true) {
        const pi = 3.14;
        console.log("pi inside block:", pi); // ✅ 3.14
        // pi = 3.1416; ❌ TypeError: Assignment to constant variable.
    }

    const obj = { name: "Alice" };
    obj.name = "Bob"; // ✅ You can mutate object properties
    console.log("Mutated const object:", obj);
    console.log("Main body PI def:", pi);

    // const obj = {}; ❌ SyntaxError if already declared
}

function main() {
    varExample();
    letExample();
    constExample();
}

main();