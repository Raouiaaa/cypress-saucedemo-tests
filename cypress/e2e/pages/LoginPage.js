import selectors from "../locators/selectors";

class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }

    fillUsername(username){
        cy.get(selectors.username).type(username);
    }

    fillPassword(password){
        cy.get(selectors.password).type(password);
    }

    clickLoginButton(){
        cy.get(selectors.loginButton).click();
    }

    // Cypress does not allow typing empty strings, so login() handles empty inputs conditionally
    login(username, password){
        if(username){
            this.fillUsername(username);
        }
        if(password){
            this.fillPassword(password);
        }
        this.clickLoginButton();
    }

    getErrorMessage() {
        return cy.get(selectors.loginErrorMessage);
    }
}

export default new LoginPage();