Cypress.Commands.add('acceptBanner', () => {

    cy.contains('Accept').click()

})

Cypress.Commands.add('navigate', () => {

    cy.visit('https://reverb.com/')
    cy.contains('Accept').click()

})

Cypress.Commands.add('createRandomEmail', (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
});