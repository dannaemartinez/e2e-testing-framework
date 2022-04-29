Feature: Movie Details Page

    Scenario: Validate the Director is Matt Reeves & and than Robert Pattison is the actor
        Given I am on the home page
        When on the navbar I search "Batman 2022"
        And on the list page click "Batman 2022"
        Then verify if we are in thebatman page
        And verify if the director is "Matt Reeves"
        And verify if the actor "Robert Pattinson"
        Then I return to the home page


        
