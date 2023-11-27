describe('Submit form',() => {

  
        it ('Submit with valid data', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
            //select answer question no 3
            cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click()
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording success submit
             cy.get('.-ai-365 > .text-format-content').should('have.text', 'Your response was submitted.')

        })
        
        it ('In point 3, user select "Other" answer without filling in the available fields', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
            //select answer question no 3 select others
            cy.get('.-ni-67 > .-a-79 > .-hE-80').click()
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording error message
             cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7').should('have.text', 'This question is required.')

        })

        it ('User submit for without input full name', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
            //select answer question no 3
            cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click()
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording error message
             cy.get('#ErrorMsgId_r9f62b2a1fbe746ab953326f6937d4e73 > span').should('have.text', 'This question is required.')

        })
        it ('User submit form without input phone number', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
            //select answer question no 3
            cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click()
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

              //verify wording error message
              cy.get('#ErrorMsgId_r5c2dd5cf6732459894e3d1cb504c8110 > span').should('have.text', 'This question is required.')

        })

        it ('User submit form without select answer to question  "Do you think your product or service is affordable or expensive?"', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

               //verify wording error message
               cy.get('#ErrorMsgId_r8bc17b753f0048ecb03794ef45037bb7').should('have.text', 'This question is required.')

        })

        it ('User submit form without input rating value', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
            //select answer question no 3
            cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click()
  
             // input date
             cy.get('#DatePicker0-label').click()
             cy.get(':nth-child(7) > :nth-child(3) > .dayButton-336').click()

             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording error message
             cy.get('#ErrorMsgId_r9f97f2550332479a8fdd2914bd99bc1d > span').should('have.text', 'This question is required.')

        })

        it ('User submit form without input date', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
            //input full name
            cy.get(':nth-child(1) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('John Doe')
            
             //input phone number
             cy.get(':nth-child(2) > .-cn-46 > .-a-50 > .-iP-61 > .-_F-60').type('08142615261')
  
            //select answer question no 3
            cy.get(':nth-child(1) > div > .--x-77 > .-a-79 > .-hE-80').click()
  
             //rating
             cy.get('#question-list > div:nth-child(4) > div.-cn-46 > div > div > div:nth-child(5) > span > span').click()
  
             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording error message
             cy.get('#ErrorMsgId_r1abee94394494318b1e34a419838e56c > span').should('have.text', 'This question is required.')

        })

        it ('Submit without input mandatory data', function(){
  
            //visit web
            cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
            cy.wait(2000)
  
             //click submit
             cy.get('#form-main-content1 > div > div > div.css-39 > div.css-222 > div > button').click()

             //verify wording error message
             cy.get('.--Z-230').should('have.text', '5 question(s) need to be completed before submitting: Question 1,Question 2,Question 3,Question 4,Question 5.')

        })
 
    })
