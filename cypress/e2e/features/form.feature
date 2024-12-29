Feature: Form Fields

    @Test
    Scenario: Form Submission
        Given I navigate to the form
        When I complete all fields with name "<name>" password "<password>" drink "<drink>" color "<color>" automation "<automation>" email "<email>" message "<message>"
        When I submit the form
        Then Form is submitted successfully
        Examples:
            | name | password | drink  | color  | automation | email               | message                |
            | Jane | pass     | Water  | Red    | Yes        | jane@mailinator.com | This is a text message |