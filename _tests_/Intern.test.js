const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("Should set School name  when initiated", () => {
            const sName = "Wisconsin";
            const obj = new Intern(sName,"James",10,"James10@gmail.com");
            expect(obj.school).toEqual(sName);
        });

    });
});