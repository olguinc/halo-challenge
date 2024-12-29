class HomePage {

    visit() {
        cy.visit("/")
    }

    selectForm() {
        cy.get('[href="https://practice-automation.com/form-fields/"]').click();
        return this;
    }

    verifyUrl() {
        return cy.url().should('eq', 'https://practice-automation.com/form-fields/');
    }

}
const home = new HomePage();
export default home;