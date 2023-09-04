import "./commands";
import "cypress-file-upload";

describe("User login and create sale invoice", () => {
  before(() => {
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

  function selectRandomOption(selector) {
    // Get all the options in the dropdown
    cy.get(selector).then(($options) => {
      // Select a random option index
      const randomIndex = Math.floor(Math.random() * $options.length);
      // Click on the randomly selected option
      cy.wrap($options[randomIndex]).click();
    });
  }
  const selectDeliveryAddress = () => {
    // // Click on the input field to trigger the dropdown
    cy.get(".vs__dropdown-toggle").click({ multiple: true });
    //cy.wait(50000);
    cy.get(".vs__dropdown-menu", { timeout: 10000 }).then(($options) => {
      // Select a random option index
      console.log("options are ", $options);
      const randomIndex = Math.floor(Math.random() * $options.length);
      // // Click on the randomly selected option
      // cy.wrap($options[0]).click();
    });
  };

  it("should be created successfully", () => {
    const selectedDate = "25";

    cy.visit("/");

    //select saleinvoice handle

    cy.get(".navigation > :nth-child(5) > :nth-child(1)").click();
    cy.wait(3000);

    cy.get('#__BVID__109 > :nth-child(3) > .d-flex').click();

    //Add Store
    cy.get('#vs1__combobox').click();
    selectRandomStore();

    //Add Representative
    cy.get('#vs2__combobox').click();
    selectRandomStore();

    // Invoice Date - pick up from calendar
    cy.get(':nth-child(2) > .row > :nth-child(3) > .input').click();

    // Find and select the desired date in the calendar
    cy.get('.flatpickr-day').contains(selectedDate).click();

    // Customer Information (Regular Customer)
    cy.get("#autosuggest__input_ajax").click();
    selectRandomOption(".autosuggest__results li");

    // Delivery address
    selectDeliveryAddress(".vs__dropdown-menu");


    //issue:The pickup/delivery date must be a date after or equal to invoice date. 
    //need to selct those products which has  stock on hand larger  than 0 (for some products its 0 then it show the error message so its working)
  

  });
});