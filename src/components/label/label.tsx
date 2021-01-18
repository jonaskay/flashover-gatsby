import React from "react"

import LabelIcon, { LabelIconProps } from "./label-icon"
import LabelText, { LabelTextProps } from "./label-text"

type LabelProps = {
  children?: React.ReactNode
  text?: string
}

type LabelComponent = React.FC<LabelProps> & {
  Icon: React.FC<LabelIconProps>
  Text: React.FC<LabelTextProps>
}

const Label: LabelComponent = ({ children, text }) => (
  <div className="text-sm text-indigo-400 font-sans tracking-wider uppercase">
    {children && children}
    {text && <LabelText>{text}</LabelText>}
  </div>
)

Label.Icon = LabelIcon
Label.Text = LabelText

export default Label
