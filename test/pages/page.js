/**
* page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param url path of the sub page (e.g. /path/to/page.html)
    */
     constructor(selector, index) {
        this.selector = selector;
        this.index = index;
        this.webElement = false;
    }

    async action(actionName) {
        if (typeof(this.selector) !== "undefined") this.webElement = this.index ? $$(this.selector)[this.index] : $(this.selector);
    }

    async url(url){
        let actionName = `ACCESSING THE URL ${url}`;
        try{
            await this.action();
            await browser.url(`${url}`);
            let result = await browser.getUrl();
        } catch(error){
            console.error(error.stack);
            throw error;
        }
    }
}