Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });


describe('Pruebas automatizadas en DemoQA - Elements', () => {

  beforeEach(() => {
    cy.visit('/elements')
  })

  it('Pruebas en Text Box - Completar los campos', () => {
    cy.contains('li','Text Box').click()
    cy.get('input[id="userName"]').type('Leandro')
    cy.get('input[id="userEmail"]').type('prueba@prueba.com  ')
    cy.get('textarea[id="currentAddress"]').type('Calle Falsa 123')
    cy.get('#permanentAddress').type('Prueba QA')
    cy.get('button[id="submit"]').click()

  })

  it('Pruebas en Check Box - Hacer click en el check box', () =>{
    cy.contains('li','Check Box').click()
    cy.get('svg[class="rct-icon rct-icon-uncheck"]').click()
    cy.get('#result').should('be.visible')
  })

  it.only('Pruebas en Check Box - Hacer click en el check box', () =>{
    cy.contains('li','Check Box').click()
    cy.get('svg[class="rct-icon rct-icon-uncheck"]').click()
    cy.get('#result').should('be.visible')
    cy.get('svg[class="rct-icon rct-icon-expand-close"]').click()
  })
})
