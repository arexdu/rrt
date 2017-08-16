function * Fabnaci () {
    let a = 1;
    let b = 1;
    let c = 0;
    while (true) {
        c = a + b;
        a = b;
        b = c;
        yield c;
    }
}

let FabnaciGen = Fabnaci();
console.log(FabnaciGen.next().value);
console.log(FabnaciGen.next().value);
console.log(FabnaciGen.next().value);
console.log(FabnaciGen.next().value);
console.log(FabnaciGen.next().value);

function* arrayIterator () {
    yield* arguments;
}
let arrayT = arrayIterator(1,2,3);
console.log(arrayT.next().value);
console.log(arrayT.next().value);
console.log(arrayT.next().value);
console.log(arrayT.next().value);
