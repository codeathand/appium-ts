import ClockMainPage from '../pageobjects/clock_main.page';

async function runTest(driver: WebdriverIO.Browser) {

    let clockMainPage = new ClockMainPage(driver); // Pass the driver instance

    await clockMainPage.tapCitiesButton();   


};
describe("LOANS007  My accounts/Cash Loan details (Trasactions, Full details) 31357", () => {

    before(async () => {

        console.log("BEFORE TEST");

    });

    it('', async () => {
        await runTest(driver);
    });


    after(async () => {
        console.log("AFTER TEST");
        await driver.execute('mobile: terminateApp', { appId: 'rs.yettelbank.app.stg' });
    });

});