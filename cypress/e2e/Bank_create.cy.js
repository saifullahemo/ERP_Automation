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

      const minNumber = 100000; // Minimum number (inclusive)
      const maxNumber = 999999; // Maximum number (inclusive)
      const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;      

    const baseBank = "Bank";
    const bankName = `${baseBank} ${randomString} `;
    // const bankName = randomString;
    const baseAcc = "john doe";
    const accName = `${randomString} ${baseAcc}`;
    const baseAccNum = '11457835846588';
    const accNum = randomNumber.toString();

    const baseBranch = 'Gulshan-1';
    const branch = `${randomString} ${baseBranch}`;
    // cy.wait(3000);


    // Click on Bank
    cy.contains(':nth-child(10) > .d-flex', 'Banks').click();
    cy.wait(3000);

    cy.contains('.col-md-8 > .d-flex > .btn','Add Bank').click();
    cy.wait(3000);

    cy.get('#h-bank-name').type(bankName);
    cy.get('#h-account-name').type(accName);
    cy.get('#h-account-number').type(accNum);
    cy.get('#h-account-branch').type(branch);

    cy.contains('.btn', 'Add').click();
    cy.wait(3000)

   
    cy.get('.d-flex.align-items-center.justify-content-start.mb-1.mb-md-0.col-md-4.col-12 input.d-inline-block.mr-1.form-control').type(bankName);
    cy.wait(5000);


    // cy.get('#bank_table__row_4 > [aria-colindex="6"] > :nth-child(1)').click()
    // cy.get('#bank_table__row_4 > [aria-colindex="6"] > :nth-child(1) > #dropdown-right > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
    
    // cy.get('#h-bank-name').type(bankName);
    // cy.get('#h-account-name').type(accName);
    // cy.get('#h-account-number').type(accNum);
    // cy.get('#h-account-branch').type(branch);

  })

});
