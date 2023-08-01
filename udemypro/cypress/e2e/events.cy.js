describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000') 
    });
  
    it('displays the correct title and meta description', () => {
      cy.title().should('contain', 'Events APP');
      cy.get('meta[name="description"]').should(
        'have.attr',
        'content',
        'Find various events going to be held'
      );
    });
  
    it('displays a list of events', () => {
        cy.get('.event-item') 
          .should('have.length.greaterThan', 0);
      });``
  });