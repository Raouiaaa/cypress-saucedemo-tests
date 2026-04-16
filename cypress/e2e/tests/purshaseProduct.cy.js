import loginPage from "../pages/loginPage";


describe("Purchase Product", () => {
    it("should be able to purchase a product", () => {
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");

    }) 
})
