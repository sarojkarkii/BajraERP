

describe('Bajra ERP Test Suite', () => {
   
    it('Bajra LoginPage Test', () => {
      cy.visit('https://www.google.com')
      cy.get('[class="gLFyf gsfi"]').type('Anime')
      cy.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[1]/div').click()

    })
  
    })
  