import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/InventoryPage";
import productPage from "../pages/ProductPage";
import checkoutPage from "../pages/CheckoutPage";
import overviewPage from "../pages/OverviewPage";
import orderCompletedPage from "../pages/orderCompletedPage";

describe("Shopping Cart", () => {
    it("should add a product to cart and remove it successfully", () => {
        loginPage.visit();
        loginPage.login("standard_user","secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();   
        productPage.addToCart();
        productPage.goToCart();
        productPage.removeFromCart();
        productPage.verifyProductRemoved();
    }) 
})