//Function declaration
//Declaration will allow to call the function anyware
function addTraditional(a, b) {
    return a + b
};

//Defined function as const
//Expression (use const) function can only be called aftewards
const addDefinedFx = function (a, b) {
    return a + b;
}

//one line function
const add = (a, b) => a + b; 

const multiLine = (a, b) => {
    const result = a + b;
    return result + 0;
}

console.log('traditional -> ' + addTraditional(1,2))
console.log('addDefinedFx -> ' + addDefinedFx(1,2))
console.log('arrow fx add -> ' + add(1,2))
console.log('arrow fx add multiline -> ' + multiLine(1,2))

const ids = [1, 2, 3, 4, 5];

ids.forEach(id => {
    console.log('Value -> ' + id)
})

//rest operator "..." -> works similar as java VarArgs where the last arg is an array
const testFx = (fristArg, secondArg, ...varArg) => {
    console.log(fristArg);
    console.log(secondArg);
    console.log(varArg);
}

console.log('first run');
testFx("Marcos", "Joaquin", "Zeus", "Rocket", "Eros");

console.log('second run');
testFx("Marcos", "Joaquin", "Zeus");

console.log('third run');
testFx("Marcos", "Joaquin");

//Spread operator
const fruit = ["apple", "banana"];
const moreFruits = ["Pinapple", "Mango"];

const allFruits = [...fruit, ...moreFruits];
console.log(allFruits);

console.log([...allFruits, "Pitahaya"]);