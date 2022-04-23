describe('Main', () => {
    it('As a user, I should see an image when the page loads', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('img').should('be.visible')
    })
})