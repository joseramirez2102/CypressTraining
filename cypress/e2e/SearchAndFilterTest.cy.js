/// <reference types="Cypress" />

describe('E2E Test to navigate to the guitars page and filter the results, then select one to review the details of it.', () => {
  
    it('E2E Test Steps.', () => {
      
      // Navigate to the website
      cy.navigate();

      // Click the 'Guitars' button on the header
      cy.get('ul.category-flyout-header__link-bar__primary button[data-header-category="guitars"]').click();

      // Validate the webpage shows the submenu with 'Guitars' on the title
      cy.get('#category-header-guitars').should('be.visible').invoke('text').should('eq', 'Guitars');
      
      // Click the 'Electric Guitars' button on the submenu
      cy.contains('Electric Guitars').click();

      // Validate that is shown the 'Electric Guitars' title in the page
      cy.get('h1.browse-page__title').should('be.visible').invoke('text').should('eq', 'Electric Guitars');

      // Click the 'Accept' button in the banner
      cy.acceptBanner();

      // Click the 'All Filters' button
      cy.contains('All Filters').click();

      // Validate that is shown the 'Filter Your Search' title in the menu
      cy.get('h2.dismissible-sidebar__title').should('be.visible').invoke('text').should('eq', 'Filter Your Search');

      // Check the 'Solid Body' input that is in the 'Body Type' category
      cy.get('#trait_values-8e61e6c8-037f-4382-bba2-3f32e9b8266d').check();

      // Click the 'View Results' button
      cy.contains('View Results').click();

      // Validate the webpage updates the title after selecting a filter
      cy.get('h1.browse-page__title').should('be.visible').invoke('text').should('eq', 'Solid Body Electric Guitars');

      // Click the 'Clear Filters' button
      cy.get('.mobile-d-none a.filter-chip').should('be.visible').click();

      // Validate the webpage updates the title after clearing the filter 
      cy.get('h1.browse-page__title').should('be.visible').invoke('text').should('eq', 'Electric Guitars');

      // Click the first product that is shown to check the product page
      cy.get('.rc-listing-card__titleblock').eq(1).should('be.visible').click();

    })
  
  })