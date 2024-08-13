import Page from "./e2e/page";
import { ChainablePromiseElement } from 'webdriverio';

class ClockMainPage extends Page {

    constructor(driver: WebdriverIO.Browser) {
        super(driver);
    }

    // Page locators

    private get citiesButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('//android.widget.ImageButton[@content-desc="Cities"]');
    }

    // Page functions

    async tapCitiesButton() {
        const citiesButtonElenemt = await this.citiesButton;
        await citiesButtonElenemt.click();
    }
    
}

export default ClockMainPage;