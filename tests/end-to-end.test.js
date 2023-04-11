import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";

import { user, password, firstname, lastname, email, pass } from "../config";


describe("End-to-end test", () => {
    let create_account;
    let homePage;
    let loginPage;
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(60000);
        jest.useRealTimers();
        homePage = new HomePage();
        loginPage = new LoginPage();
        topBar = new TopBar();
        create_account =new CreateAccountPage();
    });
//   VISIT HOME PAGE
    it("Homepage should work", async () => {
        await homePage.visit();
        const titleSite = await homePage.getTitle()
        expect(titleSite).toBe("Ellemental care with clean elements");
    }, 5000);

// NAVBAR SHOULD BE DISPLAYED 
    it("Navbar should be displayed", async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
        const textLogin = await homePage.getHeaderContent();
        expect(textLogin).toBe("Logare");
    },6000);

// vERIFY IF ERROR MESAGE IS AS EXPECTED 
    it("Try to login with incorect credentials", async () => {
        await topBar.clickSignInBtn();
        const isVisibleLoginForm = await loginPage.isLoginForm();
        expect(isVisibleLoginForm).toBeTruthy();
        await loginPage.login(user, password);
        const errorText = await loginPage.getErrorMessage()
        expect(errorText).toBe("Logare eșuată");  
        
    },5000);

// CREATE USER ACCOUNT WITH THE SAME EMAIL ADDRESSS
    it("Create user account with the same email address", async () => {
        await create_account.visit();
        await create_account.isCustumerFormDisplayed();
        await create_account.createAccount(firstname, lastname, email, pass);
        // const messageConfirm = await create_account.getConfirmMessage();
        expect(await create_account.getConfirmMessage()).toContain("Adresa de e-mail greșită")  
    })


},5000);