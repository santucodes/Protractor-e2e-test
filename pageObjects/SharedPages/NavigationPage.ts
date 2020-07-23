import { BasePage } from "./BasePage";
import { browser, element, by } from "protractor";
import { ShopHomePage } from "../protocommerce/ShopHomePage";
import { CheckoutPage } from "../protocommerce/CheckOutPage";

export class NavigationPage extends BasePage {
  private static shopHomePage = new ShopHomePage();
    private static checkoutPage = new CheckoutPage();

  navigateToCheckoutPage(countOfItem: number = 3) {
    // browser.get("https://rahulshettyacademy.com/angularpractice/shop");

    // for (let i = 1; i <= countOfItem; i++) {
    //   NavigationPage.shopHomePage.cardListAddButtons.get(i).click().then(() => browser.driver.sleep(3000));
    // }

    // NavigationPage.shopHomePage.checkoutButton.click().then(() => browser.driver.sleep(2000));
    // NavigationPage.checkoutPage.checkoutTable.isDisplayed();

    // browser.get("https://rahulshettyacademy.com/angularpractice/shop");
    element(by.buttonText("Add")).click();
    element.all(by.buttonText("Add")).get(1).click();
    element(by.xpath("//a[contains(text(),'Checkout')]")).click().then(() => browser.driver.sleep(3000));
    
  }
}
