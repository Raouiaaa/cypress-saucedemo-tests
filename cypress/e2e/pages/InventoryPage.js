import selectors from "../locators/selectors";
import {URLS, PRODUCTS} from "../constants/constants";

class InventoryPage {
    verifyInventoryPage() {
        cy.url().should('include', URLS.inventoryUrl);
        cy.get(selectors.inventoryList).should('be.visible');
    }

    addToCart() {
        cy.contains(PRODUCTS.bikeLight).click();
    }
}

export default new InventoryPage();