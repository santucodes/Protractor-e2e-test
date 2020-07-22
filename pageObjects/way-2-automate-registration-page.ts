import { ElementFinder, element, by, ElementArrayFinder, browser, protractor } from "protractor";
import { BasePage, IdentificationType } from "./SharedPages/BasePage";
import * as chai from "chai";

const expect = chai.expect;

const Locators = {
  username: {
    type: IdentificationType[IdentificationType.Id],
    value: "username",
  },
  password: {
    type: IdentificationType[IdentificationType.Css],
    value: "input#password",
  },
  usernameDescription: {
    type: IdentificationType[IdentificationType.Css],
    value: "input[id*='_input_username_0']",
  },
  loginButton: {
    type: IdentificationType[IdentificationType.Xpath],
    value:
      "//button[contains(@class, 'btn') and contains(@class, 'btn-danger')]",
  },
  authError: {
    type: IdentificationType[IdentificationType.Css],
    value:
      "div[ng-if='Auth.error']",
  }
};

export class WayToRegistrationPage extends BasePage {
  username = this.ElementLocator(Locators.username);
  password = this.ElementLocator(Locators.password);
  usernameDescription = this.ElementLocator(Locators.usernameDescription);
  loginButton = this.ElementLocator(Locators.loginButton);
  authError = this.ElementLocator(Locators.authError);
  EC = protractor.ExpectedConditions;

  navigateToWayToRegistration(){
    
    browser.wait(this.EC.presenceOf(this.username), 10000);
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
  }

  verifyInvalidRegistrationSubmit(
    username: string = "Invalid Username",
    password: string = "NotAPassword1234***",
    usernameDescription: string = "Invalid Descriptions Sooo Wrongg!!!"
  ) {
    this.username.sendKeys(username);
    this.password.sendKeys(password);
    browser.wait(this.EC.presenceOf(this.usernameDescription), 10000);
    this.usernameDescription.sendKeys(usernameDescription);
    this.loginButton.click();
    browser.wait(this.EC.presenceOf(this.authError), 10000);
    expect(this.authError.getText()).to.eventually.equal("Username or password is incorrect");
    
  }
}
