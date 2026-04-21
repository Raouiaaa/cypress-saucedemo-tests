import selectors from "../locators/selectors";
import {URLS, PRODUCTS} from "../constants/constants";

class InventoryPage {
    verifyInventoryPage() {
        cy.url().should('include', URLS.inventoryUrl);
    }

    addToCart() {
        cy.contains(PRODUCTS.bikeLight).click();
    }
}

export default new InventoryPage();