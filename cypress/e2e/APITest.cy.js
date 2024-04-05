/// <reference types="Cypress" />

describe('API Test', () => {

    it('GET method', () => {

        cy.request('GET', 'https://fakestoreapi.com/products/1')
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
            expect(response.body.id).to.equal(1);
        });

    });

    it('POST method', () => {

        cy.request({
            method: 'POST', 
            url: 'https://fakestoreapi.com/products', 
            body: JSON.stringify({
                title: 'API Test',
                price: 10,
                description: 'This product is to do API testing',
                image: 'https://google.com',
                category: 'Tests'
            })
        })

        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.body).to.not.be.null;
        });

    });

});