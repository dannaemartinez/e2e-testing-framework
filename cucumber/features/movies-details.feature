Feature: Movie Details Page

    Scenario: Validate the Director is Matt Reeves & and than Robert Pattison is the actor
        # Given I am on the home page
        # When on the navbar I search "The Batman"
        # And on the list page click "Batman 2022"
        # And verify if we are in the batman page 
        Given I am on the batman page
        Then verify if the director is "Matt Reeves"
        And verify if the actor "Robert Pattinson"


        
