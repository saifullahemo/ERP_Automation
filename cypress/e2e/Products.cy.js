import './commands';
import 'cypress-file-upload';

describe('User login', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  // Generate a random string
  function getRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
    return randomString;
  }

  // Select a random option from a dropdown
  function selectRandomOption(selector) {
    cy.get(selector).then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click();
    });
  }

  it('should be created successfully', () => {
    const randomString = getRandomString(10);
    const email = `test_${randomString}@gmail.com`;
    const name = getRandomString(10);
    const mobileNumber = `1${Math.floor(Math.random() * 9000000000) + 1000000000}`;
    const skuNumber = getRandomString(10);
    const barcode = getRandomString(10);
    const addressLine1 = '1181/4, Gulshan-2, Dhaka';
    const suburb = 'Gulshan';
    const state = 'Dhaka';
    const postCode = '1201';
    const country = 'Bangladesh';
    const tax = getRandomString(6); // Generate a random tax
    const website = 'google.com';
    const selectedDate = '25';

  
    cy.visit('/');

    cy.get('.navigation > :nth-child(6) > :nth-child(1)')
    cy.contains('.navigation > :nth-child(6) > [href="#"]','Product Management').click();

    // Add category
    cy.contains(':nth-child(4) > .d-flex > .menu-title', 'Categories').click();
    cy.contains('.col-md-8 > .d-flex > .btn-primary', 'Add Category').click();
    cy.get('#category-name').type(`CategoryName_${getRandomString(5)}`); // Dynamic CategoryName
    cy.get('#category-short-name').type(`NTL_${getRandomString(3)}`); // Dynamic NTL
    cy.contains('.mr-2', 'Add').click();

    // Units creation
    cy.contains(':nth-child(3) > .d-flex', 'Units').click();
    cy.wait(3000);
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Unit').click();
    cy.get('#autosuggest').type(`UnitName_${getRandomString(5)}`); // Dynamic UnitName
    cy.contains('#add-new-unit-sidebar > .b-sidebar-body > :nth-child(2) > .p-2 > .mt-2 > .mr-2', 'Add').click();

    // Brands creation
    cy.contains(':nth-child(2)', 'Brands').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Brand').click();
    cy.get('#brand-name').type(`BrandName_${getRandomString(5)}`); // Dynamic BrandName
    cy.contains('#add-new-brand-sidebar > .b-sidebar-body > :nth-child(2) > .p-2 > .mt-2 > .mr-2', 'Add').click();
    cy.wait(3000);

    // Products list creation
    cy.contains('#__BVID__134 > :nth-child(1) > .d-flex','Product').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Product').click();
    cy.get('#sku-number').type(skuNumber);
    cy.get('#product-name').type(name);
    cy.get('#product-barcode').type(barcode);

    // Assuming these are the correct selectors for store dropdowns
    cy.get('#vs7__combobox').click();
    selectRandomOption('.vs__dropdown-option');
    cy.get('#vs8__combobox').click();
    selectRandomOption('.vs__dropdown-option');
    cy.get('#vs9__combobox').click();
    selectRandomOption('.vs__dropdown-option');
    cy.get('#vs10__combobox').click();
    selectRandomOption('.vs__dropdown-option');
    cy.get('#vs11__combobox').click();
    selectRandomOption('.vs__dropdown-option');

    // Upload file
    cy.contains('#add-new-product-sidebar > .b-sidebar-body > :nth-child(2) > .px-2 > :nth-child(9) > .col > .media > .media-body > .d-flex > .btn-primary', 'Upload').invoke('removeAttr', 'style');
    cy.fixture('bank.jpg', 'binary').then(fileContent => {
      cy.get('.btn').attachFile({
        fileContent,
        fileName: 'bank.jpg',
        mimeType: 'image/jpeg'
      });
    });
    
    // Wait for a reasonable amount of time for the file to be uploaded
    cy.wait(5000);

    // Add user
    cy.contains('.btn-primary', 'Add').click();
    cy.wait(5000);

    // Find and interact with the added product
    cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(name);
    cy.wait(5000);

    // Assuming there is a dropdown for actions on the product
    cy.contains('#dropdown-right__BV_toggle_', 'Actions').click();
    cy.contains('#dropdown-group-1 > :nth-child(1) > .dropdown-item', 'Product Details').click();

    // Assuming there's an input field with the id 'cost_per_unit'
    cy.get('#cost_per_unit').type('10');
    cy.contains('.wizard-btn', 'Next').click();
    cy.get('#replenish-level').type('12');

    // Pick the date
    cy.get('.input').click(); // Open the date picker
    cy.contains('.flatpickr-day', selectedDate).click(); // Click on the desired date
    cy.contains('.wizard-footer-right > span > .wizard-btn', 'Finish').click();

    // Assuming you need to search for the added product again
    cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(name);
    cy.wait(5000);

    // // Assuming there's another dropdown for actions
    // cy.get('#dropdown-right__BV_toggle_').click();

    // // Assuming there's an input field with the id 'tax_id'
    // cy.get('#tax_id').click();
    // selectRandomOption('#tax_id'); // Select a random option from the dropdown

    // // Assuming there are input fields with the ids 'quantity' and 'sale_price_non_gst'
    // cy.get('#quantity').type('1000');
    // cy.get('#sale_price_non_gst').type('188');
    // cy.contains('.wizard-btn', 'Add').click();

    // cy.get('#replenish-level').type('12');
    // cy.contains('.wizard-footer-right > span > .wizard-btn', 'Finish').click();
  });
});
