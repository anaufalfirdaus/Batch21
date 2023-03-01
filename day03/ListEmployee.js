import Employee,{Contract} from './Employee.js';

const emp1 = new Employee('dian','cahya',4500)
const contract1 = new Contract('danis','hari',3000,[],'Contract')

contract1.extratime = 500
emp1.skill = ['postgres','java']

const listEmployee = {emp1,contract1}

console.log(emp1.ToString());
console.log(contract1.toString());