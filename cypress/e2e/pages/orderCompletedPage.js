import selectors from "../locators/selectors";

class OrderCompletedPage {
    verifyOrderCompletedPage() {
        cy.url().should('include', selectors.checkoutCompletedUrl);
        cy.contains(selectors.checkoutCompletedTitle).should('be.visible');
        cy.get(selectors.thankingPhrase).should('be.visible');
    }
}

export default new OrderCompletedPage();