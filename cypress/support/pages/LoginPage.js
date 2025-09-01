class LoginPage {
    get useremailInput() {
        return cy.get('#signinEmail');
    }

    get passwordInput() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.contains('button', 'Login');
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
