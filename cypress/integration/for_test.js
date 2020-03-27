describe("testing our valunteer form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/pizza");
  });
  it("add test to inputs and submit form", function() {
    cy.get('input[name="name"]')
      .type("type full name")
      .should("have.value", "type full name");

    cy.get("#size")
      .select("small")
      .should("have.value", "small");

    //  cy.get("input[name='email']")
    //    .type("email@email.com")
    //    .should("have.value", "email@email.com");

    cy.get('[type="checkbox"]').check();
    cy.get('[type="radio"]').check();

    cy.get('input[name="instructions"]')
      .type("enter instructions here")
      .should("have.value", "enter instructions here");

    cy.get('input[name="count"]')
      .type("1")
      .should("have.value", "1");

    //  cy.get(".submit").click();
  });

  //   cy.get("textarea")
  //     .type("help people")
  //     .should("have.value", "help people");

  //   cy.get("#positions")
  //     .select("Tabling")
  //     .should("have.value", "Tabling");

  //   cy.get("[type='checkbox']").check();

  //   cy.get("button").click();
});
