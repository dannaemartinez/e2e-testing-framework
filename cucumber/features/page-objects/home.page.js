const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }


    get inputSearchBar(){
        return $('.imdb-header-search__input')
    }

    get btnSearch(){
        return $('button[id="suggestion-search-button"]')
    }

    async search(searchValue){
        await this.inputSearchBar.setValue(searchValue);
        await this.btnSearch.click();
    }

}

module.exports = new HomePage();
