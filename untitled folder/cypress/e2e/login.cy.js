import './commands'

describe('Login Test', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should be authenticated across tests', () => {
      cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/submissions#0')
  });
});
