Feature: Movie Genre
    Scenario: Validate that the movie genres are "Action", "Crime" & "Drama"
        Given I am on the home page
        When on the navbar I search "Batman 2022"
        Then on the list page click "Batman 2022"
        And verify if we are in thebatman page 
        And validate if movie has genre <name> and number <number>

Examples:
| name | number |
| Action | 1 | 
| Crime | 2 |
| Drama | 3 |