/// <reference types="Cypress" />

describe('E2E Test to navigate to the Sign Up page and fill the inputs with credentials and validate message.', () => {
  
    it('E2E Test Steps.', () => {
      
      // Navigate to the website
      cy.navigate();

      // Click the Sign Up button
      cy.get('.reverb-header__main a[href="/signup"].reverb-header__nav__link').click();

      // Verify that appears the title of the Sign Up page and that have the correct text
      cy.get('h4.signup-signin__header').should('be.visible').invoke('text').should('eq', 'Create a Reverb Account');
      
      // Verify the labels of the first name and last name are correctly display
      cy.get('#reverb-signup-form label[for="user[first_name]"]').should('be.visible').invoke('text').should('eq', 'First name');
      cy.get('#reverb-signup-form label[for="user[last_name]"]').should('be.visible').invoke('text').should('eq', 'Last name');

      // Type the first name and last name on each input
      cy.get('input[id="user[first_name]"]').type('Ron');
      cy.get('input[id="user[last_name]"]').type('Weasley');

      // Call the create random email method
      cy.createRandomEmail(7).then((randomEmail) => {

        // Verify the label of the email is correctly displayed and then type the random mail
        cy.get('#reverb-signup-form label[for="user[email]"]').should('be.visible').invoke('text').should('eq', 'Email');
        cy.get('input[id="user[email]"]').type(randomEmail + '@testingmail.com');
  
        // Verify the label of the email confirmation is correctly displayed and then type again the random mail
        cy.get('#reverb-signup-form label[for="emailConfirmValue"]').should('be.visible').invoke('text').should('eq', 'Email Confirmation');
        cy.get('#emailConfirmValue').type(randomEmail + '@testingmail.com');

      })

      // Verify the label of the password is correctly displayed and then type the password
      cy.get('#reverb-signup-form label[for="signup--password"]').should('be.visible').invoke('text').should('eq', 'Password');
      cy.get('#signup--password').type('T3st1ngPag3.');

      // Check the input of the terms of use 
      cy.get('#reverb-signup-form input[id="user[accept_terms]"]').check();

      // Click the Sign Up button
      cy.get('#reverb-signup-form .scaling-mtb-4 input').click();

      // Validate the webpage shows a message after signing up
      cy.get('div.alert-banner--warn h4.alert-banner__title').should('be.visible').invoke('text').should('eq', 'Your Account is Currently Under Review');

    })
  
  })