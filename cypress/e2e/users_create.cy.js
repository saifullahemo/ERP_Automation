import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  function selectRandomStore() {
    // Get all the options in the stores dropdown
    cy.get('.vs__dropdown-option').then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  

  it('should be created successfully', () => {
    const fullName = 'testing';
    const surname = 'user';
    const email = 'testinguser@test.com';
    const selectedDate = '25';
    const mobileNumber = '01712343434';
    const phoneNumber = '01712343434';
    const addressLine1 = '1181/4, Gulshan-2, Dhaka';
    const suburb = 'Gulshan';
    const state = 'Dhaka';
    const postCode = '1201';
    const country = 'Bangladesh';
    const tfn = '120012';
    const payRate = '12000';
    const fileName = 'bank.jpg';

    cy.visit('/');

    // Click on user management
    cy.contains(':nth-child(2) > [href="#"] > .menu-title', 'User Management').click({ force: true });
    cy.wait(3000);

    // Click on users to browse the users list
    cy.contains('.d-flex .menu-title', 'Users').click({ force: true });
    cy.wait(5000);

    // Click on Add User to create a user
    cy.contains('.btn-primary', 'Add User').click({ force: true, waitForAnimations: false, animationDistanceThreshold: 20 });
    cy.wait(5000);

    // Fill up the form
    cy.get('#full-name').type(fullName);
    cy.get('#surname').type(surname);
    cy.get('#email').type(email);

    // Pick the date
    cy.get('.input').click(); // Open the date picker
    cy.contains('.flatpickr-day', selectedDate).click(); // Click on the desired date

    // Pick the country code for mobile
    cy.get('#mobile .country-selector__label').click();
    cy.contains('.country-selector__list .flex', country).click();

    // Typing the phone number
    cy.get('#mobile .input-tel__label').type(mobileNumber);

    // Pick the country code for phone
    cy.get('#phone .country-selector__label').click();
    cy.contains('#phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex', country).click();

    // Typing the phone number
    cy.get('#phone .input-tel__label').type(phoneNumber);

    // Typing address details
    cy.get('#add-user-address-line-1').type(addressLine1);
    cy.get('#add-user-suburb').type(suburb);
    cy.get('#add-user-state').type(state);
    cy.get('#add-user-postcode').type(postCode);
    cy.get('#add-user-country').type(country);

    // Typing TFN and pay rate
    cy.get('#tfn').type(tfn);
    cy.get('#payrate').type(payRate);

    cy.get('#vs1__combobox').click();
    selectRandomStore();

    // Upload file
    cy.get('.btn').invoke('removeAttr', 'style');
    cy.fixture(fileName, 'binary').then(fileContent => {
      cy.get('.btn').attachFile({
        fileContent,
        fileName,
        mimeType: 'image/jpeg'
      });
    });

    // Wait for a reasonable amount of time for the file to be uploaded
    cy.wait(5000);

    // Add user
    cy.contains('.btn-primary', 'Add').click();

    //search user 
    cy.get('#__BVID__391').type('Testing');
    cy.get('#dropdown-right__BV_toggle_').click({ multiple: true } );

    //Edit user info
    cy.get('#dropdown-right > .dropdown-menu > :nth-child(2) > .dropdown-item').eq(0).click();
    cy.wait(3000);

    // fill up the form
    cy.get('#full-name').clear();
    cy.get('#full-name').type('Bir dash');

    cy.get('#surname').clear();
    cy.get('#surname').type('Thakkar');

    cy.get('#tfn').clear();
    cy.get('#tfn').type('12345');

    cy.get('#payrate').clear();
    cy.get('#payrate').type('1234')

    cy.get('form > .mb-sm-0').click();


    
  });
});
