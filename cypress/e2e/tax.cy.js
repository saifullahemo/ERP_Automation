import './commands';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  const characters = 'abcdefghijklmnopqrstuvwxyz';
      const desiredLength = 10; // Desired length of the random string
      let randomString = '';

      for (let i = 0; i < desiredLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
      }
      const baseTax = "Income";
      const taxName = `${baseTax} ${randomString}`;

      it('should be created successfully', () => {
        cy.visit('/');

        cy.contains(':nth-child(11) > .d-flex', 'Tax').click();
        cy.contains('.col-md-8 > .d-flex > .btn', 'Add TAX').click();
        cy.get('#tax-title').type(taxName);
        cy.get('#tax-percentage').type(15);
        cy.contains('#add-new-tax-sidebar > .b-sidebar-body > :nth-child(2) > .p-2 > .mt-2 > .mr-2', 'Add').click();
        cy.wait(5000);

        cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(taxName);

        cy.wait(5000);
        
        cy.contains('#dropdown-right__BV_toggle_','Actions').click();
        cy.contains('#dropdown-right > .dropdown-menu > :nth-child(2) > .dropdown-item', 'Delete').click();
        cy.contains('.swal2-confirm', 'Yes, delete it!').click();


});
});