const commonPage = require('../pages/config-ui/common.page');
const googlePage = require('../pages/google.page');
const focusPage = require('../pages/focus.page');

let testProduct = 'Config-Ui + Focus:';

describe(testProduct, () => {
    beforeAll(async () => {
        console.log("Test is using the following Config UI URL: ", "https://www.google.com/");
    }); 
    afterAll(async () => {
        //await LoginPage.logout();
    });
    it('Navigate to Google Page: Should navigate to Google Page: Navigate to Google Page successfully', async () => {
        await commonPage.url("https://www.google.com/");
        await commonPage.validatePageTitle("Google");
    });
    it('Type "Focus Services" in Googles search: Should search on Google: Search "Focus Services" on Google successfully', async () => {
        await googlePage.search("Focus Services");
        await commonPage.validatePageTitle("Focus Services - Google Search");
    });
    it('Verify url on Googles search: Should verify url on Google: Verify url on Google successfully', async () => {
        await googlePage.verifyUrl("https://www.focusservices.com/");
        await commonPage.validatePageTitle("Focus Services – Beyond Expectations");
    });
    it('Scroll down to the bottom of the Focus Services page: Should scroll down to the bottom of the page: Scroll down to the bottom of the Focus Services page successfully', async () => {
        await focusPage.scrollDown();
        await focusPage.validateBottomPage();
    });
    it('Verify the “Now Hiring” button exists into this page: Should verify the “Now Hiring” button into this page: Verify the “Now Hiring” button exists into this page successfully', async () => {
        await focusPage.verifyIfNowHiringButtonExist();
    });
    it('Click on “Locations” Tab: Should click on “Locations” Tab: Click on “Locations” Tab successfully', async () => {
        await focusPage.navigateTo("Locations");
        await commonPage.validatePageTitle("Locations – Focus Services");
    });
    it('Locate North America Link: Should locate North America Link: Locate North America Link successfully', async () => {
        const locationLink = await focusPage.moveToLocation("North America");
        await expect(locationLink).toBe("https://www.focusservices.com/locations/#north-america");
    });
});