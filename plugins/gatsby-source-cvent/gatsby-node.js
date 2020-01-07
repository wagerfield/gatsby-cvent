const request = require("easy-soap-request")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  options
) => {
  // const { createNode } = actions
  console.log(options)
  return request({})
}
