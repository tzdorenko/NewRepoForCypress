import RegistrationPagePOM from '../support/pages/RegistrationPage';

describe.only('Login / Signup Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Sign up').click();
        cy.log('ENV username:', Cypress.env('username'));
    });

    it('should sign up successfully with valid credentials', () => {
        loginPage
            .typeUsername(Cypress.env('username'))
            .typeUserlastname(Cypress.env('userlastname'))
            .typeUseremail(Cypress.env('useremail'))
            .typePassword(Cypress.env('password'))
            .typeRePassword(Cypress.env('repassword'))
            .clickLoginButton();
        // .verifySuccessfulSignup(Cypress.env('username'));
    });
});
