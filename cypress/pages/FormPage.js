class FormPage {

    visit() {
        cy.visit("/form-fields/")
    }

    fillForm(name, password, drink, color, automation, email, message) {
        cy.get('#name-input').type(name);
        cy.get('[type="password"]').type(password);
        cy.get(`input[value="${drink}"]`).click();
        cy.get(`input[value="${color}"]`).click();
        cy.get("#automation").select(automation);
        cy.get('#email').type(email);
        cy.get('#message').type(message);
        return this;
    }

    submit() {
        cy.get("#submit-btn").click();
        return this;
    }

    verifySubmittedForm() {
        return cy.url().should('eq', 'https://practice-automation.com/form-fields/');
    }

}
const form = new FormPage();
export default form;