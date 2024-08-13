

export default class Page {
    protected driver: WebdriverIO.Browser;
    
    constructor(driver: WebdriverIO.Browser) {
        this.driver = driver;
    }
}