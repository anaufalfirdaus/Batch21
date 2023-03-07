const today = new Date()
console.log(today);

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

const date = new Date('2022/05/05')
console.log(date);

const date1 = new Date(2022,5,5)
console.log(date1);

const format = new Intl.DateTimeFormat('id-ID').format(today)
console.log(format);

console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());