const feedBuilder = require("./feed-builder")

describe("feedOptions", () => {
  it("returns the feed options when data is valid", () => {
    const data = {
      siteMetadata: {
        title: "foo",
        description: "bar",
        url: "baz",
        author: "qux",
      },
    }

    expect(feedBuilder.feedOptions(data)).toEqual({
      title: "foo",
      description: "bar",
      site_url: "baz",
      author: "qux",
    })
  })

  it("throws an error when siteMetadata is undefined", () => {
    const data = {
      siteMetadata: undefined,
    }

    expect(() => feedBuilder.feedOptions(data)).toThrow(
      "siteMetadata is undefined"
    )
  })

  it("throws an error when title is undefined", () => {
    const data = {
      siteMetadata: {
        title: undefined,
        description: "bar",
        url: "baz",
        author: "qux",
      },
    }

    expect(() => feedBuilder.feedOptions(data)).toThrow(
      "siteMetadata.title is undefined"
    )
  })

  it("throws an error when description is undefined", () => {
    const data = {
      siteMetadata: {
        title: "foo",
        description: undefined,
        url: "baz",
        author: "qux",
      },
    }

    expect(() => feedBuilder.feedOptions(data)).toThrow(
      "siteMetadata.description is undefined"
    )
  })

  it("throws an error when url is undefined", () => {
    const data = {
      siteMetadata: {
        title: "foo",
        description: "bar",
        url: undefined,
        author: "qux",
      },
    }

    expect(() => feedBuilder.feedOptions(data)).toThrow(
      "siteMetadata.url is undefined"
    )
  })

  it("throws an error when author is undefined", () => {
    const data = {
      siteMetadata: {
        title: "foo",
        description: "bar",
        url: "baz",
        author: undefined,
      },
    }

    expect(() => feedBuilder.feedOptions(data)).toThrow(
      "siteMetadata.author is undefined"
    )
  })
})

describe("itemOptions", () => {
  const validSiteData = {
    siteMetadata: {
      url: "foo",
    },
  }

  const validFrontmatterData = {
    title: "baz",
    description: "qux",
    date: "quux",
  }

  const validMdxData = {
    fields: {
      slug: "bar",
    },
    frontmatter: validFrontmatterData,
    html: "quuz",
  }

  const validItemData = {
    childMdx: validMdxData,
  }

  it("returns the item options when site data and item data are valid", () => {
    expect(feedBuilder.itemOptions(validSiteData, validItemData)).toEqual({
      title: "baz",
      description: "qux",
      url: "foobar",
      guid: "foobar",
      date: "quux",
      custom_elements: [{ "content:encoded": "quuz" }],
    })
  })

  it("throws an error when site data is invalid", () => {
    const withoutSiteMetadata = { siteMetadata: undefined }
    const withoutUrl = { siteMetadata: { url: undefined } }

    expect(() =>
      feedBuilder.itemOptions(withoutSiteMetadata, validItemData)
    ).toThrow("siteMetadata is undefined")

    expect(() => feedBuilder.itemOptions(withoutUrl, validItemData)).toThrow(
      "siteMetadata.url is undefined"
    )
  })

  it("throws an error when item data is invalid", () => {
    const withoutChildMdx = { childMdx: undefined }
    const withoutFields = {
      childMdx: { ...validMdxData, fields: undefined },
    }
    const withoutSlug = {
      childMdx: { ...validMdxData, fields: { slug: undefined } },
    }
    const withoutFrontmatter = {
      childMdx: { ...validMdxData, frontmatter: undefined },
    }
    const withoutTitle = {
      childMdx: {
        ...validMdxData,
        frontmatter: { ...validFrontmatterData, title: undefined },
      },
    }
    const withoutDescription = {
      childMdx: {
        ...validMdxData,
        frontmatter: { ...validFrontmatterData, description: undefined },
      },
    }
    const withoutDate = {
      childMdx: {
        ...validMdxData,
        frontmatter: { ...validFrontmatterData, date: undefined },
      },
    }
    const withoutHtml = {
      childMdx: {
        ...validMdxData,
        html: undefined,
      },
    }

    expect(() =>
      feedBuilder.itemOptions(validSiteData, withoutChildMdx)
    ).toThrow("childMdx is undefined")

    expect(() => feedBuilder.itemOptions(validSiteData, withoutFields)).toThrow(
      "childMdx.fields is undefined"
    )

    expect(() => feedBuilder.itemOptions(validSiteData, withoutSlug)).toThrow(
      "childMdx.fields.slug is undefined"
    )

    expect(() =>
      feedBuilder.itemOptions(validSiteData, withoutFrontmatter)
    ).toThrow("childMdx.frontmatter is undefined")

    expect(() => feedBuilder.itemOptions(validSiteData, withoutTitle)).toThrow(
      "childMdx.frontmatter.title is undefined"
    )

    expect(() =>
      feedBuilder.itemOptions(validSiteData, withoutDescription)
    ).toThrow("childMdx.frontmatter.description is undefined")

    expect(() => feedBuilder.itemOptions(validSiteData, withoutDate)).toThrow(
      "childMdx.frontmatter.date is undefined"
    )

    expect(() => feedBuilder.itemOptions(validSiteData, withoutHtml)).toThrow(
      "childMdx.html is undefined"
    )
  })
})
