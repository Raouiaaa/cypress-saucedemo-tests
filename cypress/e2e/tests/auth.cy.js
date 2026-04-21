import loginPage from "../pages/loginPage"

describe("Authentication", () => {
    it("should not login with invalid credentials", () => {
        loginPage.visit();
        loginPage.login("wrongUser", "wrongPwd");
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    })

    it("should show error when username and password are empty", () => {
        loginPage.visit();
        loginPage.login("", "");
        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Username is required');
    })

    it("should show error when username is empty", () => {
        loginPage.visit();
        loginPage.login("", "secret_sauce");

        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Username is required');
    })

    it("should show error when password is empty", () => {
        loginPage.visit();
        loginPage.login("standard_user", "");

        loginPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Epic sadface: Password is required');
    });
})