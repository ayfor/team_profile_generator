const Intern = require("../lib/Intern");

describe("Intern", () => {

    describe("Initialization", ()=>{
        it("Should return the assigned name property with name property", ()=>{
            //Assign text
            const testName = "Name";

            //Act
            const obj = new Intern(testName, 0, "email@email.com","school");

            //Assert
            expect(obj.name).toEqual(testName);
        });
        it("Should return the assigned id property with id property", ()=>{
            //Assign text
            const testId = 3;

            //Act
            const obj = new Intern("name", testId, "email@email.com","school");

            //Assert
            expect(obj.id).toEqual(testId);
        });
        it("Should return the assigned email property with email property", ()=>{
            //Assign text
            const testEmail = "email@email.com";

            //Act
            const obj = new Intern("name", 0, testEmail,"school");

            //Assert
            expect(obj.email).toEqual(testEmail);
        });
        it("Should return the assigned github username property with github property", ()=>{
            //Assign text
            const testSchool = "username";

            //Act
            const obj = new Intern("name", 0, "email@email.com", testSchool);

            //Assert
            expect(obj.school).toEqual(testSchool);
        });
    });

    describe("Behaviour", ()=> {
       it("Should return the assigned name property with getName", ()=>{
            //Assign text
            const testName = "Name";

            //Act
            const obj = new Intern(testName, 0, "email@email.com","school");

            //Assert
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return the assigned id property with getId", ()=>{
            //Assign text
            const testId = 3;

            //Act
            const obj = new Intern("name", testId, "email@email.com","school");

            //Assert
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return the assigned email property with getEmail", ()=>{
            //Assign text
            const testEmail = "email@email.com";

            //Act
            const obj = new Intern("name", 0, testEmail,"school");

            //Assert
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return the assigned school name property with getSchool ", ()=>{
            //Assign text
            const testSchool = "Carleton University";

            //Act
            const obj = new Intern("name", 0, "email@email.com", testSchool);

            //Assert
            expect(obj.getSchool()).toEqual(testSchool);
        });
        it("Should return 'Intern' with getRole", ()=>{
            
            const obj = new Intern("name", 0, "email","school");

            //Assert
            expect(obj.getRole()).toEqual("Intern");
        });
    });
    
    
    


});