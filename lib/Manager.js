const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber, fname, id, email) {
        super(fname, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }

}
module.exports = Manager;

