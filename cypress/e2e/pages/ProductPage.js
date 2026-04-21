import selectors from "../locators/selectors";
import {PRODUCTS} from "../constants/constants";

class ProductPage {
    verifyProductPage() {
        cy.contains(PRODUCTS.bikeLight).should('be.visible');
    }

    addToCart() {
        cy.get(selectors.productDetailsAddToCartButton).click();
    }

    goToCart() {
        cy.get(selectors.shoppingCartLink).click();
    }

    removeFromCart() {
        cy.get(selectors.removeButton).click();
    }

    goToCheckout() {
        cy.get(selectors.checkoutButton).click();
    }

    verifyProductRemoved() {
        cy.contains(PRODUCTS.bikeLight).should('not.exist');
        cy.get(selectors.shoppingCartLink).click();
        cy.contains(PRODUCTS.bikeLight).should('not.exist');
    }
}

export default new ProductPage(); 