import "./commands";
import "cypress-file-upload";

describe("User login and create sale invoice", () => {
    before(() => {
        cy.login();
        cy.wait(4000);
    });

    // Function to select a random option from a dropdown
    function selectRandomOption(selector) {
        cy.get(selector).click(); // Open the dropdown
        cy.get('.vs__dropdown-option').then(($options) => {
            const randomIndex = Math.floor(Math.random() * $options.length);
            cy.wrap($options[randomIndex]).click();
        });
    }

    it("should be created successfully", () => {
        const selectedDate = "25";
        const pickupDay = "28";
        const pickupMonth = "August";

        const randomString = Math.random().toString(36).substring(7);
        const baseEmail = "example@example.com";
        const email = `${randomString} ${baseEmail}`;

        cy.visit("/");
        cy.get('.navigation > :nth-child(5) > :nth-child(1)').click();
        cy.get('#__BVID__109 > :nth-child(3) > .d-flex').click();

        // Add Store
        selectRandomOption('#vs1__combobox');

        // Add Representative
        selectRandomOption('#vs2__combobox');

        // Invoice Date - pick up from calendar
        cy.get(':nth-child(2) > .row > :nth-child(3) > .input').click();
        cy.get('.flatpickr-day').contains(selectedDate).click();

        // Click walk-in customer
        cy.get('.switch-container > .custom-control').click();

        // Customer name
        cy.get('#sale-invoice-customer-name').type('Walk-In-Customer');

        // Email
        cy.get('#sale-invoice-customer-email').type(email);

        // Generate a random country code and phone number
        const countryCode = '+' + Math.floor(Math.random() * 100);
        const phoneNumber = Math.floor(Math.random() * 10000000000).toString();

        // Set country code and phone number
        cy.get('.country-selector__label').click();
        cy.get('.select-country-container > .country-selector > .country-selector__list > .vue-recycle-scroller > .vue-recycle-scroller__item-wrapper > [style="transform: translateY(0px);"] > .flex').type(phoneNumber);

        cy.get(':nth-child(2) > .input').click(); // Click to open the date picker
        cy.get('.flatpickr-calendar.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer')
            .contains(pickupDay)
            .scrollIntoView()
            .click(); // Click on the specific date

        // Select Category
        selectRandomOption('#vs4__combobox');

        // Select Product
        selectRandomOption('#vs5__combobox');

        // Select Size
        selectRandomOption('#vs6__combobox');

        // Add quantity
        cy.get("#quantity").type("1");

        // Add button
        cy.get(".col-md-4 > .btn-primary").click();
        cy.wait(5000);

        // Add submit
        cy.get('.offset-md-5 > .btn').click();
    });
});
