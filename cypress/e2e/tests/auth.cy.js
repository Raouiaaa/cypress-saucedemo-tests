import loginPage from "../pages/loginPage"

describe("verify authentication", () => {
    it("login with wrong credentials", () => {
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
})