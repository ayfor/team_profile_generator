const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    describe("Initialization", ()=>{
        it("Should return the assigned name property with name property", ()=>{
            //Assign text
            const testName = "Name";

            //Act
            const obj = new Engineer(testName, 0, "email@email.com");

            //Assert
            expect(obj.name).toEqual(testName);
        });
        it("Should return the assigned id property with id property", ()=>{
            //Assign text
            const testId = 3;

            //Act
            const obj = new Engineer("name", testId, "email@email.com");

            //Assert
            expect(obj.id).toEqual(testId);
        });
        it("Should return the assigned email property with email property", ()=>{
            //Assign text
            const testEmail = "email@email.com";

            //Act
            const obj = new Engineer("name", 0, testEmail);

            //Assert
            expect(obj.email).toEqual(testEmail);
        });
        it("Should return the assigned github username property with github property", ()=>{
            //Assign text
            const testGithub = "username";

            //Act
            const obj = new Engineer("name", 0, "email@email.com", testGithub);

            //Assert
            expect(obj.github).toEqual(testGithub);
        });
    });

    describe("Behaviour", ()=> {
       it("Should return the assigned name property with getName", ()=>{
            //Assign text
            const testName = "Name";

            //Act
            const obj = new Engineer(testName, 0, "email@email.com");

            //Assert
            expect(obj.getName()).toEqual(testName);
        });
        it("Should return the assigned id property with getId", ()=>{
            //Assign text
            const testId = 3;

            //Act
            const obj = new Engineer("name", testId, "email@email.com");

            //Assert
            expect(obj.getId()).toEqual(testId);
        });
        it("Should return the assigned email property with getEmail", ()=>{
            //Assign text
            const testEmail = "email@email.com";

            //Act
            const obj = new Engineer("name", 0, testEmail);

            //Assert
            expect(obj.getEmail()).toEqual(testEmail);
        });
        it("Should return the assigned github username property with getGithub ", ()=>{
            //Assign text
            const testGithub = "username";

            //Act
            const obj = new Engineer("name", 0, "email@email.com", testGithub);

            //Assert
            expect(obj.getGithub()).toEqual(testGithub);
        });
        it("Should return 'Engineer' with getRole", ()=>{
            
            const obj = new Engineer("name", 0, "email");

            //Assert
            expect(obj.getRole()).toEqual("Engineer");
        });
    });
    
    
    


});