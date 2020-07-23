import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage, IdentificationType } from "../SharedPages/BasePage";
import * as chai from "chai";
import { count } from "console";

const expect = chai.expect;

const Locators = {
  checkoutTable: {
    type: IdentificationType[IdentificationType.ClassName],
    value: "table",
  },

  tableHeader: {
    type: IdentificationType[IdentificationType.Css],
    value: "tr th"
}

};

export class CheckoutPage extends BasePage {
  checkoutTable = this.ElementLocator(Locators.checkoutTable);
  tableHeader = this.ElementLocatorAll(Locators.tableHeader);

  verifyIfTableDisplayed() {
    expect(this.checkoutTable.isDisplayed()).to.eventually.equal(true);
  }

  verifyTableHeader(expectedHeaderNames: String[]) {
    this.tableHeader.getText().then((headerNames) => {
      expect(headerNames).to.have.members(expectedHeaderNames)
    });
  }

  verifyFirstTableRow() {
    
    this.verifyRowCount(this.checkoutTable, 4);

    this.checkoutTable.all(by.css("tbody tr td")).get(1).getText().then((rows) => {
        console.log(rows);
    });
  }

  private verifyRowCount(tableElem, extectedRowCount: number) {
    
    // let totalRoCount = 
    tableElem.all(by.css("tbody tr")).count().then((count: number) => {
        expect(count).to.equal(extectedRowCount);
    });
  }

verifyRowFound(tableElem, extectedValues: String[]) {
    tableElem.all(by.css("tbody tr")).each((row) => {
        let expectedIndex = 0;
        row.all(by.css("td")).each((col) => {
            
            col.getText().then((colText) => {
                
                console.log("Col Value : " + colText);
                console.log("Expected Value : " + extectedValues[0])
                
            });
            expectedIndex++;
        });
    });

  }

}
