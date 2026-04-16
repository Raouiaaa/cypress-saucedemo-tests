import selectors from "../locators/selectors";

class InventoryPage {
    verifyInventoryPage() {
        cy.url().should('include', selectors.inventoryUrl);
    }

    addToCart() {
        cy.contains(selectors.bikeLight).click();
    }
}

export default new InventoryPage();