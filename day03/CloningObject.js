const employee = {
    firstname : 'John',
    lastname : 'Doe',
    portofolio : {
        ipk : 3.4,
        skill : ['java','oracle']
    }
}

const {firstname, lastname, portofolio:{skill},portofolio:{ipk}} = employee
console.log();