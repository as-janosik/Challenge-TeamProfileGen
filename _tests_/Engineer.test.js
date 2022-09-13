const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Init", () => {
        it("Should set Github when initiated", () => {
            const ghub = "as-janosik";
            const obj = new Engineer(ghub,"James",10,"James10@gmail.com");

            expect(obj.github).toEqual(ghub);
        });

    });
    describe("getGithub", () => {
        it("Should get Github when called", () => {
            const ghub = "as-janosik";
            const obj = new Engineer(ghub,"James",10,"James10@gmail.com");

            expect(obj.getGithub()).toEqual(ghub);
        });

    });
    describe("GetRole", () => {
        it("Should get role of Engineer", () => {
            const ghub = "as-janosik";
            const obj = new Engineer(ghub,"James",10,"James10@gmail.com");

            expect(obj.getRole()).toEqual("Engineer");
        });

    });
});