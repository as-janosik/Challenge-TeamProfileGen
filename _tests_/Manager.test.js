const Manager = require("../lib/Manager");


describe("Manager", () => {
    describe("Init", () => {
        it("Should set Office Number when initiated", () => {
            const offNum = 891;
            const obj = new Manager(offNum,"James",10,"James10@gmail.com");

            expect(obj.officeNumber).toEqual(offNum);
        });

    });
    describe("GetRole", () => {
        it("Should get role of Manager", () => {
            const offNum = 891;
            const obj = new Manager(offNum,"James",10,"James10@gmail.com");

            expect(obj.getRole()).toEqual("Manager");
        });

    });
});