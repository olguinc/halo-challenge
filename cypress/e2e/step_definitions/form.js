import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 
import form from "../../pages/FormPage";

Given("I navigate to the form", () => {
    form.visit();
});

When("I complete all fields with name {string} password {string} drink {string} color {string} automation {string} email {string} message {string}", (name, password, drink, color, automation, email, message) => {
    form.fillForm(name, password, drink, color, automation, email, message);
});

When("I submit the form", () => {
    form.submit();
});

Then("Form is submitted successfully", () => {
    form.verifySubmittedForm();
});