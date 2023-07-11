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
    const baseAcc = "john doe"
    const accName = `${randomString}_${baseAcc}`
    const 
    cy.wait(3000);



    // Click on Bank
    cy.contains('.navigation > :nth-child(8) > .d-flex', 'Bank').click();
    cy.wait(3000);

    cy.contains('.col-md-8 > .d-flex > .btn','Add Bank').click();
    cy.wait(3000);

    cy.get('#h-bank-name').type(bankName)
    cy.get('#h-account-name').type()

  })

});