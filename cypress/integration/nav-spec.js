describe('Nav', () => {
    it('As a user, I should see the page title in the nav bar', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('h1').should('contain', 'ARTLE')
    })
    it('As a user, I should be able to click the about link', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('p')
        .first()
        .click()
        .url()
        .should('eq', 'http://localhost:3000/About')
        .get('div[class="about-container"]')
        .should('be.visible')
    })
    it('As a user, I should be able to click the game stats link', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('p')
        .last()
        .click()
        .url()
        .should('eq', 'http://localhost:3000/GameStats')
        .get('div[class="stat-container"]')
        .should('be.visible')
    })
})