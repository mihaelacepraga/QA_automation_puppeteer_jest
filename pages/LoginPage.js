import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
     async visit() {
        await page.goto("https://www.ellemental.ro/autentificare?back=my-account")
     };

     async isLoginForm() {
        let visible = true;
        await page.waitForSelector("#login-form", { visible: true, timeout: 3000 }).catch(() => {
         visible = false;
       });
        return visible;
     };
     
     async login(user, password) {
        await page.waitForSelector("#login-form");
        await page.waitForSelector('input[class="form-control"]');
        await page.type('input[class="form-control"]', user);
        await page.waitForSelector('input[name="password"]');
        await page.type('input[name="password"]', password);
        await page.click("#SubmitLogin");
        await page.waitForSelector('#login-form > div > div > div.help-block.alert.alert-danger > ul > li');
     };
     
     async getErrorMessage() {
      return page.$eval("#login-form > div > div > div.help-block.alert.alert-danger > ul > li", element => element.textContent);
  }
}