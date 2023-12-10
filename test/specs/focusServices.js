const commonPage = require('../pages/config-ui/common.page');
const googlePage = require('../pages/google.page');
const focusPage = require('../pages/focus.page');

let testProduct = 'Config-Ui + Focus:';

describe(testProduct, () => {
    beforeAll(async () => {
        console.log("Test is using the following Config UI URL: ", "https://www.google.com/");
    });
    afterAll(() => {
        console.log("Test suite execution is finished.");
    });
    it('Go to "www.google.com" Page: Should go to "www.google.com" page: Go to "www.google.com" Page successfully', async () => {
        await commonPage.url("https://www.google.com/");
        await commonPage.validatePageTitle("Google");
    });
    it(`Type in Google’s search “Focus Services”: Should type “Focus Services” in Google’s search: Type in Google’s search “Focus Services” successfully`, async () => {
        const phrase = "Focus Services";
        const value = await googlePage.typePhrase(phrase);
        await expect(value).toBe(phrase);
    });
    it('Click on “Search button”: Should click on “Search button”: Click on “Search button” successfully', async () => {
        await googlePage.clickOnSearchButton();
        await commonPage.validatePageTitle("Focus Services - Google Search");
    });
    it('Verify "https://www.focusservices.com" URL in the search: Should verify URL exists in the search: Verify URL exists in the search successfully', async () => {
        const url = "https://www.focusservices.com/";
        const isExistingUrl = await googlePage.verifyUrl(url);
        await googlePage.clickOnUrl(isExistingUrl, url);
        await commonPage.validatePageTitle("Focus Services – Beyond Expectations");
    });
    it('Scroll down to the bottom of the Focus Services page: Should scroll down to the bottom of the page: Scroll down to the bottom of the Focus Services page successfully', async () => {
        await focusPage.scrollDown();
        await focusPage.validateBottomPage();
    });
    it('Verify the “Now Hiring” button exists into this page: Should verify the “Now Hiring” button into this page: Verify the “Now Hiring” button exists into this page successfully', async () => {
        const isExisting = await focusPage.isNowHiringButtonExist();
        await expect(isExisting).toBeTrue();
    });
    it('Click on “Locations” Tab: Should click on “Locations” Tab: Click on “Locations” Tab successfully', async () => {
        await focusPage.clickOnTab("Locations");
        await commonPage.validatePageTitle("Locations – Focus Services");
    });
    it('Locate North America Link: Should locate North America Link: Locate North America Link successfully', async () => {
        const locationLink = await focusPage.clickOnLocation("North America");
        await expect(locationLink).toBe("https://www.focusservices.com/locations/#north-america");
    });
    it('Click on Central America location: Should click on Central America location: Click on Central America location successfully', async () => {
        const locationLink = await focusPage.clickOnLocation("Central America");
        await expect(locationLink).toBe("https://www.focusservices.com/locations/#central-america");
    });
    it('Validate “El Salvador” title is displayed on the page: Should “El Salvador” title be displayed on the page: Validate “El Salvador” title is displayed on the page successfully', async () => {
        const title ="El Salvador";
        const value = await focusPage.getContentTitle(title);
        await expect(value).toBe(title);
    });
    it('Click on Asia Location. Verify if exist the “Bacolod City, Philippines” text block: Should navigate to Asia location and verify “Bacolod City, Philippines” text block: Click on Asia Location. Verify if exist the “Bacolod City, Philippines” text block successfully', async () => {
        const title = "Philippines";
        const block = "Bacolod City, Lacson Street";
        const locationLink = await focusPage.clickOnLocation("Asia");
        const contentTitle = await focusPage.getContentTitle(title);
        const value = await focusPage.getTextBloc(block);

        await expect(locationLink).toBe("https://www.focusservices.com/locations/#asia");
        await expect(contentTitle).toBe(title);
        await expect(value).toContain(block);
    });
    it('Click on the “Careers” Tab: Should click on the “Careers” Tab: Click on the “Careers” Tab successfully', async () => {
        await focusPage.clickOnTab("Careers");
        await commonPage.validatePageTitle("Careers – Focus Services");
    });
    it('Go to keywords filter and search “Generalist”: Should go to keywords filter and search “Generalist”: Go to keywords filter and search “Generalist” successfully', async () => {
        const results = await focusPage.searchKeyword("Generalist");
        await expect(results).toBe("Search completed. Found 0 matching record(s).");
    });
    it('Go to Facebook or Twitter button and click on it: Should go to Facebook or Twitter button and click on it: Go to Facebook or Twitter button and click on it successfully', async () => {
        const page = "Focus Services | Facebook";
        await focusPage.clickOnFacebookLink(page);
        await commonPage.validatePageTitle(page);
    });
});