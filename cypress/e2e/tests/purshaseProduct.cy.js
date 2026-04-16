import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/InventoryPage";

describe("Purchase Product", () => {
    it("should be able to purchase a product", () => {
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();
    }) 
})
