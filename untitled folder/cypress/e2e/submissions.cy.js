import './commands'

describe('Data Upload Test', () => {
    beforeEach(() => {
      // Reuse the existing login session
      cy.login();
      // cy.session('loginSession_*');
      cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/submissions#0')

    });

    it('submissions workflow', () => {
        cy.get('.nav-items-group > .top > .ps-0 > :nth-child(3)').click();
        cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/submissions');

        cy.get('.-mb-px > :nth-child(2)').click();
        cy.get('#dropdownSearchButton').click();
        cy.get('.pt-8 > :nth-child(1) > .flex').click()
        // cy.get(':nth-child(2) > .css-xniutv > .space-x-10 > .inline-block > .box-content').click();

        // cy.get('.text-slate-500 > div > .block').type('Hello stud');

        // cy.get('.btn-primary').click();

        cy.get('.MuiTableContainer-root').contains('Shahmirpur').click();
        cy.wait(6000)
        cy.get('.w-100 > :nth-child(1) > .inline-block').click();

      });

    });
  