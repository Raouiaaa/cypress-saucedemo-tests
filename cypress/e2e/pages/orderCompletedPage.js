import selectors from "../locators/selectors";
import {URLS} from "../constants/constants";

class OrderCompletedPage {
    verifyOrderCompletedPage() {
        cy.url().should('include', URLS.checkoutCompletedUrl);
        cy.contains(selectors.checkoutCompletedTitle).should('be.visible');
        cy.get(selectors.thankingPhrase).should('be.visible');
    }
}

export default new OrderCompletedPage();