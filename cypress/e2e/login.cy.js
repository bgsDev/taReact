/* eslint-disable no-undef */
/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when Email is empty
 *   - should display alert when password is empty
 *   - should display alert when Email and password are wrong
 *   - should display homepage when Email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });
  it('should display alert when Email is empty', () => {
    // klik tombol login tanpa mengisi username
    cy.get('button').contains(/^Login$/).click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });
  it('should display alert when password is empty', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('bgs@bgs.com');
    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Login$/).click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });
  it('should display alert when Email and password are wrong', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('bgs@bgs.com1');
    cy.get('input[placeholder="password"]').type('bgs@bgs.com1');
    cy.get('button').contains(/^Login$/).click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" must be a valid email');
    });
  });
  it('should display homepage when Email and password are correct', () => {
    // mengisi username
    cy.get('input[placeholder="Email"]').type('bgs@bgs.com');
    cy.get('input[placeholder="password"]').type('bgs@bgs.com');
    cy.get('button').contains(/^Login$/).click();
    cy.get('a').contains(/^Home$/).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});
