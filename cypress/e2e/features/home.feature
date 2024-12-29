Feature: Home Navigation

  Background: Navigate to the Website
    Given I navigate to the Website

  @Test
  Scenario: Form Fields navigation
    When I select Form Fields button
    Then User is redirected to correct url

