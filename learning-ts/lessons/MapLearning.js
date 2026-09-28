//CREATE
const myMap = new Map([
    ['113', 'Police'],
    ['114', 'Hospital'],
    ['115', 'Fire'],
    ['116', 'Other']

])

//READ
console.log('my Map:', myMap);

for (const key of myMap.keys()) {
    console.log(`${key} : ${myMap.get(key)}`);    
}

for (const value of myMap.values()) {
    console.log(value);
}

//UPDATE
myMap.set('116', '...');
console.log('my Map:', myMap);

//DELETE
myMap.delete('116');
console.log('my Map:', myMap);