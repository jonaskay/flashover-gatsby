const MDX_SOURCES = [
  {
    name: "blog",
    paginated: false,
  },
  {
    name: "archive",
    paginated: true,
  },
]

const isSourceableMdxFile = (node, getNode) => {
  if (node.internal.type !== "Mdx") {
    return false
  }

  const file = getNode(node.parent)

  return MDX_SOURCES.map(({ name }) => name).includes(file.sourceInstanceName)
}

module.exports = {
  isSourceableMdxFile,
  MDX_SOURCES,
}
