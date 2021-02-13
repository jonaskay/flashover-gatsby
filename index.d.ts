type TableOfContentsItemHeading = {
  title: string
  url: string
}

type TableOfContentsItem = TableOfContentsItemHeading & {
  items?: TableOfContentsItemHeading[]
}

type TableOfContentsData = { items: TableOfContentsItem[] }
