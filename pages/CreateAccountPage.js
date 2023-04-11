import BasePage from "./BasePage";

export default class CreateAccountPage extends BasePage {
    async visit() {
        await page.click('i[class="fto-user icon_btn"]');
    };

    async isCustumerFormDisplayed() {
        await page.waitForSelector('input[name="firstname"]');
        await page.waitForSelector('input[name="lastname"]');
        await page.waitForSelector('#customer-form > div > div > div > div:nth-child(3) > div > div > input');
        await page.waitForSelector('input[type="password"]');
    };

    async createAccount(firstname, lastname, email, pass) {
        await page.type('input[name="firstname"]', firstname);
        await page.type('input[name="lastname"]', lastname);
        await page.type('#customer-form > div > div > div > div:nth-child(3) > div > div > input', email);
        await page.type('input[type="password"]', pass);
        await page.waitForSelector('input[name="customer_privacy"]');
        await page.click('input[name="customer_privacy"]')
        await page.waitForSelector('button[data-link-action="save-customer"]');
        await page.click('button[data-link-action="save-customer"]');
        const message_Confirm = page.url();
        expect(message_Confirm).toBe('https://www.ellemental.ro/autentificare?create_account=1');
    };
    
    async getConfirmMessage() {
        return page.$eval('ul[class="m-b-0"]', element => element.textContent);
    }

}