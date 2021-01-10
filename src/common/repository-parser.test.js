const RepositoryParser = require("./repository-parser")

const invalidRepositories = [
  "",
  "foo",
  "www.example.com",
  "ftp://example.com",
  "foo+http://example.com/bar.baz",
]

describe("url", () => {
  it("returns the repository url when repository is valid", () => {
    expect(new RepositoryParser("https://example.com").url()).toBe(
      "https://example.com"
    )

    expect(new RepositoryParser("https://example.com/foo").url()).toBe(
      "https://example.com/foo"
    )

    expect(new RepositoryParser("git+https://example.com/foo.git").url()).toBe(
      "https://example.com/foo"
    )

    expect(
      new RepositoryParser("git+http://www.example.com/foo/bar/baz.git").url()
    ).toBe("http://www.example.com/foo/bar/baz")
  })

  it("throws an error when filename is invalid", () => {
    invalidRepositories.forEach(repository => {
      expect(() => new RepositoryParser(repository).url()).toThrow(
        "not a valid repository"
      )
    })
  })
})
