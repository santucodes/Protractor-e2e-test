
import { browser } from "protractor";
import { WayToRegistrationPage } from "../../pageObjects/way-2-automate/way-2-automate-registration-page";

describe("Verify Checkout screen", () => {
  let registrationPage: WayToRegistrationPage = new WayToRegistrationPage();

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login").then(() => browser.sleep(3000));
    // registrationPage.navigateToWayToRegistration();
  });

  xit("Verify Checkout Table", async () => {
    await registrationPage.verifyInvalidRegistrationSubmit();
  });
  
})
