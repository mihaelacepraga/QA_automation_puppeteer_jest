export default class BasePage {

    async wait(milliseconds) {
        return new Promise(r => setTimeout(r, milliseconds));
    };

    async getTitle() {
        return page.title();
    };

    async getUrl() {
        return page.url();
    };
  
};