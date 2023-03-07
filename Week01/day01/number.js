const n ='187.33'
console.log(parseInt(n));
console.log(parseFloat(n));

const a = '123'
console.log(Number(a));

const round = 123.55678
console.log(round.toFixed());
console.log(round.toExponential(2));

let currency = new Intl.NumberFormat('US',{style:'currency',currency:'USD'}).format(round)
console.log(currency);

console.log(isNaN('asd'));
console.log(isNaN('123'));