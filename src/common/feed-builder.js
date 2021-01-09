const AUTHOR = "author"
const CHILD_MDX = "childMdx"
const DATE = "date"
const DESCRIPTION = "description"
const FIELDS = "fields"
const FRONTMATTER = "frontmatter"
const HTML = "html"
const SITE_METADATA = "siteMetadata"
const SLUG = "slug"
const TITLE = "title"
const URL = "url"

const validate = (data, keys, base) => {
  if (data === undefined) {
    throw `${base} is undefined`
  }

  keys.forEach(key => {
    if (data[key] === undefined) {
      throw `${base}.${key} is undefined`
    }
  })
}

module.exports = {
  feedOptions: siteData => {
    const { siteMetadata } = siteData
    validate(siteMetadata, [TITLE, DESCRIPTION, URL, AUTHOR], SITE_METADATA)

    return {
      title: siteMetadata[TITLE],
      description: siteMetadata[DESCRIPTION],
      site_url: siteMetadata[URL],
      author: siteMetadata[AUTHOR],
    }
  },
  itemOptions: (siteData, itemData) => {
    const { siteMetadata } = siteData
    validate(siteMetadata, [URL], SITE_METADATA)

    const { childMdx } = itemData
    validate(childMdx, [FRONTMATTER, FIELDS, HTML], CHILD_MDX)

    const { fields, frontmatter } = childMdx
    validate(fields, [SLUG], `${CHILD_MDX}.${FIELDS}`)
    validate(
      frontmatter,
      [TITLE, DESCRIPTION, DATE],
      `${CHILD_MDX}.${FRONTMATTER}`
    )

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      url: siteMetadata[URL] + fields.slug,
      guid: siteMetadata[URL] + fields.slug,
      date: frontmatter.date,
      custom_elements: [{ "content:encoded": childMdx.html }],
    }
  },
}
