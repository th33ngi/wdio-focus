const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GooglePage extends Page {
    /**
     * selectors using getter methods
     */
    get searchInput() {
        return $('textarea[name="q"');
    }
    get searchButton() {
        return $('input[name="btnK"');
    }
    urlHref(url) {
        return $(`//a[@href='${url}' and h3[text()="Focus Services – Beyond Expectations"]]`);
    }

    async search (phrase) {
        await this.searchInput.isDisplayed();
        await this.searchInput.setValue(phrase);
        await browser.pause(500);
        await this.searchButton.click();
    }

    async verifyUrl (url) {
        await this.urlHref(url).isDisplayed();
        await this.urlHref(url).isEnabled();
        await this.urlHref(url).click();
    }

    
}

module.exports = new GooglePage();