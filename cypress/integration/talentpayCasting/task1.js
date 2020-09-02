/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://email.hirer.s.seek.com.au/ls/click?upn=8bcFBCK-2Fq6LgMqnC2GsQJsJ7QGGXm7ntO8zupqeHZJus5V9bkCWVPwLLmpaCw-2F4YtqYf_zkyag5G-2FIOY1-2BeYT2pSF6o8BdhoFZPEPAq24umwS2ELmq2gZ90o8rLp2XYbuSjWasvA4pRlzWm4zowcLucRM82Ct8v47yamyr07BOzR3MAXU6BvQSBYRdcB6ojCg4o-2FCYB5ZB-2BAWbqSLIp4ryPvqHLw5ptplefiPWJQgExiDwCflD6uoaJD9shpqLYyF0FqPt0NzAkYnozbiOBtU9r3ekFyjjxRnZ8rw89SZinDU6kE-2F4cKFbuzDF9gunzRj87smEALSAWa9TQ8T-2Br5NQd9xF72VYCA1KyKlEN9h5rehoJA-3D')
    })

    it('login', () => {
        cy.get('#login_lock').type('logintalent*74c_')
        cy.get('.button_green').click()

        //Click I am talent
        cy.get('.container > :nth-child(3) > .button_green').click()

        //Click Join for Free
        cy.get('.ytBannerText > .button_grey').click()
      })

})
