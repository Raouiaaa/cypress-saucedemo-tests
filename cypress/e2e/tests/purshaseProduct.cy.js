import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/InventoryPage";
import productPage from "../pages/ProductPage";

describe("Purchase Product", () => {
    it("should be able to purchase a product", () => {
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();   
        productPage.addToCart();
        productPage.goToCart();
        productPage.goToCheckout();
    }) 


    it("should be able to add a product then remove it", () => {
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();   
        productPage.addToCart();
        productPage.goToCart();
        productPage.removeFromCart();
    }) 
})
