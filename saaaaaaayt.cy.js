describe('поиск ПИЦЦА', function () {

     it('ПИЦЦА русскими буквами', function () {
        cy.visit('https://www.bing.com/');
        cy.get('#sb_form_q').type('пицца');
        cy.get('#search_icon > svg').type('{enter}');
        cy.wait(5000);
        
        })


      it('ПИЦЦА латынскими буквами ', function () {
        cy.visit('https://www.bing.com/');
        cy.get('#sb_form_q').type('gbwwf').type('{enter}');
        cy.wait(7000);
        })
})