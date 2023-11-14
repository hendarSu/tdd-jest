// user input name(100), email dan password(min8).

const User = require("./registration.service");


// test case - positive
// 1. inputan name dengan huruf tanpa simbol.
// 2. inputan name dengan huruf minimal 3 kaata
// 3. inputan name dengan huruf 10 karakter

// Test Case - Negative
// 1. inputan name dengan huruf minimal 3 kata

const nameMockNormal = "Hendar";
const nameMock3Char = "Hen";
const nameMock2Char = "He";

describe("Registration Service", () => {
    it("[+] Name : inputan name dengan huruf tanpa simbol.", () => {
        const user = new User();
        user.setName(nameMockNormal);

        const name = user.getName();
        expect(name).toEqual(nameMockNormal);

        const id = user.store();
        user.remove(id);
    })

    it("[+] Name : inputan name dengan huruf minimal 3 kaata", () => {
        const user = new User();
        const res = user.setName(nameMock3Char);

        expect(res).not.toEqual("Error inputan kurang dari 3");

        const name = user.getName();
        const countName = name?.length;
        expect(name).toEqual(nameMock3Char);
        expect(true).toEqual(countName >= 3);
    })

    it("[-] Name : inputan name dengan huruf minimal 3 kaata", () => {
        const user = new User();
        const res = user.setName(nameMock2Char);

        expect(res).toEqual("Error inputan kurang dari 3");
    })
})