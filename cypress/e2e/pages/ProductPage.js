import selectors from "../locators/selectors";

class ProductPage {
    verifyProductPage() {
        cy.contains(selectors.bikeLight).should('be.visible');
    }

    addToCart() {
        cy.get(selectors.addToCart).click();
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
}

export default new ProductPage(); 