/// <reference types="Cypress" />

describe("MDX tests", () => {
  context("when path is /posts/never-split-the-difference", () => {
    beforeEach(() => {
      cy.visit("/posts/never-split-the-difference")
    })

    it("has meta title", () => {
      cy.title().should(
        "equal",
        "How to negotiate and make deals with Never Split the Difference | Flashover"
      )
    })

    it("renders mdx body", () => {
      cy.get("article").should(
        "contain",
        "Never Split the Difference by Chris Voss (former FBI hostage negotiator) and Tahl Raz (journalist and author) is the book that promises to prepare you for any negotiation situation ranging from negotiating a salary to buying a car."
      )
    })
  })

  context("when path is /posts/100th-post", () => {
    beforeEach(() => {
      cy.visit("/posts/100th-post")
    })

    it("has meta title", () => {
      cy.title().should("equal", "100th Post | Flashover")
    })

    it("renders mdx body", () => {
      cy.get("article").should(
        "contain",
        "There is a famous story taken from the book Art & Fear by David Bayles and Ted Orland about a ceramics teacher who divides her class into two groups: the quantity group and the quality group."
      )
    })
  })
})
