const foods = ['sup','pizza','pasta']
console.log(foods);

if (Array.isArray(foods)) {
    console.log('benar');
}

console.log(foods[1]);

for (let index = 0; index < foods.length; index++) {
    console.log(foods[index]);
}

foods.push('sate');
console.log(foods);
foods.pop()
console.log(foods);
foods.unshift('indomie')
console.log(foods);
foods.shift()
console.log(foods);
foods.unshift('indomie')
foods.sort()
console.log(foods);
foods.reverse()
console.log(foods);

const food1=['snack','bakso']

const concat = foods.concat(food1)

console.log(concat);

console.log(concat.slice(3,6));

console.log(concat);

console.log(concat.splice(3,2));

console.log(concat);
