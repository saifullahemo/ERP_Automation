import './commands';
import categoriesData from '../fixtures/products.json';

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

  function selectRandomStore() {
    // Get all the options in the stores dropdown
    cy.get('.vs__dropdown-option').then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }

  const minNumber = 1000000000; // Minimum number (inclusive)
  const maxNumber = 9999999999; // Maximum number (inclusive)
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;    

  function selectRandomCategory() {
    const categories = categoriesData.categories;
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }
  
  it('should be created successfully', () => {

    // Generate a random string to append to the base email
    const randomString = Math.random().toString(36).substring(7);
    // Base email address
    const baseEmail = 'testinguser@test.com';
    // Unique email by appending random string
    const email = `${randomString}${baseEmail}`;
    // Unique email by appending random string
    const name = "Hair pin";
    // const name = `${baseStore} ${randomString}`;
    // const mobileNumber = '01712343434';
    const mobileNumber = `1 (${randomNumber.toString().substr(1, 3)}) ${randomNumber.toString().substr(4, 3)}-${randomNumber.toString().substr(7, 4)}`;

    const fax = '125548';
    const addressLine1 = '1181/4, Gulshan-2, Dhaka';
    const suburb = 'Gulshan';
    const state = 'Dhaka';
    const postCode = '1201';
    const country = 'Bangladesh';
    const tax = '120012';
    const website = 'google.com';
    // const warehouseName = 'Hobart'
    // const warehouseName = Cypress.env('warehouseName');
    // const categories = categoriesData.categories;      


    cy.visit('/');

    cy.get('.navigation > :nth-child(6) > :nth-child(1)')
    cy.contains('.navigation > :nth-child(6) > :nth-child(1)', 'Products').click();

    //Add category
    cy.contains(' :nth-child(4) > .d-flex > .menu-title', 'Categories').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Category').click();

    // const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    // const selectedCategory = categories[randomCategoryIndex];

    // const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    // const selectedCategory = categories[randomCategoryIndex].name;
    const category = selectRandomCategory();
    cy.get('#category-name').type(category);

    //cy.get('#category-name').type(selectedCategory);
    cy.get('#category-short-name').type("NTL");
    cy.contains('.mr-2', 'Add').click()


  });
});