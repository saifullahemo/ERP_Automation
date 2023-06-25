import './commands'
import 'cypress-file-upload';

describe('User Creation', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should be created successfully', () => {
      cy.visit('/');
      //clicked on hamburger menu to open the sidebar
      cy.get('.d-xl-none > .nav-item > .nav-link').click();

      //click on user management
      cy.get('.navigation > :nth-child(2) > [href="#"]').click({ force: true });
cy.wait(3000);

// Click on users to browse the users list
cy.get('#__BVID__77 > :nth-child(1) > .d-flex').click({ force: true });
cy.wait(5000);

// Click on Add User to create a user
cy.get('.btn-primary').contains('Add User').click({ force: true, waitForAnimations: false, animationDistanceThreshold: 20 });
cy.wait(5000);


      //fill up the form 
      cy.get('#full-name').type('testing');
      cy.get('#surname').type('user')
      cy.get('#email').type('testinguser@test.com')

      //pick the date
      cy.get('.input').click(); // Open the date picker
      cy.get('.flatpickr-calendar').contains('25').click(); // Click on the desired date
    //   cy.get('input.date-picker-input').should('have.value', '2023-06-25'); // Verify the selected date


    //pick the country code for mobile 
    cy.get('#mobile > .select-country-container > .country-selector > .country-selector__label').click();
    cy.get('#mobile > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex').click();

    //typing the phone number
    cy.get('#mobile > .flex-1 > .input-tel > .input-tel__label').type('01712343434');

    //pick the country code for mobile 
    cy.get('#phone > .select-country-container > .country-selector > .country-selector__label').click();
    cy.get('#phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex').click();

    //typing the phone number
    cy.get('#phone > .flex-1 > .input-tel > .input-tel__label').type('01712343434');

    //typing address 1
    cy.get('#add-user-address-line-1').type('1181/4, Gulshan-2, Dhaka');

    //typing suburb
    cy.get('#add-user-suburb').type('Gulshan');

    //typing state
    cy.get('#add-user-state').type('Dhaka');

    //typing post code 
    cy.get('#add-user-postcode').type('1201');

    //tying country
    cy.get('#add-user-country').type('Bangladesh');

    //typing tfn
    cy.get('#tfn').type('120012');

    //typing payrate 
    cy.get('#payrate').type('12000');

    //selecting store
    cy.get('#vs1__combobox').click();
    cy.get('#vs1__option-0').click();

    //upload file
    cy.get('.btn-primary > .d-sm-inline').click();
    const fileName = 'test.jpg';
    cy.get('.media-aside').attachFile(fileName);

    //add user
    cy.get('.btn-primary').contains('Add').click();
    

  });
});
