let angka = 10

let angka1:string = ' string'

let data = {
    firstname : 'john',
    age : 14
}

let data1 : {
    firstname : string;
    age : string
} = {
    firstname : 'john',
    age : '15'
}

let array : any [] = ['1','2',3,true]

let newArray : [number,string,boolean,number?] = [1,'2',true]

enum month {
    jan,
    feb,
    mar
}

let add : (x:number, y:number) => any

add = function (x:number,y:number) {
    
}

add = function(x:number,y:number):number {
 return y + x
}

const bilangan : (x:number, y:number) => number = function (x:number,y:number) {
    return x + y
}


function newData(nama:string, age?:number):string {
    return `hai saya ${nama}`
}

console.log(newData('Naufal','strin'));


function terserah(...name:(string|number)[]) {
    
}