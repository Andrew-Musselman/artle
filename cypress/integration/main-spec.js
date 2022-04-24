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
    it('As a User, I should be able to guess the artist based on the image', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
            .get('input[name="guess"]')
            .should('have.attr', 'placeholder', 'Guess')
            .type('Picasso')
            .should('have.value', 'Picasso')
    })
    it('As a user, I should be able to click the guess button after typing in a guess', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Picasso')
        .get('button').click()
    })
    it('As a user, after an incorrect guess, I should be able to click the dots under the image to view another image', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Picasso')
        .get('button').click()
        .get('div[class="slide-show-dot"]')
        .last()
        .get('img').should('be.visible')
    })
    it('As a user, if I guess incoreectly the game should be over', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Picasso')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Monet')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Warhol')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Manet')
        .get('button').click()
        .get('input[name="guess"]')
        .type('wood')
        .get('button').click()
        .get('input[name="guess"]')
        .type('hopper')
        .get('button').click()
        .get('h2').should('contain', 'You missed it this time')
    })
    it('After a lost game, a user should be able to see the correct artist and short bio', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Picasso')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Monet')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Warhol')
        .get('button').click()
        .get('input[name="guess"]')
        .type('Manet')
        .get('button').click()
        .get('input[name="guess"]')
        .type('wood')
        .get('button').click()
        .get('input[name="guess"]')
        .type('hopper')
        .get('button').click()
        .get('h3').should('contain', 'Auguste Renoir')
        .get('p').should('contain', 'French, Limoges 1841–1919 Cagnes-sur-Mer')
    })
    it('As a user, if I guess correctly the game should end and I should see the artist and bio and winning message', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Renoir')
        .get('button').click()
        .get('h2').should('contain', 'Congrats, you got it')
        .get('h3').should('contain', 'Auguste Renoir')
        .get('p').should('contain', 'French, Limoges 1841–1919 Cagnes-sur-Mer')
    })
    it('As a user, I should be able to type the artists full name, or just last name and still be correct', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 200,
            fixture: 'objectIds.json'
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 200,
            fixture: 'objects'
        })
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Renoir')
        .get('button').click()
        .get('h2').should('contain', 'Congrats, you got it')
        cy.visit('http://localhost:3000/')
        .get('input[name="guess"]')
        .type('Auguste Renoir')
        .get('button').click()
        .get('h2').should('contain', 'Congrats, you got it')
    })
    it('As a user, I should see an error message if there is an error with the network request', () => {
        cy.intercept('GET', 'https://collectionapi.metmuseum.org/public/collection/v1/search*', {
            statusCode: 500,
            ok: false
        })
        cy.intercept('GET','https://collectionapi.metmuseum.org/public/collection/v1/objects/*', {
            statusCode: 500,
            ok: false
        })
        cy.visit('http://localhost:3000/')
        .get('h2').should('contain', 'There\'s a snake in my boot')
    })
})