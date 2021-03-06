Cypress.Commands.add("ensureOnCheckoutStep1Page", () => {
  cy.url().should("eq", Cypress.config().baseUrl + "/checkout-step-one.html");

  // case insensitive match
  cy.get(".title").should(($el) => {
    let text = $el.text().toLowerCase();
    expect(text).to.match(/CHECKOUT: YOUR INFORMATION/i);
  });
});

Cypress.Commands.add(
  "fillInCustomerInfo",
  (first_name, last_name, postal_code) => {
    // The if condition allows you to pass in empty string, and test for error later
    if (first_name) {
      cy.get('input[data-test="firstName"]')
        .type(first_name)
        .should("have.value", first_name);
    }
    if (last_name) {
      cy.get('input[data-test="lastName"]')
        .type(last_name)
        .should("have.value", last_name);
    }
    if (postal_code) {
      cy.get('input[data-test="postalCode"]')
        .type(postal_code)
        .should("have.value", postal_code);
    }
  }
);

Cypress.Commands.add("validateCustomerSeesErrorOnCheckoutStep1", () => {
  cy.get('[data-test="error"]').should("exist");
});

Cypress.Commands.add("clickOnContinueFromCheckoutStep1", () => {
  cy.get('input[type="submit"]').click();
});

Cypress.Commands.add("clickOnCancel1FromCheckoutStep1", () => {
  cy.get("#cancel").click();
});
