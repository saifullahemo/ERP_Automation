import './commands'

describe('Data Upload Test', () => {
    beforeEach(() => {
      // Reuse the existing login session
      cy.login();
      // cy.session('loginSession_*');
      cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/submissions#0')

    });
  
    it('should upload data', () => {
      // Perform data upload actions here

      cy.get('.nav-items-group > .top > .ps-0 > :nth-child(2)').click();
      cy.url().should('eq', Cypress.config().baseUrl + '/dashboard/upload-data/new');

      cy.get('#dropdownSearchButton').click();

      cy.get('.pt-8 > :nth-child(2)').click();

      cy.get(':nth-child(2) > .dropdown-single > #dropdownSearchButton').click(); 

      cy.get(':nth-child(2) > .dropdown-single > #ddFilter > .pt-8 > :nth-child(1)').click();

      
      const fileName = 'test.xlsx'; // Provide the name of your local file

        // Attach the file using the .attachFile() command from cypress-file-upload
        cy.get('.dropzone').attachFile(fileName, {subjectType:"drag-n-drop"});
        // cy.get('.btn-primary').should('have.value', fileName);
        
        cy.get('.btn-primary').click();
        // cy.wait(2000);
        
        cy.get('.grid > .btn-primary').click();
        cy.wait(2000);
        
        cy.get('.space-x-10 > .w-full').click();
      });

    });
  