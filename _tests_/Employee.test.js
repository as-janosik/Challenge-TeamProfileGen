const employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it("Should set name to Jason when initiated", () => {
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            expect(obj.fname).toEqual(fname);
        });
        it("Should set id to 10 when Init", () => {
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            expect(obj.id).toEqual(id);
        });
        it("Should set email to Jason10@gmail.com when Init", () => {
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            expect(obj.email).toEqual(email);
        });
    });
    describe("getName",()=>{
        it("should get name after INIT",()=>{
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            //const objN = obj.getName();
            expect(obj.getName()).toEqual(fname);
        });
    });
    describe("getID",()=>{
        it("should get ID after INIT",()=>{
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            //const objN = obj.getName();
            expect(obj.getId()).toEqual(id);
        });
    });
    describe("getEmail",()=>{
        it("should get Email after INIT",()=>{
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            //const objN = obj.getName();
            expect(obj.getEmail()).toEqual(email);
        });
    });
    describe("getRole",()=>{
        it("should get role after INIT",()=>{
            const fname = "Jason";
            const id = 10;
            const email = "Jason10@gmail.com";
            const obj = new employee(fname, id, email);
            //const objN = obj.getName();
            expect(obj.getRole()).toEqual('Employee');
        });
    });
});