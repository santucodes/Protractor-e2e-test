import {browser, element, by} from 'protractor';
import { ShopHomePage } from '../pageObjects/ShopHomePage';

describe('protractor with typescript typings', () => {
  let shopHomePage = new ShopHomePage();

    beforeEach(() => {
      browser.get('https://rahulshettyacademy.com/angularpractice/shop');
    });

    xit("UI Verification of Shope Home Page", () => {
      shopHomePage.verifyHomePageName();
    } );

    xit("Verify Category List", () => {
      shopHomePage.verifyAllCategories(["Category 1", "Category 2", "Category 3"]);
    } );
  
  });