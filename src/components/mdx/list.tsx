import React from "react"

const ListItem: React.FC<any> = props => (
  <li className="my-2 text-lg" {...props} />
)

const UnorderedList: React.FC<any> = props => (
  <ul className="list-disc ml-8" {...props} />
)

const OrderedList: React.FC<any> = props => (
  <ol className="list-decimal ml-8" {...props} />
)

const List = {
  Item: ListItem,
  Unordered: UnorderedList,
  Ordered: OrderedList,
}

export default List
