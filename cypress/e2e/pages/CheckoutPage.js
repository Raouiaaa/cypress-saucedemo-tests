import selectors from "../locators/selectors";
import {URLS} from "../constants/constants";

class CheckoutPage {
    verifyCheckoutPage() {
        cy.url().should('include', URLS.checkoutStepOneUrl);
        cy.get(selectors.firstNameCheckout).should('be.visible');
    }
    fillFirstName(firstName) {
        cy.get(selectors.firstNameCheckout).type(firstName);
    }

    fillLastName(lastName){
        cy.get(selectors.lastNameCheckout).type(lastName);
    }

    fillPostalCode(postalCode){
        cy.get(selectors.postalCode).type(postalCode);
    }

    clickContinueButton() {
        cy.get(selectors.continueCheckoutButton).click();
    }

    checkout(firstName, lastName, postalCode){
        if (firstName) {
            this.fillFirstName(firstName);
        }
        if (lastName) {
            this.fillLastName(lastName);
        }
        if (postalCode) {
            this.fillPostalCode(postalCode);
        }
        this.clickContinueButton();
    }

    getErrorMessage() {
        return cy.get(selectors.errorMessage);
    }
}

export default new CheckoutPage();