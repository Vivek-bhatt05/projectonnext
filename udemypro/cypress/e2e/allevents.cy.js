describe('Events Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/events');
    });
  
    it('displays the correct title and meta description', () => {
      cy.title().should('contain', 'All Events');
      cy.get('meta[name="description"]').should(
        'have.attr',
        'content',
        'Find various events going to be held'
      );
    });
  
    // it('displays the EventSearch component', () => {
    //   cy.get('[data-cy="event-search"]').should('be.visible');
    //   cy.get('[data-cy="year-select"]').should('be.visible');
    //   cy.get('[data-cy="month-select"]').should('be.visible');
    //   cy.get('[data-cy="submit-button"]').should('be.visible');
    // });

  
    it('displays a list of events', () => {
      cy.get('.event-item').should('exist');
      cy.get('.event-item').should('have.length.greaterThan', 0);
    });
  });