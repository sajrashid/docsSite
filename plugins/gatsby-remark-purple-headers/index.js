const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = async  ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "code", node => {
  //  const [language, params] = (node.lang || '').split(':');
   // const actions = qs.parse(params);
   if (depth !== 1) return
   // Grab the innerText of the heading node
   let text = toString(node)
   const html = `
       <h1 style="color: rebeccapurple">
         ${text}
       </h1>
     `
   node.type = "html"
   node.children = undefined
   node.value = html
  })
  return markdownAST
}