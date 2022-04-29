const { Given, When, Then } = require("@wdio/cucumber-framework");

const NavBar = require("../page-objects/global/navbar");
const HomePage = require("../page-objects/home.page");
const movieResultPage = require("../page-objects/movie-result.page");
const batmanPage = require("../page-objects/batman.page");

// const pages = {
//     home: HomePage
// }

// Given(/^I am on the (\w+) page$/,
//     async (page) => await pages[page].open());

// //When(/^on the navbar I select category "(Todo|Títulos|Episodios de TV)"$/,
//    // async (category) => await NavBar.searchBar.selectCategory(category));

//    When(/^on the navbar I search "(\s+)"$/,
//     async (category) => await NavBar.searchBar.selectCategory(category));

// Then(/^I should see the category dropdown now matches "(Todo|Títulos|Episodios de TV)"$/,
//     async (category) => {
//         // This is a destructuring asignment
//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//         const { categoryDropdown} = NavBar.searchBar;
//         await categoryDropdown.waitForDisplayed({
//             timeout: 1000,
//             timeoutMsg: 'The Category dropdown was not displayed'
//         });
//         const text = await categoryDropdown.getText();
//         // Assertions docs: https://jestjs.io/docs/using-matchers
//         /**
//         * Why does this line doesn't use await?
//         * Answer: when selenium is consumed we send a HTTP request to the selenium API
//         *         this force the callback to go to the callback stack, forcing us to use async/await
//         * https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd
//         */
//         expect(text).toMatch(category);
//     });

// SCENARIO 1
const pages = {
  home: HomePage,
  batman: batmanPage,
  "the batman": batmanPage,
};

Given(/^I am on the (\w+) page$/, async (page) => await pages[page].open());

When(/^on the navbar I search "(.+)"$/, async (movie) => {
  await HomePage.search(movie);
});

// When(/^on the navbar I search "(.+)"$/, (movie)=> {
//   MovieList.rowHyperlink(movie)
// });

When(/^on the list page click "(.+) (\d+)"$/, async (movie, year) => {
  await movieResultPage.clickOnMovieResult(movie, year);
});

// When(/^on the list page click "(The Batman) (2022)"$/, (movie, year) => {
//    MovieList.movieLink(movie, year).click()
//  });

// Then(  /^verify if we are in (\w+) page$/, async (pages) => {await batmanPages[pages].open()})
Then(/^verify if we are in (.+) page$/, async (page) => {
  await pages[page].verifyPage();
});

Then(/^verify if the director is "(.+)"$/, async (directorName) => {
  await batmanPage.validateDirectorName(directorName);
});

Then(/^verify if the actor "(.+)"$/, async (actorName) => {
  await batmanPage.validateActorName(actorName)
});

// SCENARIO 2

Then(/^validate the ranking in the IMDB is "(.+)"$/, async (rank) => {
  await batmanPage.validateRank(rank)
});

//SCENARIO 3
Then(/^validate if movie has (.+)$/, (genre) => {
  batmanPage.validateGenre(genre);
});
