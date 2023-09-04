import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  function selectRandomOption(selector) {
    cy.get(selector).click();
    cy.get('.vs__dropdown-option').then(($options) => {
      const randomIndex = Cypress._.random(0, $options.length - 1);
      cy.wrap($options[randomIndex]).click();
    });
  }
  function selectRandom(selector) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  it('should create a Prepaid type customer successfully', () => {
    const paymentMethods = ['Prepaid'];

    cy.visit('/');

    // Click on contact
    cy.contains('.navigation > :nth-child(3)', 'Contact').click();
    cy.wait(3000);

    // Click on customer
    cy.contains('#__BVID__80 > :nth-child(2) > .d-flex', 'Customers').click();

    // Add Customer
    cy.contains('.d-flex > .btn', 'Add Customer').click();
    cy.wait(5000);

    // Select a random payment method from paymentMethods array (only 'Prepaid' for this test)
    const paymentMethod = 'Prepaid';

    // Click on the payment method dropdown to open it
    cy.get('#vs8__combobox').click();

    // Select the desired option from the dropdown using contains()
    cy.contains('.vs__dropdown-option', paymentMethod).click();

    // Fill up the form
    selectRandomOption('#vs9__combobox'); // Select random option for the second dropdown

    const abnnum = '58 797 194 774';
    const abn = `${abnnum}${Math.random().toString(36).substring(7)}`;
    const companyname = `${abnnum}_${Math.random().toString(36).substring(7)}`;

    cy.get('#abn').type(abnnum);
    cy.get('#name').type(companyname, { force: true });

    // Check the email and number checkboxes
    cy.get(':nth-child(2) > :nth-child(1) > .custom-control-label').click();
    cy.get('#__BVID__667 > :nth-child(2) > :nth-child(2) > .custom-control-label').click();
  

    // Click on next button
    cy.get('.wizard-btn').click();
    cy.wait(5000);

    // Additional fields after clicking Next
    cy.get("#autosuggest__input_ajax").click();
    selectRandom(".autosuggest__results li");

   // cy.get('#director_name').click();
    cy.get('#sur_name').type('Mridha');


    // Pick the country code for phone
    cy.get('#phone .country-selector__label').click();
    cy.contains('#phone .country-selector__list .flex', 'Australia').click();

    // Typing the phone number
    cy.get('#phone .input-tel__label').type('(02) 9876 5432');

    // Click on the right footer button to submit the form
    cy.get('.wizard-footer-right > span > .wizard-btn').click();


    // Contact Information
    cy.get('#add-customer-details-contact-name').type('Alice');
    cy.get('#add-customer-contact-details-role').type('HR');
    // cy.get(':nth-child(2) > :nth-child(1) > .custom-control-label').click();
    // cy.get('#__BVID__678__BV_label_').click();



    // // Pick the country code for phone
     cy.get('#add-customer-contact-details-mobile > .select-country-container > .country-selector >.country-selector__label').click();
     cy.get('#add-customer-contact-details-mobile > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(0px);"] > .flex').click();

    // // Typing the phone number
    cy.get('#add-customer-contact-details-mobile-724_phone_number').type('(02) 9876 5432');
    cy.get('.wizard-footer-right > span > .wizard-btn').click();


    //Trading details
    cy.get('#trading_name').type('pran co.');
    cy.get('#trading-address-line-1').type('Sydney');
    cy.get('[style="width: 518px; position: absolute; left: 856px; top: 394px;"] > :nth-child(1)').click();
    cy.get('span > #email').type('pran.co@gmail.com');
    cy.get('.wizard-footer-right > span > .wizard-btn').click();

    cy.get('.demo-inline-spacing > :nth-child(1) > .custom-control-label').click();

      // Attachment
      cy.get('.wizard-footer-right > span > .wizard-btn').click();

      //submit button
      cy.get('.wizard-footer-right > span > .wizard-btn').click();
  });
});
