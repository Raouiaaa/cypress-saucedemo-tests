import loginPage from "../pages/loginPage"

describe("verify authentication", () => {
    it("login with wrong credentials", () => {
        loginPage.login("wrongUser", "wrongPwd")
        
    })
})