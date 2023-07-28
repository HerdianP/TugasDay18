describe('Cek Produk Auth', () => {
  it('cek_produk', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('#item_4_title_link > .inventory_item_name').click()
    cy.get('#back-to-products').should('have.text', 'Back to products')
  })
})