class LoginPage {
    get usernameInput() {
        return cy.get('#username');
    }

    get userlastnameInput() {
        return cy.get('#userlastname');
    }

    get useremailInput() {
        return cy.get('#useremail');
    }

    get passwordInput() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    typeUsername(username) {
        this.usernameInput.type(username);
        return this;
    }

    typeUserlastname(userlastname) {
        this.userlastnameInput.type(userlastname);
        return this;
    }

    typeUseremail(useremail) {
        this.useremailInput.type(useremail);
        return this;
    }

    typePassword(password) {
        this.passwordInput.type(password);
        return this;
    }

    clickLoginButton() {
        this.loginButton.click();
        return this;
    }
}

export default new LoginPage();
