export const setMapTest = () => {
    let setOne = new Set();
    setOne.add(1);
    setOne.add("2");
    setOne.add(4.5);
    setOne.add({"a":1, "b": "name"});
    console.log(setOne);
    let words = 'kasldkfjlasdognnxksldfjwoetjn';
    let wordsSplit = words.split("");
    let wordsSet = new Set(wordsSplit);
    console.log(wordsSet);

    let mapOne = new Map();
    let key1 = "string key";
    let key2 = {a: 'key'};
    let key3 = function() {};
    mapOne.set(key1, 'this is string key');
    mapOne.set(key2, 'this is object key');
    mapOne.set(key3, 'this is function key');
    console.log(mapOne);

    let numArr = [[1, 'one'], [2, 'two'], [3,'three']];
    let valMap = new Map(numArr);
    for (let [key,value] of valMap.entries()) {
        console.log(`${key} ---> ${value}`);
    }

    let str = 'lkadsnnckwoerjdskfg3iortwieotwer';
    let letters = new Map();
    for (let i=0; i<str.length; i++) {
        let letter = str[i];
        if (!letters.has(letter)) {
            letters.set(letter,1);
        } else {
            letters.set(letter, letters.get(letter) + 1);
        }
    }
    console.log(letters);

}

setMapTest();