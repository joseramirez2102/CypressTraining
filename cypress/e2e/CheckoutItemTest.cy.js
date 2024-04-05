/// <reference types="Cypress" />

describe('E2E Test to navigate throught category, then add a product to the cart, and finally verify the checkout functionality before PayPal.', () => {
  
    it('E2E Test Steps.', () => {
      
      // Navigate to the website
      cy.navigate();

      // Click the 'Pedals and Amplifiers' button on the header
      cy.get('ul.category-flyout-header__link-bar__primary button[data-header-category="pedalsAmps"]').click();

      // Validate the webpage shows the submenu with 'Pedals and Amplifiers' on the title
      cy.get('#category-header-pedalsAmps').should('be.visible').invoke('text').should('eq', 'Pedals and Amplifiers');
      
      // Click the 'Effects and Pedals' button on the submenu
      cy.contains('Effects and Pedals').click();

      // Validate that is shown the 'Effects and Pedals' title in the page
      cy.get('h1.cms-centered-page-head__title').should('be.visible').invoke('text').should('eq', 'Effects and Pedals');

      // Click the 'Accept' button in the banner
      cy.acceptBanner();

      // Get the first item of the categories and click on it
      cy.get('ul.tiles--single-row .category-collection__item__text').eq(0).click();

      // Validate that is shown the 'Overdrive and Boost Pedals' title in the page
      cy.get('h1.cms-centered-page-head__title').should('be.visible').invoke('text').should('eq', 'Overdrive and Boost Pedals');

      // Get the first product of the category and click on it
      cy.get('div.rc-image').eq(0).click();

      // Get the first product of the 'Compare' section and click on it
      cy.get('button.add-to-cart-button').eq(0).click();

      // Validate that is visible the payment method div in the cart page
      cy.get('div.payment-method__icons').should('be.visible');

      // Click on the 'Proceed to Checkout' button
      cy.get('div.checkout-cart-footer button.rc-button').click();

      // Validate the 'Continue as Guest' button is visible and click on it
      cy.get('div.rc-alert-box .rc-button').should('be.visible').click();

      // Validate the 'Contact Info' header is visible and the text match
      cy.get('#checkout-shipping-info-form h3.site-module__title').eq(0).should('be.visible').invoke('text').should('eq', 'Contact Info');

      // --- Contact Info Section ---
      // Type the first name and last name on each input
      cy.get('#buyer-first-name').type('Harry');
      cy.get('#buyer-last-name').type('Potter');

      // Call the create random email method
      cy.createRandomEmail(7).then((randomEmail) => {

        // Type the random email in the input
        cy.get('#buyer-email').type(randomEmail + '@testingmail.com');

      })
      
      // --- Shipping Address Section ---
      // Type the name in the input
      cy.get('#name').type('Harry Potter');

      // Type the street address in the input
      cy.get('#address-autocomplete-input').type('Heredia');

      // Click the 'Enter Address Manually' option
      cy.get('#manual-entry').should('be.visible').click();

      // Type in the street address (line 1) input
      cy.get('#street_address').type('Residencial Florencia Casa 103');

      // Type the city in the input
      cy.get('#locality').type('Heredia');

      // Select the State in the dropdown
      cy.get('select[name="region"]').select('Heredia').should('have.value', 'H');

      // Type the postal code in the input
      cy.get('#postal_code').type('40404');

      // Type the phone in the input
      cy.get('#phone').type('88348801');

      // --- Order Summary Section ---
      // Click the continue button
      cy.get('div.mtb-8 button').click();

      // Validate is shown the PayPal button
      cy.get('button.checkout-paypal-button').should('be.visible');

    })
  
  })