import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";

import { user, password } from "../config";


describe("End-to-end test", () => {
    let create_account;
    let homePage;
    let loginPage;
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(60000);
        jest.useRealTimers();
        create_account =new CreateAccountPage();
        homePage = new HomePage();
        loginPage = new LoginPage();
        topBar = new TopBar();
    });
  
    it("Homepage should work", async () => {
        await homePage.visit("https://www.ellemental.ro/");
        const titleSite = await page.title();
        expect(titleSite).toBe("Ellemental care with clean elements");
    }, 7000);

    it("Navbar should be displayed", async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
        const textLogin = await page.$eval('span[class="header_icon_btn_text header_v_align_m"]', element => element.textContent);
        expect(textLogin).toBe("Logare");
    });

    it("Try to login with incorect credentials", async () => {
        await topBar.clickSignInBtn();
        // await loginPage.visit();
        await loginPage.isLoginForm();
        await loginPage.login(user, password);
        const errorText = await page.$eval("#login-form > div > div > div.help-block.alert.alert-danger > ul > li", element => element.textContent)
        expect(errorText).toBe("Logare eșuată");  
        
    });

    it("Create user account", async () => {
        await create_account.visit();
        await create_account.isCustumerFormDisplayed();
        await create_account.createAccount(
            "test", 
            "lasttest", 
            "myemail@gmail.com", 
            "mypassword");
        const messageConfirm = await page.$eval('ul[class="m-b-0"]', element => element.textContent);
        expect(messageConfirm).toContain("Adresa de e-mail greșită")
        
    })


});