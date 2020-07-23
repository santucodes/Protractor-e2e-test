import {browser, element, by} from 'protractor';
import { ShopHomePage } from '../../pageObjects/protocommerce/ShopHomePage';

describe('protractor with typescript typings', () => {
  let shopHomePage = new ShopHomePage();

    beforeEach(() => {
      browser.get('https://rahulshettyacademy.com/angularpractice/shop');
    });

    it("UI Verification of Shope Home Page", () => {
      shopHomePage.verifyHomePageName();
    } );

    it("Verify Category List", () => {
      shopHomePage.verifyAllCategories(["Category 1", "Category 2", "Category 3"]);
    } );
  
  });