const phone = 'tlp:'+'0851213123';
console.log(phone);

console.log(phone.length);

console.log(phone.charAt(3));
console.log(phone.startsWith('t'));
console.log(phone.endsWith('3'));
console.log(phone.includes('p'));
console.log(phone.indexOf('3'));
console.log(phone.substr(4,5));

const address = `Jl.Danau Limboto no.20,bogor,${phone}`
console.log(address);

console.log(address.replace('bogor','bandung'));
console.log(address.toLocaleLowerCase());
console.log(address.toLocaleUpperCase());
console.log(address,phone);