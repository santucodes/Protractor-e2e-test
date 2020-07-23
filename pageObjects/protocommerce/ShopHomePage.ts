import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage, IdentificationType } from "../SharedPages/BasePage";
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.expect;

const Locators = {
  shopName: {
    type: IdentificationType[IdentificationType.Css],
    value: "h1.my-4",
  },

  categoryList: {
    type: IdentificationType[IdentificationType.ClassName],
    value: "list-group-item",
  },

  cardListAddButtons: {
    type: IdentificationType[IdentificationType.ButtonText],
    value: "Add"
  },

  checkoutButton: {
    type: IdentificationType[IdentificationType.Xpath],
    value: "//a[contains(text(),'Checkout')]"
  }
};

export class ShopHomePage extends BasePage {
  
  shopName = this.ElementLocator(Locators.shopName);
  categoryList = this.ElementLocatorAll(Locators.categoryList);
  cardListAddButtons = this.ElementLocatorAll(Locators.cardListAddButtons);
  checkoutButton = this.ElementLocator(Locators.checkoutButton);

  verifyHomePageName() {
    this.shopName.getText().then(shopName => {
        expect(shopName).to.equal("Shop Name");
    });
    
  }

  isCategoryListExists() {
    expect(this.categoryList.isDisplayed()).to.true;
  }

  verifyAllCategories(categoryNames: String[]) {
    this.categoryList.count().then(count => {
        expect(count).to.equal(3);
    });
    this.getElementArrayTexts(this.categoryList, categoryNames);
  }

  private getElementArrayTexts(elemArray, expectedValues) {
  
    elemArray.getText().then(actualNames => {
        expect(actualNames).to.have.members(expectedValues)});
  }

  
}
