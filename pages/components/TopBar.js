export default class TopBar {
    async isTopBarDisplayed() {
        await page.waitForSelector('div[data-id="6d9abfaa"]');
        await page.waitForSelector(".login.top_bar_item");
    };
    async clickSignInBtn() {
        await page.click(".login.top_bar_item");
    };
    async wait(milliseconds) {
        return new Promise(r => setTimeout(r, milliseconds));
    };
}