Feature: Movie Details Page

    Scenario: Validate the Director is Matt Reeves & and than Robert Pattison is the actor
        Given I am on the home page
        When on the navbar I search "The Batman"
        When on the list page click "The Batman 2022"
        Then verify if we are in thebatman page
        And verify if the Director is "Matt Reeves"
        And verify if the actor "Robert Pattinson"
    
    # Scenario: Validate the IMDB Ranking is 8.1 Stars
    #     Given I am on the home page
    #     When on the navbar I search "The Batman"
    #     Then I click the option "The Batman 2022" 
    #     And verify if we are in "The Batman 2022" the page
    #     And validate the ranking in the IMDB is "8.1 Stars"

    # Scenario: Validate that the movie genres are "Action", "Crime" & "Drama"
    #     Given I am on the home page
    #     When on the navbar I search "The Batman"
    #     Then I click the option "The Batman 2022"
    #     And verify if we are in "The Batman 2022" the page 
    #     And validate that the movie genres are "Action"
    #     And validate that the movie genres are "Crime"
    #     And validate that the movie genres are "Drama"
