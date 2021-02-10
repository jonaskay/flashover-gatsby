/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  it("has no detectable accessibility violations on index page", () => {
    cy.visit("/").get("main").injectAxe()
    cy.checkA11y()
  })

  it("has no detectable accessibility violations on search page", () => {
    cy.visit("/search").get("main").injectAxe()
    cy.checkA11y()
  })

  it("has no detectable accessibility violations on archive page", () => {
    cy.visit("/archive").get("main").injectAxe()
    cy.checkA11y()
  })

  it("has no detectable accessibility violations on post pages", () => {
    cy.visit("/posts/never-split-the-difference").get("main").injectAxe()
    cy.checkA11y()
  })

  it("has no detectable accessibility violations on archived post pages", () => {
    cy.visit("/posts/100th-post").get("main").injectAxe()
    cy.checkA11y()

    cy.visit("/posts/cone-of-uncertainty").get("main").injectAxe()
    cy.checkA11y()

    cy.visit("/posts/solving-click-uncertainty-with-important")
      .get("main")
      .injectAxe()
    cy.checkA11y()
  })
})
