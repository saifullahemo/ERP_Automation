import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  it('should be created successfully', () => {
      
      cy.visit('/');
    const randomString = Math.random().toString(36).substring(7);
    const baseBank = "Bangladesh Bank"
    const bankName = `${randomString}_${baseBank}`;
    cy.wait(3000);



    // Click on Bank
    cy.get('.navigation > :nth-child(8) > .d-flex', 'Bank').click();
    cy.wait(3000);

    cy.get('.col-md-8 > .d-flex > .btn','Add Bank').click();
    cy.wait(3000);

    cy.get('#__BVID__309 > .col > #h-bank-name').type(bankName)
  })

});