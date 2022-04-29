Feature: Movie Genre
    Scenario: Validate that the movie genres are "Action", "Crime" & "Drama"
        Given I am on the home page
        When on the navbar I search "The Batman"
        Then on the list page click "The Batman 2022"
        And verify if we are in the batman page 
        And validate if movie has Acción
        And validate if movie has Crimen
        And validate if movie has Drama
        