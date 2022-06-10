
describe('Bajra ERP Test Suite', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('Bajra LoginPage Test', () => {
    cy.url().should('contain','bajratechnologies')
    cy.xpath('//input[@id="login"]').type(Cypress.env('email'))
    cy.xpath('(//input[@id="password"])[1]').type(Cypress.env('password'))
    cy.xpath('//button[normalize-space()="Log in"]').click()
    //cy.title().should('eq', 'BizOS')
    //cy.xpath('//button[normalize-space()="Mark all read"]').should('include.text', 'Mark all read')
    cy.get('.oe_topbar_name').should('include.text', Cypress.env('name'))

});

it('Reset Password',()=>{
  cy.xpath('//a[normalize-space()="Reset Password"]').click()
  cy.xpath('//input[@id="login"]').type(Cypress.env('email1'))
  cy.get('button[type="submit"]').click()
  cy.get('a[href="/web/login"]').click()
});

})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

