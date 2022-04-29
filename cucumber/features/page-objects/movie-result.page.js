const Page = require('./page')

class MovieResultPage extends Page {
  /**
   * overwrite specific options to adapt it to page object
   */
  open(queryValue) {
    return super.open("find?="+queryValue)
  }

  get findList(){
    return $('.findList')
  }

  movieLink(name, year){
    const movieResult = $(`.result_text*=(${year})`)
    return movieResult.$(`a=${name}`)
  }

  async clickOnMovieResult(name, year){
    await this.movieLink(name, year).click()
  }
}

module.exports = new MovieResultPage()
