import { Config } from "protractor";

export let config: Config = {
  framework: "jasmine",
  multiCapabilities: [
    {
      browserName: "chrome",
    }
  ],
  onPrepare: function () {
    // Load chai assertions
    const chai = require("chai");
    const chaiAsPromised = require("chai-as-promised");

    // Load chai-as-promised support
    chai.use(chaiAsPromised);

    // Initialise should API (attaches as a property on Object)
    chai.should();
  },
  specs: ["./testSuites/*test.js"],
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,
};
