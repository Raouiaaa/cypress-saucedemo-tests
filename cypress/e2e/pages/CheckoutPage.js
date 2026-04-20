import selectors from "../locators/selectors";

class CheckoutPage {
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
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillPostalCode(postalCode);
        this.clickContinueButton();
    }
}

export default new CheckoutPage();