import { CheckoutPage } from "../pageObjects/CheckOutPage";
import { NavigationPage } from "../pageObjects/SharedPages/NavigationPage";
import { browser } from "protractor";

describe("Verify Checkout screen", () => {
  let checkoutPage: CheckoutPage = new CheckoutPage();
  let navigationPage: NavigationPage = new NavigationPage();

  beforeEach(() => {
    browser.get('https://rahulshettyacademy.com/angularpractice/shop');
    navigationPage.navigateToCheckoutPage(2);
  });

  xit("Verify Checkout Table", () => {
    // checkoutPage.verifyIfTableDisplayed();
    // checkoutPage.verifyTableHeader([ 'Product', 'Quantity', 'Price', 'Total', ' ' ]);
    // checkoutPage.verifyFirstTableRow();
    checkoutPage.verifyRowFound(checkoutPage.checkoutTable, ["test1", "test2", "test3", "test4", "test5", "test6"]);
  });
  
})
