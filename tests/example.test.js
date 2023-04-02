import HomePage from "../pages/HomePage";
import TopBar from "../pages/components/TopBar";
import CreateAccountPage from "../pages/CreateAccountPage";
import LoginPage from "../pages/LoginPage";


describe("Example", () => {
    let create_account;
    let homePage;
    let loginPage;
    let topBar;

    beforeAll(async () => {
        jest.setTimeout(20000);
        jest.useRealTimers();
        create_account =new CreateAccountPage();
        homePage = new HomePage();
        loginPage = new LoginPage();
        topBar = new TopBar();
    });
  
    it("Homepage should work", async () => {
        await homePage.visit("https://www.ellemental.ro/");
    }, 4000);

    it("Navbar should be displayed", async () => {
        await homePage.isNavbarDisplayed();
        await topBar.isTopBarDisplayed();
    });

    it("Try to login with incorect credentials", async () => {
        await topBar.clickSignInBtn();
        // await loginPage.visit();
        await loginPage.isLoginForm();
        await loginPage.login("test@gmail.com", "password");
        
    }, 6000);

    it("Create user account", async () => {
        await create_account.visit();
        await create_account.isCustumerFormDisplayed();
        await create_account.createAccount(
            "test", 
            "lasttest", 
            "myemail@gmail.com", 
            "mypassword"
            );
    },8000)


});