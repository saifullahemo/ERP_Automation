import './commands';
describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  it('should create the USER role successfully', () => {
    cy.contains('.menu-title', 'User Management').click(); // Click on user management
    cy.wait(3000);

    cy.get('#__BVID__92 > :nth-child(3) > .d-flex').click(); // Click on a user role
    cy.get('.btn').contains('Add User Role').click(); // Click on Add user role button

    // Get all the options in the first dropdown
    cy.get('#vs1__combobox').click();

    cy.get('.vs__dropdown-option').then($options => {

      // Generate a random index within the range of available options
      const randomIndex = Cypress._.random(0, $options.length - 1);

      // Select the random option
      cy.wrap($options[randomIndex]).click();
    });


   // Get all the options in the second dropdown
   cy.get('#vs2__combobox').click();
   cy.get('.vs__dropdown-option').then($options => {
     // Generate a random index within the range of available options
     const randomIndex = Cypress._.random(0, $options.length - 1);
     // Select the random option
     cy.wrap($options[randomIndex]).click();
   });

    cy.get('.mr-2').contains('Add').click(); // Click on Add button
  });
});
