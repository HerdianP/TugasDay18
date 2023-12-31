describe('Login Auth', () => {
  it('sukses_login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('.title').should('have.text', 'Products')
  })
  it('gagal_login', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("xxx_user")
    cy.get('[data-test="password"]').type("xxx_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })
})