const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BatmanPage extends Page {
  uriPage = "title/tt1877830/?ref_=fn_al_tt_1";
  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open(this.uriPage);
  }

  async verifyPage() {
    await super.verifyPage(this.uriPage);
  }

  linkGenre(genre) {
    const chipsGenre = $(`.sc-16ede01-4`);
    return chipsGenre.$(`.sc-16ede01-3`).$(`span=${genre}`);
  }

  get directorName() {
    return $(".ipc-metadata-list-item__list-content-item");
  }

  get actorName(){
      return $('[data-testid=title-cast-item__actor]')
  }

  get movieRank(){
      return $('.sc-7ab21ed2-1')
  }

  async validateGenre(genre) {
    return (await this.linkGenre(genre)) !== undefined;
  }

  async validateDirectorName(directorName) {
    return (await this.directorName.getText()) == directorName;
  }

  async validateActorName(actorName) {
    return (await this.actorName.getText()) == actorName;
  }

  async validateRank(rank){
      return (await this.movieRank.getText()) == rank;
  }
}

module.exports = new BatmanPage();
