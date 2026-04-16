// first test with no POM implemnted
describe('test demo', () => {
    it('test add and remove item from cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get("#user-name").type("standard_user");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("#login-button").click();
        cy.url().should('include', '/inventory.html');
        cy.contains("Sauce Labs Bike Light").click();
        cy.get("#add-to-cart").click();
        cy.get("[data-test='shopping-cart-link']").click();
        cy.contains("Sauce Labs Bike Light").should('be.visible')
        cy.get("[data-test='remove-sauce-labs-bike-light']").click();
        cy.contains("Sauce Labs Bike Light").should('not.exist')
    });

}); 