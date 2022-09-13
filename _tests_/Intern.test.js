const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("Should set School name  when initiated", () => {
            const sName = "Wisconsin";
            const obj = new Intern(sName,"James",10,"James10@gmail.com");

            expect(obj.school).toEqual(sName);
        });

    });
    describe("getRole", () => {
        it("Should get Role when called", () => {
            const sName = "Wisconsin";
            const obj = new Intern(sName,"James",10,"James10@gmail.com");

            expect(obj.getRole()).toEqual("Intern");
        });

    });
    describe("getSchool", () => {
        it("Should get school when called", () => {
            const sName = "Wisconsin";
            const obj = new Intern(sName,"James",10,"James10@gmail.com");

            expect(obj.getSchool()).toEqual(sName);
        });

    });
});