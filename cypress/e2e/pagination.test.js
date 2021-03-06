/// <reference types="Cypress" />

describe("Pagination tests", () => {
  beforeEach(() => {
    cy.visit("/archive")
  })

  it("paginates archived posts", () => {
    cy.get("main")
      .findByLabelText("page navigation")
      .within(() => {
        cy.get("a").findByText("1").should("have.class", "text-white")
        cy.get("a").findByText("2").should("not.have.class", "text-white")
        cy.get("a").findByTitle("Next").parent().click()
      })

    cy.contains("Most Read Posts of 2019")

    cy.get("main")
      .findByLabelText("page navigation")
      .within(() => {
        cy.get("a").findByText("1").should("not.have.class", "text-white")
        cy.get("a").findByText("2").should("have.class", "text-white")
        cy.get("a").findByTitle("Previous").parent().click()
      })

    cy.contains("100th Post")

    cy.get("main")
      .findByLabelText("page navigation")
      .within(() => {
        cy.get("a").findByText("1").should("have.class", "text-white")
        cy.get("a").findByText("2").should("not.have.class", "text-white")
      })
  })
})
