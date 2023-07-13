import './commands';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });


  it('should be created successfully', () => {
    cy.visit('/');
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const desiredLength = 10; // Desired length of the random string
      let randomString = '';

      for (let i = 0; i < desiredLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
      }

      const minNumber = 1000000000; // Minimum number (inclusive)
      const maxNumber = 9999999999; // Maximum number (inclusive)
      const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;    


    //click on warehouses
    cy.get(':nth-child(11) > .d-flex').click();
    cy.wait(5000);
    cy.contains('.col-md-8 > .d-flex > .btn','Add Warehouse').click();
    cy.wait(5000);

    const baseName = "Sydney";
    const warehouseName = `${baseName} ${randomString}`;
    const country = 'Bangladesh';
    const mobileNumber = `1 (${randomNumber.toString().substr(1, 3)}) ${randomNumber.toString().substr(4, 3)}-${randomNumber.toString().substr(7, 4)}`;
    // Base email address
    const baseEmail = 'testinguser@test.com';
    // Unique email by appending random string
    const email = `${randomString}_${baseEmail}`;
    const addressLine1 = '1181/4, Gulshan-2, Dhaka';
    const suburb = 'Gulshan';
    const state = 'Dhaka';
    const postCode = '1201';
    const website = 'google.com';

    // fill up form
    cy.get('#warehouse-name').type(warehouseName);

    // Pick the country code for mobile
    
    cy.get('#warehouse-phone > .select-country-container > .country-selector > .country-selector__label').click();
    // cy.contains('.country-selector__list .flex', country).click();
    // cy.get('#warehouse-phone > .select-country-container > .country-selector > .country-selector__list', country).click();
    // cy.contains('#warehouse-phone', country).click();
    cy.contains('#warehouse-phone > .select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(16px);"] > .flex', country).click();


    // cy.get('[id^="warehouse-phone-"][id$="_phone_number"]').type(mobileNumber);
    cy.get('#warehouse-phone').type(mobileNumber);
    cy.get('#warehouse-email').type(email);
    cy.get('#add-warehouse-address-line-1').type(addressLine1);
    cy.get('#add-warehouse-suburb').type(suburb);
    cy.get('#add-warehouse-state').type(state);
    cy.get('#add-warehouse-postcode').type(postCode);
    cy.get('#add-warehouse-country').type(country);
    cy.get('#warehouse-website').type(website);
    cy.contains('.px-2 > .mt-2 > .mr-2', 'Add').click();

    cy.wait(5000);

    cy.get('input[id^="__BVID__"]').type(warehouseName);
    cy.wait(5000);
    
    cy.contains('[id^="action-dropdown-right-"][id$="__BV_toggle_"]','Actions').click();
    cy.contains('[id^="action-dropdown-right-"] > .dropdown-menu > :nth-child(2) > .dropdown-item', 'Delete').click();
    cy.wait(5000);
    cy.contains('.swal2-confirm', 'Yes, delete it!').click();


    
});
});

// export default warehouseName;