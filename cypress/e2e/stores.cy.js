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




  it('should be created successfully', () => {

    // Generate a random string to append to the base email
    const randomString = Math.random().toString(36).substring(7);
    // Base email address
    const baseEmail = 'testinguser@test.com';
    // Unique email by appending random string
    const email = `${randomString}${baseEmail}`;
    // Unique email by appending random string
    const baseStore = "Nestle";
    const name = `${baseStore} ${randomString}`;
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


    cy.visit('/');
    cy.contains(':nth-child(12) > .d-flex', 'Stores').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Store').click();
    cy.get('#store-name').type(name);
    cy.get('#warehouse-name').click();
    // cy.get('#vs1__option-0').click();
    selectRandomStore();

    cy.get('#tax-id').type(tax);
    cy.get('#store-website').type(website);
    cy.get('#store-email').type(email);
    cy.get('#store-phone > .select-country-container > .country-selector > .country-selector__label').click();
    cy.contains('#store-phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex > .dots-text', country).click();
    cy.get('#store-phone').type(mobileNumber);
    cy.get('#store-fax').type(fax);
    cy.get('#add-store-address-line-1').type(addressLine1);
    cy.get('#add-store-suburb').type(suburb);
    cy.get('#add-store-state').type(state);
    cy.get('#add-store-postcode').type(postCode);
    cy.get('#add-store-country').type(country);
    cy.contains('.px-2 > .mt-2 > .mr-2', 'Add').click()

    cy.wait(5000);
    
    // cy.get('input[id^="__BVID__"]').type(name);
    // cy.get('input[type="search"]').type(name);
    cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(name);

    cy.wait(5000);
    
    cy.contains('#dropdown-right__BV_toggle_','Actions').click();
    cy.contains('#dropdown-right > .dropdown-menu > :nth-child(2) > .dropdown-item', 'Delete').click();
    cy.contains('.swal2-confirm', 'Yes, delete it!').click();



});
});