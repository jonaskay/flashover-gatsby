const { default: Provider } = require("./src/context/provider")

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({ className: "bg-gray-100 text-gray-900 font-serif" })
}

exports.wrapRootElement = Provider
