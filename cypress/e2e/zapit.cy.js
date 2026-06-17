describe('teste login', () => {
  it('login com sucesso', () => {
    cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')
    cy.get('#mat-input-0').type('leandro_adm')
    cy.get('#mat-input-1').type('1234')
    cy.get('.submit-button').click()
  })
})

describe("login com campos vazios", () => {
  it('falha no login', () => {
    cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')
    cy.get('.submit-button').click()
    cy.get('.flex-center-h > .mat-mdc-form-field > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper').should('contain', 'Campo obrigatório')
    cy.get(':nth-child(2) > .mat-mdc-form-field > .mat-mdc-form-field-subscript-wrapper > .mat-mdc-form-field-error-wrapper').should('contain', 'Campo obrigatório')
  }) })

describe("login com senha vazia", () => {
  it('falha no login', () => {
    cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')
    cy.get('#mat-input-0').type('leandro_adm')
    cy.get('.submit-button').click()
  }) })

describe("login com usuário vazio", () => {
  it('falha no login', () => {
    cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')   
    cy.get('#mat-input-1').type('1234')
    cy.get('.submit-button').click()
  }) })

  describe("login com senha incorreta", () => {
    it('falha no login', () => {
      cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')
      cy.get('#mat-input-0').type('leandro_adm')
      cy.get('#mat-input-1').type('12345')
      cy.get('.submit-button').click()
    }) }) 

    describe("login com usuário incorreto", () => {
      it('falha no login', () => {
        cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth') 
        cy.get('#mat-input-0').type('leandro_adm1')
        cy.get('#mat-input-1').type('1234')
        cy.get('.submit-button').click()
        cy.get('.texto-snackbar').should('contain', 'Usuário não encontrado')
      })})
     

      describe("Cadastrar novo usuário", () => {
        it('novo usuário cadastrado', () => {
          cy.visit('https://zapit-plurisdev.plurismidia.com.br/#/auth')
          cy.get('#mat-input-0').type('leandro_adm')
          cy.get('#mat-input-1').type('1234')
          cy.get('.submit-button').click()
          cy.get('.header-sidenav > .mdc-icon-button > .mat-icon').click()
          cy.get('span.ng-tns-c3884707876-6 > .mat-icon').click()
          cy.get('.ng-tns-c3884707876-16.ng-tns-c3884707876-6 > .mat-mdc-nav-list > .custom-item > .mdc-list-item__content').click()
          cy.get('.header-sidenav > .mdc-icon-button > .mat-icon').click()
          cy.get('.mat-content').click()
          cy.get('#mat-input-15').click().type('teste adm')
          cy.get('#mat-input-16').click().type('testeadm')
          cy.get('.mat-mdc-select-placeholder').click()
          cy.get('#mat-option-31').click()
          cy.get('#mat-input-17').click().type('teste@teste')
          cy.get('#mat-input-18').click().type('11974515678')
          cy.get('.primario-sm').click()
        })})