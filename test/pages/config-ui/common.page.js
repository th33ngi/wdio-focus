const Page = require('../page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommonPage extends Page {
    /**
         * methods to encapsule automation code to interact with the page
         */
    async validatePageTitle(title){
        const pageTitle = await browser.getTitle();
        if(pageTitle != title){
            throw new Error(`The page title: ${pageTitle} is not the expected one: ${title}`);
        }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async url(url) {
        return await super.url(url);
    }
}

module.exports = new CommonPage();