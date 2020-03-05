// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.ts
import "./commands";
// import 'cypress-failed-log'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.log("Test Started");
});

afterEach(() => {
  cy.log("Test Completed");
  cy.verifyAndResetAllFakeServers();
});

before(() => {
  cy.log("Test Suite Started");
  cy.startFakeServer({
    consumer: "test-app",
    provider: "reqres",
    cors: true,
    port: 5006
  });
});

after(() => {
  cy.log("Test Suite Completed");
  cy.writePactsAndStopAllFakeServers();
});
