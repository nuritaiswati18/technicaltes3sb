describe('Login',() => {

//const { filter } = require("cypress/types/bluebird")

  
        it ('Login with valid credential', function(){
  
            //visit web
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(6000)
  
            //verify halaman Login
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
            
             //input email
             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')
  
            //input password
             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  
             //click continue
             cy.get('.oxd-button').click({force: true})
  
             // verify user direct to dashboard
             cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

             //verify account name
             cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-userarea > ul > li > span > p').should('have.text', 'Johny Deep')
  
        })
        
        it ('Login with invalid password', function(){

            //visit web
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(6000)
  
            //verify halaman Login
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
            
             //input email
             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  
            //input password
             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
  
             //click continue
             cy.get('.oxd-button').click({force: true})
  
             // verify user get error message
             cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
  
        })

        it ('Login with unregistered username', function(){

            //visit web
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(6000)
  
            //verify halaman Login
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
            
             //input email
             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
  
            //input password
             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
  
             //click continue
             cy.get('.oxd-button').click({force: true})
  
             // verify user get error message
             cy.get('.oxd-alert-content > .oxd-text').should('have.text','Invalid credentials')
  
        })

        it ('Login without input username', function(){

            //visit web
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(6000)
  
            //verify halaman Login
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
            //input password
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
  
            //click continue
            cy.get('.oxd-button').click({force: true})
  
            // verify user get error message
            cy.get('.oxd-input-group > .oxd-text').should('have.text','Required')
  
        })

        it ('Login without input password', function(){

            //visit web
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.wait(6000)
  
            //verify halaman Login
            cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
            //input email
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin123')
  
            //click continue
            cy.get('.oxd-button').click({force: true})
  
            // verify user get error message
            cy.get('.oxd-input-group > .oxd-text').should('have.text','Required')
  
        })

  })

describe('Apply Leave',() => {
  
    it ('Apply Leave without select Partial Days', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2023-11-20')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2023-11-20')

        //click close calendar start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
        
        //select end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{backspace}', {force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2023-11-21')
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').should('have.value','2023-11-21')
        
        //click close calendar end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
 
        //input comment
        cy.get('.oxd-textarea').type('acara keluarga')

        //click apply
        cy.get('.oxd-button').click()
        cy.wait(5000)

    })

    it ('Apply Leave Spesific Time', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2023-11-22')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2023-11-22')

        //click close calendar start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
        
        //select end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{backspace}', {force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2023-11-22')
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').should('have.value','2023-11-22')
        
        //click close calendar end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
 
        //click dropdown partial days
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div').click()

        //select Spesific Time
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(4) > span').click()

        //input start time
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-time-input > input').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-time-picker > div.oxd-time-hour-input > i.oxd-icon.bi-chevron-down.oxd-icon-button__icon.oxd-time-hour-input-down').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-time-input > input').should('have.value','08:00 AM')

        //input end time
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-input > input').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-picker > div.oxd-time-hour-input > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-picker > div.oxd-time-hour-input > input').type('{backspace}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-picker > div.oxd-time-hour-input > input').type('12')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-picker > div.oxd-time-period-input > div:nth-child(2) > input[type=radio]').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(3) > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-time-input > input').should('have.value','12:00 PM')

        //input comment
        cy.get('.oxd-textarea').type('acara keluarga')

        //click apply
        cy.get('.oxd-button').click()
        cy.wait(5000)

    })


    it ('Select End Time before start date', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2023-11-20')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2023-11-20')

        //click close calendar start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
        
        //select end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{backspace}', {force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2022-11-18')
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').should('have.value','2022-11-18')
        
        //click close calendar end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
 
           //click apply
       cy.get('.oxd-button').click()
       cy.wait(2000)

        //verify error message
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > span').should('have.text', 'To date should be after from date')

    })

    it ('Apply Leave without input mandatory field', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

        //click apply
        cy.get('.oxd-button').click()
        cy.wait(2000)

        //verify error message leave type
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > span').should('have.text', 'Required')

        //verify error message start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > span').should('have.text', 'Required')

        //verify error message end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > span').should('have.text', 'Required')

    })

    it ('Input invalid format date', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('20-11-2023')
 
       //click apply
       cy.get('.oxd-button').click()
       cy.wait(2000)

       //verify error message invalid format date
         cy.get(':nth-child(1) > .oxd-input-group > .oxd-text').should('have.text', 'Should be a valid date in yyyy-mm-dd format')
 
    })

    it ('Apply Leave more than leave balance', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2023-11-20')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2023-11-20')

        //click close calendar start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
        
        //select end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{backspace}', {force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2023-12-21')
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').should('have.value','2023-12-21')
        
        //click close calendar end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
 
        //input comment
        cy.get('.oxd-textarea').type('acara keluarga')

        //click apply
        cy.get('.oxd-button').click()
        cy.wait(2000)

        //verify error message balance
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > p').should('have.text', 'Balance not sufficient')

    })

    it ('overlapping leave request', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //click tab Apply
         cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-item').click()

         //verify Apply Leave page
         cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Apply Leave')

         //click dropdown leave type
         cy.get('.oxd-select-text--after > .oxd-icon').click()
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(2)').click()

         //select start date
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').type('2023-11-20')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > input').should('have.value', '2023-11-20')

        //click close calendar start date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
        
        //select end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{selectAll}', {force:true})
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('{backspace}', {force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').type('2023-11-21')
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input').should('have.value','2023-11-21')
        
        //click close calendar end date
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-date-input-calendar > div > div:nth-child(4) > div > div.oxd-date-input-link.--close').click()
 
        //input comment
        cy.get('.oxd-textarea').type('acara keluarga')

        //click apply
        cy.get('.oxd-button').click()
        cy.wait(5000)

        //verify overlapping
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > h6').should('have.text', 'Overlapping Leave Request(s) Found')

    })




})

describe('Cancel Leave',() => {
  
    it ('Cancel Leave', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Leave
         cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span').click()

         //verify user direct to menu Leave
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Leave')

         //delete filter status
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span:nth-child(1) > i').click({force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span:nth-child(1) > i').click({force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span:nth-child(1) > i').click({force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span:nth-child(1) > i').click({force:true})
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span:nth-child(1) > i').click({force:true})

         //click filter status
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-select-text.oxd-select-text--active.oxd-select-text--error > div.oxd-select-text-input').click({force:true})

         //select status pending approval
         cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(3) > span').click()

        //verify status filter
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(3) > div > div:nth-child(2) > div > div.oxd-multiselect-chips-area > span').should('have.text', 'Pending Approval ')
 
        //click Search
        cy.get('.oxd-form-actions > .oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click({force:true})
        cy.wait(5000)

        //click Search
        cy.get('.oxd-form-actions > .oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click({force:true})
        cy.wait(5000)

        //click cancel
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 10%;"] > .oxd-table-cell-actions > .oxd-button').click()
        cy.wait(2000)
    })

})

describe(' Personal Details',() => {
  
    it ('Update Personal Details', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu My Info
         cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()

         //verify personal detail page
         cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details')
        
         //edit middle name
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.wait(2000)
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.wait(2000)
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Jonathan')
         cy.wait(2000)
         

         //edit nickname
         cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('John', {force:true})

        //edit other ID
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0782A', {force:true})
        

        //select gender
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click({force:true})
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click({force:true})

        //click save
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(3000)

        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(1) > div.oxd-grid-1.orangehrm-full-width-grid > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input').should('have.value','Jonathan')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(1) > div.oxd-grid-3.orangehrm-full-width-grid > div > div > div:nth-child(2) > input').should('have.value','John')
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > input').should('have.value','0782A')

    })


    it ('Remove mandatory field', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu My Info
         cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()

         //verify personal detail page
         cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details')
        cy.wait(3000)

        //remove first name
         cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})

         //remove last name
         cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})

        //click save
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
        cy.wait(3000)

        //verify error message
        cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('have.text', 'Required')
        cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('have.text', 'Required')

    })


})

describe(' Contact Details',() => {
  
    it ('Update Contact Details', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu My Info
         cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()

         //click menu Contact Details
         cy.get(':nth-child(2) > .orangehrm-tabs-item').click({force: true})

         //verify contact details page
         cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .orangehrm-main-title').should('have.text', 'Contact Details')

         //input street 1
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jalan Purwasari No 1')

         //input province
         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jawa Barat')
         cy.wait(2000)

         //input postal code
         cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('41361')

         //input city
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Karawang')

         //input mobile phone
         cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force:true})
         cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force:true})
         cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('089452617261')

         //input work email
         cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{selectAll}', {force: true})
         cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('{backspace}', {force: true})
         cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('johny.deep@orange.id')
        cy.wait(1000)
        
         //click save
         cy.get('.oxd-form-actions > .oxd-button').click()

    })

})

describe('Job Title',() => {
  
    it ('Update Contact Details', function(){

        //visit web
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(6000)

        //verify halaman Login
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > h5').should('have.text','Login')
        
         //input email
         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

        //input password
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

         //click continue
         cy.get('.oxd-button').click({force: true})

         // verify user direct to dashboard
         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')

         //click menu Admin
         cy.get(':nth-child(1) > .oxd-main-menu-item').click()

         //click tab Job Title
         cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li.--active.oxd-topbar-body-nav-tab.--parent > ul > li:nth-child(1) > a').click()

        //verify job title page
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div.orangehrm-header-container > h6').should('have.text', 'Job Titles')

        //click button add job title
        cy.get('.oxd-button > .oxd-icon').click({force:true})

        //verify add job title page
        cy.get('.orangehrm-card-container > .oxd-text--h6').should('have.text', 'Add Job Title')

        //input job title
        cy.get(':nth-child(2) > .oxd-input').type('Quality Control Specialist')

        //click button save
        cy.get('.oxd-button--secondary').click({force:true})
        cy.get('.oxd-button--secondary').click({force:true})
        cy.wait(2000)

    })

})