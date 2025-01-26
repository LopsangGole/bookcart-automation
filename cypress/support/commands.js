// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('register', (userData) => {
    cy.get('div.mat-mdc-text-field-wrapper').eq(0).type(userData.firstName);
    cy.get('input[placeholder="Last Name"]').type(userData.lastName);
    cy.get('input[placeholder="User name"]').type(userData.username);
    cy.get('input[placeholder="Password"]').type(userData.password);
    cy.get('input[placeholder="Confirm Password"]').type(userData.confirmPassword);
    cy.get(`mat-radio-button[value="${userData.gender}"]`).click();
    cy.get('mat-card-actions[align="end"] span').eq(1).click({force: true});
  });