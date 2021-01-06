import React from "react"

import MetaIcon, { MetaIconProps } from "./meta-icon"
import MetaText, { MetaTextProps } from "./meta-text"

type MetaProps = {
  children?: React.ReactNode
  text?: string
}

type MetaComponent = React.FC<MetaProps> & {
  Icon: React.FC<MetaIconProps>
  Text: React.FC<MetaTextProps>
}

const Meta: MetaComponent = ({ children, text }) => (
  <div className="text-sm text-indigo-400 font-sans tracking-wider uppercase">
    {children && children}
    {text && <MetaText>{text}</MetaText>}
  </div>
)

Meta.Icon = MetaIcon
Meta.Text = MetaText

export default Meta
