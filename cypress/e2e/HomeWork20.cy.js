/// <reference types="cypress" />

describe.only('example hillel auto', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('Sign up').click();
    });
    // tests with field "Name"
    it('Name is required', () => {
        cy.get('input[name="name"]').click();
        cy.get('input[name="lastName"]').click();
        cy.contains('Name required').should('be.visible');
    });

    it('Name must be 2-20 characters long', () => {
        cy.get('input[name="name"]').type('A').blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
    });

    it('Name is invalid', () => {
        cy.get('input[name="name"]').type('2пппаи265+').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains('Name is invalid').should('be.visible');
    });

    it('Border color red', () => {
        cy.get('input[name="name"]').type('2пппаи265+').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains('Name is invalid').should('be.visible');
        cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    // tests with field "Last Name"
    it('Last Name is required', () => {
        cy.get('input[name="lastName"]').click();
        cy.get('input[name="name"]').click();
        cy.contains('Last name required').should('be.visible');
    });

    it('Last Name must be 2-20 characters long', () => {
        cy.get('input[name="lastName"]').type('A').blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
    });

    it('Last Name is invalid', () => {
        cy.get('input[name="lastName"]').type('2пппаи265+').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains('Last name is invalid').should('be.visible');
    });

    it('Border color red', () => {
        cy.get('input[name="lastName"]').type('2пппаи265+').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains('Last name is invalid').should('be.visible');
        cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    // tests with field "email"
    it('Email is incorrect', () => {
        cy.get('input[name="email"]').type('2пппаи265+').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains('Email is incorrect').should('be.visible');
    });

    it('Email required', () => {
        cy.get('input[name="email"]').click();
        cy.get('input[name="lastName"]').click();
        cy.contains('Email required').should('be.visible');
    });

    it('Border color red', () => {
        cy.get('input[name="email"]').click();
        cy.get('input[name="lastName"]').click();
        cy.contains('Email required').should('be.visible');
        cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
    // tests with field "Password"

    it('Password 8-15,1 small, 1 capital, 1 integer', () => {
        cy.get('input[name="password"]').type('A1235gg').blur();
        cy.get('input[name="lastName"]').click();
        cy.contains(
            'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
        ).should('be.visible');
    });

    it('Password required', () => {
        cy.get('input[name="password"]').click();
        cy.get('input[name="lastName"]').click();
        cy.contains('Password required').should('be.visible');
    });

    it('Border color red', () => {
        cy.get('input[name="password"]').click();
        cy.get('input[name="lastName"]').click();
        cy.contains('Password required').should('be.visible');
        cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    // tests with field "Re-enter Password"
    it('Validate Re-enter password field', () => {
        cy.get('input[name="password"]').type('ValidPass1');
        cy.get('input[name="repeatPassword"]').type('OtherPass1').blur();
        cy.contains('Passwords do not match').should('be.visible');

        cy.get('input[name="repeatPassword"]').clear().type('ValidPass1').blur();
        cy.contains('Passwords do not match').should('not.exist');
    });

    it('Border color red', () => {
        cy.get('input[name="password"]').type('ValidPass1');
        cy.get('input[name="repeatPassword"]').type('OtherPass1').blur();
        cy.get('input[name="repeatPassword"]').should(
            'have.css',
            'border-color',
            'rgb(220, 53, 69)',
        );
    });

    // tests with field "Register button"
    it('Should register new user successfully with valid data', () => {
        const uniqueEmail = `tanyazdorenkoo+${Date.now()}@gmail.com`;

        cy.get('input[name="name"]').type('Tetiana');
        cy.get('input[name="lastName"]').type('Zdorenko');
        cy.get('input[name="email"]').type(uniqueEmail);
        cy.get('input[name="password"]').type('ValidPass1');
        cy.get('input[name="repeatPassword"]').type('ValidPass1');

        cy.contains('button', 'Register').click();

        cy.contains('Garage').should('be.visible');
    });
});
