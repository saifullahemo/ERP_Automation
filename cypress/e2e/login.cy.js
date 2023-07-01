import './commands'

describe('Login', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should be authenticated across tests', () => {
      cy.url().should('eq', '/')
  });
});
