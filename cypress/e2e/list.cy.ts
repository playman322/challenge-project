describe('List Component', () => {
  beforeEach(() => {
    cy.visit('/list');
  });

  it('should display a search input field', () => {
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="text"]').should('have.attr', 'id', 'inputElement');
    cy.get('label[for="inputElement"]').should('have.text', 'Type here');
  });

  it('should display movie list when loaded', () => {
    cy.get('input[type="text"]').type('Conformist{enter}').then(() => {
      cy.get('app-movie-list').should('exist');
    })
  });

  it('should consist cards when loaded', () => {
    cy.get('input[type="text"]').type('Action{enter}').then(() => {
      cy.get('app-movie-list').each((card) => {
        cy.wrap(card).within(() => {
          cy.get('b').should('exist');
          cy.get('span').should('exist');
          cy.get('i').should('exist');
        });
      })
    })
  });

  it('should display loader while loading movie list', () => {
    cy.get('input[type="text"]').type('Action{enter}');
    cy.get('app-loader').should('exist');
    cy.get('app-movie-list').should('not.exist');
    cy.get('app-banner').should('not.exist');
  });

  it('should display "No Results" banner when no movies are found', () => {
    cy.get('input[type="text"]').type('qqweqwewqew{enter}').then(() => {
      cy.get('app-loader').should('not.exist');
      cy.get('app-movie-list').should('not.exist');
      cy.get('app-banner').should('contain.text', 'No Results! Use Search Bar!');
    })
  });
});
