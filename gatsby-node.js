const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
     query MyQuery {
      allDatoCmsFormationCollective(filter: {horsLigneEnLigne: {eq: true}}) {
        edges {
              node{slug}
            }
          }    
  }


    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve("src/templates/formation-details.js")
  result.data.allDatoCmsFormationCollective.edges.forEach(({ node }) => {
    createPage({
        path: `formations/${node.slug}`,
              component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
url:node.slug      },
    })
  })
}