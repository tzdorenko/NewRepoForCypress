/// <reference types="cypress" />

describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});

describe.only('example hillel auto', () => {
    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    });
    // tests with buttons
    it('displays sign up btn by class', () => {
        cy.get('button.hero-descriptor_btn.btn.btn-primary').should('contain', 'Sign up').click();
    });

    it('find all buttons', () => {
        cy.get('.section.hero button', { timeout: 5000 });
    });

    it('find all btns and click each', () => {
        cy.get('button').each(($btn, index, $list) => {
            cy.wrap($btn); // Використовуємо force, щоб уникнути помилок при перекритті
            cy.log(`Clicked button ${index + 1}: ${$btn.text()}`);
        });
    });
    // footer tests

    it('checks facebook icon exists', () => {
        cy.get('.contacts_socials .socials_icon.icon.icon-facebook').should('exist');
    });

    it('find all social icons', () => {
        cy.get('.contacts_socials .socials_icon').each(($item, index) => {
            cy.wrap($item).should('be.visible').click();
        });
    });

    it('click last item', () => {
        cy.get(
            '.col-md-6.d-flex.flex-column.align-items-center.align-items-md-end.justify-content-md-end.mb-2.mt-3.mt-md-0',
        )
            .last()
            .click({ force: true });
    });

    it('http link ithillel.ua is correct on the home page', () => {
        cy.get('.contacts_link.display-4')
            .should('contain.text', 'ithillel.ua')
            .and('have.attr', 'href', 'https://ithillel.ua');
    });

    it('email link is correct on the home page', () => {
        cy.get('.contacts_link.h4')
            .should('contain.text', 'support@ithillel.ua')
            .and('have.attr', 'href', 'mailto:developer@ithillel.ua');
    });

    it('should have correct mailto link and text', () => {
        cy.get('a.contacts_link.h4')
            .should('have.attr', 'href', 'mailto:developer@ithillel.ua')
            .and('contain.text', 'support@ithillel.ua');
    });
});
