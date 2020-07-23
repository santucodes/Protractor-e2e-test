import { CheckoutPage } from "../../pageObjects/protocommerce/CheckOutPage";
import { NavigationPage } from "../../pageObjects/SharedPages/NavigationPage";
import { browser } from "protractor";
import { MultiformAlertPage } from "../../pageObjects/way-2-automate/multiform-alert-page";

describe("Verify Checkout screen", () => {
  let RegistrationPage: MultiformAlertPage = new MultiformAlertPage();

  beforeEach(() => {
    RegistrationPage.navigateToMultiformPaymentPage();
  });

  xit("Verify Checkout Table", () => {
    RegistrationPage.submitPayment();
  });
  
})
