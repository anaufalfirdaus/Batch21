//reguler function
function name() {
    return 'Hai Semua'
}
console.log(name());

function MyName(name){
    return `Hai Saya ${name}`
}
console.log(MyName('Naufal'));

function MyNames(name,name2){
    return `Hai Saya ${name} ${name2}`
}
console.log(MyNames('Firdaus','Naufal'));

//arrow function
const SayHai = () => {
    return 'Hai'
}

const SayName = (name) => {
    return `Hai Aku ${name}`
}

console.log(SayName('Naufal'));

//callback function
const SayHai1 = () => {
    console.log('Hai');
}

const SayName1 = (name) => {
    console.log(`saya ${name}`);
}

const all1 = (callBack) => {
    callBack(),
    SayName1('Naufal')
}
all1(SayHai1)

function all(callbackFunction){
    callbackFunction(),
    SayName1('Naufal')
}
all(SayHai1)

//Anonymous function
const allin = () => {
    setTimeout(function () {
        console.log('hai');
    },0)
}

allin()