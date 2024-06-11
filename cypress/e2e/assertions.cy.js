describe('Assertions', () => {
    it('Assertions implicítas', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // Should, and
      /*   cy.url().should('include', 'orangehrmlive')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'opensource') */

        // DRY - Dont repeat Yourself

        cy.url().should('include', 'orangehrmlive')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'opensource')
    })
})