import loginPage from '../support/pages/LoginPage';

describe.only('Login / Signup Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.contains('Sign In').click();
        cy.log('ENV useremail:', Cypress.env('useremail'));
        cy.log('ENV password:', Cypress.env('password'));
    });

    it('should log in successfully with valid credentials', () => {
        loginPage
            .typeUseremail(Cypress.env('useremail'))
            .typePassword(Cypress.env('password'))
            .clickLoginButton({ timeout: 5000 });

        cy.contains('Garage').should('be.visible').click();
        cy.contains('Add car').should('be.visible').click();

        cy.get('#addCarBrand').select('Porsche');
        cy.get('#addCarModel').select('Panamera');
        cy.get('#addCarMileage').type('20000');
        cy.contains('button', 'Add').click({ force: true });

        // cy.get('ngb-modal-window', { timeout: 10000 }).should('be.visible');
        // cy.get('.btn.btn-white.btn-sidebar.sidebar.btn').first().click();
        cy.contains('Add fuel expense').should('be.visible').click();
        cy.get('#addExpenseMileage').type('20000');
        cy.get('#addExpenseLiters').type('60');
        cy.get('#addExpenseTotalCost').type('2000');
        cy.get('button[type="submit"]').click();

        cy.contains('20000').should('exist');
    });
});
