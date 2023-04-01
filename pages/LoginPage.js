import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
     async visit() {
        await page.goto("https://www.ellemental.ro/autentificare?back=my-account")
     };

     async isLoginForm() {
        await page.waitForSelector("#login-form");
        await page.waitForSelector('input[class="form-control"]');
        await page.waitForSelector('input[name="password"]');

     };

     async login(user, password) {
        await page.waitForSelector("#login-form");
        await page.type('input[class="form-control"]', user);
        await page.waitForSelector('input[name="password"]');
        await page.type('input[name="password"]', password);
        await page.click("#SubmitLogin");
      //   await page.waitForSelector('#page_banner_container_1 > h6');
     }
}