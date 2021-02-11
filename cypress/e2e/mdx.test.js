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

    it("renders headings with links", () => {
      cy.get("h2")
        .contains("What makes a great negotiator?")
        .within(() => {
          cy.get("a").should(
            "have.attr",
            "href",
            "#what-makes-a-great-negotiator"
          )
        })
    })
  })

  context(
    "when path is /posts/what-software-developers-can-learn-from-range",
    () => {
      beforeEach(() => {
        cy.visit("/posts/what-software-developers-can-learn-from-range")
      })

      it("has meta title", () => {
        cy.title().should(
          "equal",
          "What Software Developers Can Learn from Range | Flashover"
        )
      })

      it("renders mdx body", () => {
        cy.get("article").should(
          "contain",
          "David Epstein's Range is the antithesis of the 10,000 hour rule."
        )
      })

      it("renders headings with links", () => {
        it("renders headings with links", () => {
          cy.get("h2")
            .contains(
              '"Frustration is not a sign you are not learning, but ease is"'
            )
            .within(() => {
              cy.get("a").should(
                "have.attr",
                "href",
                "#frustration-is-not-a-sign-you-are-not-learning-but-ease-is"
              )
            })
        })
      })
    }
  )
})
