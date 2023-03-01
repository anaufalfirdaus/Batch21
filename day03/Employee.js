export default class Employee {
    static totalEmployee = 0

    constructor (firstname,lastname,salary=0,skill=[]) {
        this.firstname = firstname
        this.lastname = lastname
        this.salary = salary
        this.skill = skill
        Employee.totalEmployee++
    }
    ToString(){
        return `${this.firstname} ${this.lastname}, Gaji = Rp. ${this.salary}`
    }
}
class Contract extends Employee {

    constructor (firstname,lastname,salary=0,skill=[],status,extratime){
        super(firstname,lastname,salary,skill)
        this.status = status
        this.extratime = extratime
    }
    toString(){
        return super.ToString()+` Status ${this.status}, Extra ${this.extratime}`
    }
}
export {Contract}