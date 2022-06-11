describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('Essentials for a cold winter');
  })
}) 
