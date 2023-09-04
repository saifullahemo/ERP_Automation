import "./commands";
import "cypress-file-upload";

describe("User login and create sale invoice", () => {
  before(() => {
    cy.login();
    cy.wait(4000);
  });

  function selectRandomOption(selector) {
    cy.get(selector).then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click();
    });
  }

  function selectDateAndTime(date, time) {
    cy.get('.col-6 > .form-control').click();
    cy.contains(".flatpickr-day", date).click();
    cy.contains(".flatpickr-day", time).click();
  }

  it("should be created successfully", () => {
    const selectedDate = "25";
    const selectedTime = "8";
    const discountValue = "10";

    const randomTitle = "Discount_" + Math.random().toString(36).substring(2, 10);
    const randomMaxUsages = Math.floor(Math.random() * 10) + 1; // Generates a random value between 1 and 10

    cy.visit("/");
    cy.get('.navigation > :nth-child(5) > :nth-child(1)').click();
    cy.get('#__BVID__109 > :nth-child(7) > .d-flex').click();
    cy.contains('#show-btn', 'New Discount').should('be.visible').click();
    cy.wait(5000);

    cy.get('.container-fluid > .d-block > :nth-child(1)').click();

    cy.get('#vs5__combobox').click();
    selectRandomOption('.vs__dropdown-option');

    cy.get('#title').type(randomTitle);
    cy.get('#value').type(discountValue);

    cy.get('#__BVID__537 > :nth-child(1) > :nth-child(1) > .custom-control-label').click();
    cy.get('#vs6__combobox').click();
    selectRandomOption('.vs__dropdown-option');

    cy.get('#__BVID__542 > :nth-child(1) > :nth-child(1)').click();
    cy.get('.mt-2 > .custom-control-label').click();
    cy.get('#__BVID__542 > :nth-child(1) > :nth-child(1) > .custom-control-label').click();
    cy.get('#__BVID__552 > :nth-child(1) > :nth-child(1) > .custom-control-label').click();
    cy.get('#__BVID__556 > :nth-child(1) > :nth-child(1) > .custom-control-label').type(randomMaxUsages.toString());
    cy.get('#__BVID__571').type(randomMaxUsages.toString());

    selectDateAndTime(selectedDate, selectedTime);

    cy.get(':nth-child(3) > .col > div > .btn-primary').click();

  });
});
