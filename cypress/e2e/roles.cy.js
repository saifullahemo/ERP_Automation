import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  it('should create the role successfully', () => {
    cy.contains('.menu-title', 'User Management').click(); // Click on user management
    cy.wait(3000);

    cy.get('#__BVID__92 > :nth-child(2) > .d-flex').click(); // Click on role
    cy.get('.btn').contains('Add Role').click(); // Click on Add role

    const roleName = 'ICT';
    cy.get('#role-name').type(roleName); // Type in role name

    cy.get('.mr-2').contains('Add').click(); // Click on Add
  });
});

