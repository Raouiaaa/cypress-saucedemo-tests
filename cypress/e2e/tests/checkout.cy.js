import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/InventoryPage";
import productPage from "../pages/ProductPage";
import checkoutPage from "../pages/CheckoutPage";

describe("Checkout", () => {
    it("should allow checkout with empty cart (current behavior)", () => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");
        inventoryPage.verifyInventoryPage();

        productPage.goToCart();
        productPage.goToCheckout();

        checkoutPage.verifyCheckoutPage();
    });

    it("should show error when checkout fields are empty", () => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();
        productPage.addToCart();
        productPage.goToCart();
        productPage.goToCheckout();

        checkoutPage.checkout("", "", "");

        checkoutPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Error: First Name is required');
    });

    it("should show error when first name is empty", () => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();
        productPage.addToCart();
        productPage.goToCart();
        productPage.goToCheckout();

        checkoutPage.checkout("", "last", "1234");

        checkoutPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Error: First Name is required');
    });

    it("should show error when last name is empty", () => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();
        productPage.addToCart();
        productPage.goToCart();
        productPage.goToCheckout();

        checkoutPage.checkout("first", "", "1234");

        checkoutPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Error: Last Name is required');
    });

    it("should show error when zip code is empty", () => {
        loginPage.visit();
        loginPage.login("standard_user", "secret_sauce");

        inventoryPage.verifyInventoryPage();
        inventoryPage.addToCart();

        productPage.verifyProductPage();
        productPage.addToCart();
        productPage.goToCart();
        productPage.goToCheckout();

        checkoutPage.checkout("first", "last", "");

        checkoutPage.getErrorMessage()
            .should('be.visible')
            .and('contain', 'Error: Postal Code is required');
    });
});