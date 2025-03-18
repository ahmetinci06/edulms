it('titles are correct', () => {
    const page = cy.visit("/");
  
    page.get('title').should('have.text', 'EduLMS')
    page.get('h1').should('have.text', '\nTo get started, open the src/pages directory in your project.\n');
  });