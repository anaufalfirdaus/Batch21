const mySet = new Set()

mySet.add('naufal');
mySet.add(1);
mySet.add('firdaus');
mySet.add('naufal');

console.log(mySet);

const myName = new Set (['dian','naufal','firdaus'])

console.log(myName);

const myObj = new Map()
 myObj.set(1,'indomie')
 myObj.set(2,'sarimi')
 myObj.set(1,'sedaap')

console.log(myObj);

const myObj1 = new Map ([
    [1,'indomie'],
    [2,'sarimi'],
    [1,'Sedaap']
])
console.log(myObj1);

myObj1.delete(1)

console.log(myObj1);