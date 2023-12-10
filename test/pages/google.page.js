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

    async typePhrase (phrase) {
        await this.searchInput.isDisplayed();
        await this.searchInput.setValue(phrase);
        await browser.pause(100);
        return this.searchInput.getValue();
    }

    async clickOnSearchButton () {
        await this.searchButton.isDisplayed();
        await this.searchButton.click();
    }


    async verifyUrl (url) {
        await this.urlHref(url).isExisting();
        await this.urlHref(url).isDisplayed();
        await this.urlHref(url).isEnabled();
        return this.urlHref(url).isExisting();
    }

    async clickOnUrl (isExisting, url) {
        if(isExisting)
            await this.urlHref(url).click();
        else
            throw new Error(`The url: ${url} does not exist.`);
    }

    
}

module.exports = new GooglePage();