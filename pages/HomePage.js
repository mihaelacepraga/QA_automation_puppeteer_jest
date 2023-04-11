import BasePage from "./BasePage";

export default class HomePage extends BasePage {
   
    async visit() {
        await page.goto("https://www.ellemental.ro");
    };

    async isNavbarDisplayed() {
        await page.waitForSelector("#top_extra_container");
        await page.waitForSelector("#st_ma_2");
        await page.waitForSelector("#st_menu_7");
        await page.waitForSelector("#st_menu_9");
        await page.waitForSelector("#st_menu_11");
        await page.waitForSelector("#st_menu_12");
        await page.waitForSelector("#st_menu_13");
    };
    async getCount(selector) {
        const count = await page.$$eval(selector, items => items.length);
        return count;
    };

    async clickCosmeticsLink() {
        await page.click("#st_menu_2");
    };
    async clickAromatherapyLink() {
        await page.click("#st_menu_7");
    };
    async clickIngredientsLink() {
        await page.click("#st_menu_9");
    };
    async clickRecipesLink() {
        await page.click("#st_menu_11");
    };
    async clickNewsLink() {
        await page.click("#st_menu_12");
    };
    async clickOffersLink() {
        await page.click("#st_menu_13");
    };
    async getHeaderContent() {
        return page.$eval('span[class="header_icon_btn_text header_v_align_m"]', element => element.textContent);
    }
    
}