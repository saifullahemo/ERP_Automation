
Cypress.Commands.add('login', () => {
    
    cy.visit('/login');

    // Perform login actions here
    cy.get('#login-email').type('test@ecom.com');
    cy.get('#login-password').type('password');

    // Submit the login form
    cy.get('.btn-primary').click();
  });
  
  Cypress.Commands.add('getSession', () => {
    return cy.wrap(Cypress.env('loginSession'));
  });
  


  //** this code is used to login user from json file 

  // beforeEach(() => {
  //   cy.fixture('users.json').as('users'); // Assign the fixture data to the "users" alias
  // });
  
  // Cypress.Commands.add('login', () => {
  //   it('Test Case', () => {
  //     cy.visit('/');
  //     cy.get('@users').then((users) => {
  //       users.forEach((user) => {
  //         cy.wrap(user).as('currentUser'); // Assign the current user to the "currentUser" alias
  //         cy.get('@currentUser').then((currentUser) => {
  //           cy.get('#Email').type(currentUser.email || '');
  //           cy.get('#Password').type(currentUser.password || '');
  //           // Add any additional actions or assertions after login
  //           // ...
  //           // Complete the entire test case before moving on to the next user
  //           // ...
  //         });
  //       });
  //     });
  //   });
  // });
  
  // Cypress.Commands.add('getSession', () => {
  //   return cy.wrap(Cypress.env('loginSession'));
  // });