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
    get searchKeywordInput(){
        return $('input[id="search_keywords"]');
    }
    get facebookLink(){
        return $('//nav[@class="main_menu"]//a[@title="Facebook"]');
    }

    async scrollDown () {
        await this.copyrightSpan.scrollIntoView();
    }

    async validateBottomPage(){
        await this.copyrightSpan.isDisplayed();
    }

    async isNowHiringButtonExist(){
        await this.nowHiringButton.isEnabled();
        await this.nowHiringButton.isDisplayed();
        return this.nowHiringButton.isExisting();
    }

    async clickOnTab(page){
        await this.menuTab(page).isEnabled();
        await this.menuTab(page).isDisplayed();
        await this.menuTab(page).click();
        await browser.pause(500);
    }

    async clickOnLocation(location){
        await this.menuLocation(location).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        await browser.pause(500);
        await this.menuLocation(location).click();
        return browser.getUrl();
    }

    async getContentTitle(title){
        const titles = await browser.$$('//div[@class="container"]/section[@class="av_textblock_section "]//h2').map(x => x.getText());
        const contentTitle = titles.filter(x => x == title);
        return contentTitle.toString();
    }

    async getTextBloc(block){
        const textBlocks = await browser.$$('//section/div[h3/b][p]').map(x => x.getText());
        const textBlock = textBlocks.filter(x => x.includes(block));
        return textBlock.toString();
    }

    async searchKeyword(keyword){
        await this.searchKeywordInput.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        await this.searchKeywordInput.setValue(keyword);
        await this.searchKeywordInput.keys('Enter');
        return await browser.$('//form//div[@class="agent_showing_jobs wp-job-manager-showing-all"]/span').getText();
    }

    async clickOnFacebookLink(page){
        await this.facebookLink.isDisplayed();
        await this.facebookLink.isEnabled();
        await this.facebookLink.click();
        await browser.pause(5000);
        await browser.switchWindow(page);
        await browser.pause(5000);
    }
}

module.exports = new FocusPage();