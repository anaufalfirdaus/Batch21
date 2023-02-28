const number1 = [1,2,3,4]
const number2 = [10,11,12,13]

console.log(...number1);

console.log(...number1,...number2);

const concat = [...number1,7,8,9,...number2]

console.log(concat);

console.log(...concat);