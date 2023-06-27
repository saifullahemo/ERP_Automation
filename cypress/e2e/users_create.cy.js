// import './commands'
// import 'cypress-file-upload';

// describe('User Creation', () => {
//   beforeEach(() => {
//     cy.login();
//   });

//   it('should be created successfully', () => {
//       cy.visit('/');
//       //clicked on hamburger menu to open the sidebar
//       cy.get('.d-xl-none > .nav-item > .nav-link').click();

//       //click on user management
//       cy.get('.navigation > :nth-child(2) > [href="#"]').click({ force: true });
// cy.wait(3000);

// // Click on users to browse the users list
// cy.get('#__BVID__77 > :nth-child(1) > .d-flex').click({ force: true });
// cy.wait(5000);

// // Click on Add User to create a user
// cy.get('.btn-primary').contains('Add User').click({ force: true, waitForAnimations: false, animationDistanceThreshold: 20 });
// cy.wait(5000);


//       //fill up the form 
//       cy.get('#full-name').type('testing');
//       cy.get('#surname').type('user')
//       cy.get('#email').type('testinguser@test.com')

//       //pick the date
//       cy.get('.input').click(); // Open the date picker
//       cy.get('.flatpickr-calendar').contains('25').click(); // Click on the desired date
//     //   cy.get('input.date-picker-input').should('have.value', '2023-06-25'); // Verify the selected date


//     //pick the country code for mobile 
//     cy.get('#mobile > .select-country-container > .country-selector > .country-selector__label').click();
//     cy.get('#mobile > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex').click();

//     //typing the phone number
//     cy.get('#mobile > .flex-1 > .input-tel > .input-tel__label').type('01712343434');

//     //pick the country code for mobile 
//     cy.get('#phone > .select-country-container > .country-selector > .country-selector__label').click();
//     cy.get('#phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex').click();

//     //typing the phone number
//     cy.get('#phone > .flex-1 > .input-tel > .input-tel__label').type('01712343434');

//     //typing address 1
//     cy.get('#add-user-address-line-1').type('1181/4, Gulshan-2, Dhaka');

//     //typing suburb
//     cy.get('#add-user-suburb').type('Gulshan');

//     //typing state
//     cy.get('#add-user-state').type('Dhaka');

//     //typing post code 
//     cy.get('#add-user-postcode').type('1201');

//     //tying country
//     cy.get('#add-user-country').type('Bangladesh');

//     //typing tfn
//     cy.get('#tfn').type('120012');

//     //typing payrate 
//     cy.get('#payrate').type('12000');

//     //selecting store
//     cy.get('#vs1__combobox').click();
//     cy.get('#vs1__option-0').click();

//     //upload file
//     cy.get('.btn-primary > .d-sm-inline').click();
//     const fileName = 'test.jpg';
//     cy.get('.media-aside').attachFile(fileName);

//     //add user
//     cy.get('.btn-primary').contains('Add').click();
    

//   });
// });


import './commands';
import 'cypress-file-upload';

describe('User Creation', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000)
  });

  it('should be created successfully', () => {
    cy.visit('/');
    // Clicked on hamburger menu to open the sidebar
    cy.get('.d-xl-none > .nav-item > .nav-link').click();

    // Click on user management
    cy.get('.navigation > :nth-child(2) > [href="#"]').click({ force: true });
    cy.wait(3000);

    // Click on users to browse the users list
    cy.get('#__BVID__77 > :nth-child(1) > .d-flex').click({ force: true });
    cy.wait(5000);

    // Click on Add User to create a user
    cy.get('.btn-primary').contains('Add User').click({ force: true, waitForAnimations: false, animationDistanceThreshold: 20 });
    cy.wait(5000);

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
    const selectedStore = 'IFAD STORE';
    const fileName = 'test.jpg';

    // Fill up the form
    cy.get('#full-name').type(fullName);
    cy.get('#surname').type(surname);
    cy.get('#email').type(email);

    // Pick the date
    cy.get('.input').click(); // Open the date picker
    cy.get('.flatpickr-calendar').contains(selectedDate).click(); // Click on the desired date

    // Pick the country code for mobile
    cy.get('#mobile > .select-country-container > .country-selector > .country-selector__label').click();
    cy.get('#mobile > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex').contains(country).click();

    // Typing the phone number
    cy.get('#mobile > .flex-1 > .input-tel > .input-tel__label').type(mobileNumber);

    // Pick the country code for phone
    cy.get('#phone > .select-country-container > .country-selector > .country-selector__label').click();
    cy.get('#phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"]').contains(country).click();

    // Typing the phone number
    cy.get('#phone > .flex-1 > .input-tel > .input-tel__label').type(phoneNumber);

    // Typing address 1
    cy.get('#add-user-address-line-1').type(addressLine1);

    // Typing suburb
    cy.get('#add-user-suburb').type(suburb);

    // Typing state
    cy.get('#add-user-state').type(state);

    // Typing post code
    cy.get('#add-user-postcode').type(postCode);

    // Typing country
    cy.get('#add-user-country').type(country);

    // Typing TFN
    cy.get('#tfn').type(tfn);

    // Typing pay rate
    cy.get('#payrate').type(payRate);

    // Selecting store
    cy.get('#vs1__combobox').click();
    cy.contains('.vs__dropdown-option', selectedStore).click();

    // Upload file
   // Click on the upload button
cy.get('.media-body > .d-flex > .btn-primary').click();

// Wait for a reasonable amount of time for the upload button to trigger the upload process
cy.wait(5000);

// Load the image file from the fixture
cy.fixture(fileName).then(fileContent => {
  // Find the target element for the image preview
  cy.get('.col > .media').then($mediaElement => {
    // Convert the fileContent to a Blob object
    const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');

    // Create a File object from the Blob
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    // Create a DataTransfer object to simulate drag-and-drop behavior
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    // Attach the file to the target element
    $mediaElement[0].files = dataTransfer.files;

    // Trigger the change event to simulate the file upload
    cy.wrap($mediaElement).trigger('change');
  });
});

// Wait for a reasonable amount of time for the image preview to be displayed
cy.wait(5000);


    // Add user
    cy.get('.btn-primary').contains('Add').click();
  });
});
