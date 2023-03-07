const program = ['java','python','postgres','js','sql','oracle','postgres']

console.log(program.indexOf('postgres'));
console.log(program.lastIndexOf('postgres'));
console.log(program.includes('python'));

const num = [1,5,78,123,34,11]

console.log(program.filter(e => e.startsWith('pos')));

console.log(program.find(e => e.startsWith('pos')));

console.log(num.reduce((e,a) => e + a,0));

console.log(program.map(e => e));

