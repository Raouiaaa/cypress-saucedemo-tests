import selectors from "../locators/selectors";

class OverviewPage {
    verifyOverviewPage(){
        cy.contains(selectors.checkoutPageTitle).should('be.visible');
        cy.get(selectors.paymentInfo).should('be.visible');
        cy.get(selectors.shippingInfo).should('be.visible');
    }

    purshaseProduct(){
        cy.get(selectors.finishButton).click();
    }

}

export default new OverviewPage();