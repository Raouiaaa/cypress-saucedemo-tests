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

    login(username, password){
        this.fillUsername(username);
        this.fillPassword(password);
        this.clickLoginButton();
    }
}

export default new LoginPage();