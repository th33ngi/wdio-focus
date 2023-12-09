const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FocusPage extends Page {
    /**
     * selectors using getter methods
     */
    get copyrightSpan() {
        return $('//span[@class="copyright"]');
    }
    get nowHiringButton() {
        return $('//a/span[text()="Now Hiring!"]');
    }

    menuTab(page) {
        return $(`//a[span='${page}']`);
    }

    menuLocation(location) {
        return $(`//a[span='${location}']`);
    }


    async scrollDown () {
        await this.copyrightSpan.scrollIntoView();
    }

    async validateBottomPage(){
        await this.copyrightSpan.isDisplayed();
    }

    async verifyIfNowHiringButtonExist(){
        await this.nowHiringButton.isEnabled();
        await this.nowHiringButton.isDisplayed();
    }

    async navigateTo(page){
        await this.menuTab(page).isEnabled();
        await this.menuTab(page).isDisplayed();
        await this.menuTab(page).click();
        await browser.pause(1000);
    }

    async moveToLocation(location){
        await this.menuLocation(location).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        await browser.pause(1000);
        await this.menuLocation(location).click();
        return browser.getUrl();
    }

    
}

module.exports = new FocusPage();