import { ElementFinder, element, by, ElementArrayFinder, browser, protractor } from "protractor";

import * as chai from "chai";
import { BasePage, IdentificationType } from "../SharedPages/BasePage";

const expect = chai.expect;

const Locators = {
  submitButton: {
    type: IdentificationType[IdentificationType.ButtonText],
    value: "Submit"
  }
};

export class MultiformAlertPage extends BasePage {

  submitButton = this.ElementLocator(Locators.submitButton);

  EC = protractor.ExpectedConditions;

  navigateToMultiformPaymentPage(){
    browser.get("http://www.way2automation.com/angularjs-protractor/multiform/#/form/payment");
  }

  submitPayment() {
    browser.wait(this.EC.presenceOf(this.submitButton), 10000);
    this.submitButton.click();
    let myAlert = browser.switchTo().alert();
  
    browser.switchTo().alert().getText().then((alertMessage) => {
      console.log(alertMessage);
    });
    myAlert.accept();
  }
}
