class RegistrationPagePOM {
    get usernameInput() {
        return cy.get('#signupName');
    }

    get userlastnameInput() {
        return cy.get('#signupLastName');
    }

    get useremailInput() {
        return cy.get('#signupEmail');
    }

    get passwordInput() {
        return cy.get('#signupPassword');
    }

    get repasswordInput() {
        return cy.get('#signupRepeatPassword');
    }

    get loginButton() {
        return cy.contains('button', 'Register');
    }

    clickLoginButton() {
        this.loginButton.click();
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

    typeRePassword(repassword) {
        this.repasswordInput.type(repassword);
        return this;
    }

    clickLoginButton() {
        this.loginButton.contains('Register').click();
    }

    verifySuccessfulSignup(username) {
        cy.contains(`Welcome, ${username}`).should('be.visible');
        return this;
    }
}

export default new RegistrationPagePOM();
