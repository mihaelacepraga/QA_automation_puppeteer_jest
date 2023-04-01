import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    async visit(url) {
        // await page.setViewport({ width: 1600, height: 900})
        await page.goto(url);
        await page.waitForSelector("#st_menu_2");

    };

    async isNavbarDisplayed() {
        await page.waitForSelector("#top_extra_container");
        await page.waitForSelector("#st_ma_2");
        await page.waitForSelector("#st_menu_7");
        await page.waitForSelector("#st_menu_9");
        await page.waitForSelector("#st_menu_11");
        await page.waitForSelector("#st_menu_12");
        await page.waitForSelector("#st_menu_13");
        await page.waitForSelector("#st_menu_13");
    };
    async clickCosmeticsLink() {
        // await page.waitForSelector("#st_menu_2");
        await page.click("#st_menu_2");
    };
    async clickAromatherapyLink() {
        // await page.waitForSelector("#st_menu_7");
        await page.click("#st_menu_7");
    };
    async clickIngredientsLink() {
        // await page.waitForSelector("#st_menu_9");
        await page.click("#st_menu_9");
    };
    async clickRecipesLink() {
        // await page.waitForSelector("#st_menu_11");
        await page.click("#st_menu_11");
    };
    async clickNewsLink() {
        // await page.waitForSelector("#st_menu_12");
        await page.click("#st_menu_12");
    };
    async clickOffersLink() {
        // await page.waitForSelector("#st_menu_13");
        await page.click("#st_menu_13");
    };
}