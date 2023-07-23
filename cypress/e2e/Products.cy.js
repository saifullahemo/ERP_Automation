import './commands';
import 'cypress-file-upload';

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

  // + Random category selection functionality  
  function selectRandomCategory() {
    const categories = categoriesData.categories;
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  // + Random units selection functionality  
  function selectRandomUnits() {
    const units = categoriesData.units;
    const randomIndex = Math.floor(Math.random() * units.length);
    return units[randomIndex];
  }

  // + Random Brands selection functionality  
  function selectRandomBrands() {
    const brands = categoriesData.brands;
    const randomIndex = Math.floor(Math.random() * brands.length);
    return brands[randomIndex];
  }

  // + Random products selection functionality  
  function selectRandomProducts() {
    const products = categoriesData.products;
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }


  
  it('should be created successfully', () => {

    // Generate a random string to append to the base email
    const randomStrings = Math.random().toString(36).substring(7);
    // Base email address
    const baseEmail = 'test@gmail.com';
    // Unique email by appending random string
    const email = `${randomString} ${baseEmail}`;
    // Unique email by appending random string
    const name = "Hair pin";
    // const name = `${baseStore} ${randomString}`;
    // const mobileNumber = '01712343434';
    const mobileNumber = `1 (${randomNumber.toString().substr(1, 3)}) ${randomNumber.toString().substr(4, 3)}-${randomNumber.toString().substr(7, 4)}`;

    const skuNumber = `${randomStrings}`;
    const barcode = `${randomString}`;
    const addressLine1 = '1181/4, Gulshan-2, Dhaka';
    const suburb = 'Gulshan';
    const state = 'Dhaka';
    const postCode = '1201';
    const country = 'Bangladesh';
    const tax = '120012';
    const website = 'google.com';    
    const category = selectRandomCategory();
    const unit = selectRandomUnits();
    const brand = selectRandomBrands();
    const product = selectRandomBrands();
    const fileName = 'bank.jpg';
    const selectedDate = '25';



    cy.visit('/');

    cy.get('.navigation > :nth-child(6) > :nth-child(1)')
    cy.contains('.navigation > :nth-child(6) > :nth-child(1)', 'Products').click();

    //Add category
    cy.contains(' :nth-child(4) > .d-flex > .menu-title', 'Categories').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Category').click();

    cy.get('#category-name').type(category);
    
    cy.get('#category-short-name').type("NTL");
    cy.contains('.mr-2', 'Add').click()
    
    //units creation
    cy.contains(':nth-child(3) > .d-flex','Units').click()
    cy.wait(3000)
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Unit').click();
    cy.get('#autosuggest').type(unit);
    cy.contains('#add-new-unit-sidebar > .b-sidebar-body > :nth-child(2) > .p-2 > .mt-2 > .mr-2', 'Add').click();
    
    //  Brands creation
    cy.contains(':nth-child(2)', 'Brands').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Brand').click();
    cy.get('#brand-name').type(brand);
    cy.contains('#add-new-brand-sidebar > .b-sidebar-body > :nth-child(2) > .p-2 > .mt-2 > .mr-2', 'Add').click()
    cy.wait(3000)

    //Products list creation
    cy.contains(':nth-child(1)', 'Product List').click();
    cy.contains('.col-md-8 > .d-flex > .btn', 'Add Product').click();
    cy.get('#sku-number').type(skuNumber)
    cy.get('#product-name').type(product);
    cy.get('#product-barcode').type(barcode);
    cy.get('#vs7__combobox').click();
    selectRandomStore();
    
    cy.get('#vs8__combobox').click();
    selectRandomStore();
    
    cy.get('#vs9__combobox').click();
    selectRandomStore();
    
    cy.get('#vs10__combobox').click();
    selectRandomStore();
    
    cy.get('#vs11__combobox').click();
    selectRandomStore();


      // Upload file
      cy.contains('#add-new-product-sidebar > .b-sidebar-body > :nth-child(2) > .px-2 > :nth-child(9) > .col > .media > .media-body > .d-flex > .btn-primary', 'Upload').invoke('removeAttr', 'style');
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
      cy.wait(5000);
      
      cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(product);
      cy.wait(5000);

      cy.contains('#dropdown-right__BV_toggle_','Actions').click();
      cy.contains('#dropdown-group-1 > :nth-child(1) > .dropdown-item', 'Product Details').click();
      // cy.contains('#dropdown-right > .dropdown-menu > :nth-child(5) > .dropdown-item', 'Product Details').click();

      cy.get('#cost_per_unit').type('10');
      cy.contains('.wizard-btn', 'Next').click();
      cy.get('#replenish-level').type('12');

      // Pick the date
    cy.get('.input').click(); // Open the date picker
    cy.contains('.flatpickr-day', selectedDate).click(); // Click on the desired date
    cy.contains('.wizard-footer-right > span > .wizard-btn', 'Finish').click();

    cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(product);
      cy.wait(5000);

      cy.get('#dropdown-group-2 > :nth-child(1) > .dropdown-item').click();
      cy.get('#tax_id').click()
      selectRandomStore();

      cy.get('#quantity').type('1000');
      cy.get('#sale_price_non_gst').type('188');
      cy.contains('.wizard-btn', 'Add').click();

      cy.get('#replenish-level').type('12');
      cy.contains('.wizard-footer-right > span > .wizard-btn', 'Finish').click();
  });
});