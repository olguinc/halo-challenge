import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 
import home  from "../../pages/HomePage";

Given("I navigate to the Website", () => {
    home.visit();
});

When("I select Form Fields button", () => {
    home.selectForm();
});

Then("User is redirected to correct url", () => {
    home.verifyUrl();
});

