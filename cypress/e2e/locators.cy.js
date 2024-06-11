describe('CSS Locators', () => {

    beforeEach( () => {
        //Visitar a página
        cy.visit('https://www.saucedemo.com/v1/index.html')
        //Preencher o campo usarname
        cy.get('input#user-name').type('standard_user')
        //Preencher o campo password
        cy.get('input[placeholder="Password"]').type('secret_sauce')
        //Clicar no botão login
        cy.get('input.btn_action').click()
    })

    it('Verificar se estou na página correta', () =>{
        cy.xpath('/html/body/div[1]/div[2]/div[2]/div/div[1]/div[3]/div').contains('Products')
    })

})