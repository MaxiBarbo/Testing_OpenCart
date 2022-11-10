describe('Casos de Pruebas ejecutados', () => {

    beforeEach(() => {
        cy.visit('https://demo.opencart.com/index.php?route=common/home&language=en-gb')

      })

    it('Registro_001 Registro exitoso de usuario', ()=>{ 
      cy.contains('My Account').click()
      cy.contains('Register').click()
      cy.get('#input-firstname').type('juan')
      cy.get('#input-lastname').type('lopez')
      cy.get('#input-email').type('juan@gmail.com')
      cy.get('#input-password').type('abcd1234')
      cy.get('#input-newsletter-yes').click()
      cy.get('.float-end > .form-check > .form-check-input').click()
      cy.contains('Continue').click()
      cy.get(':nth-child(2) > .dropdown').contains('Juan')
    })

    // it('Registro_002 Registro con campos de datos Vacíos', () => {
        
    // });

    // it('Registro_003 Validación de email', () => {
        
    // });

})