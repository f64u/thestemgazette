const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/posts-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { typeKey: { eq: "posts" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          fields {
            slug
          }

          frontmatter {
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading posts`, resuls.errors)
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          slug: post.fields.slug,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.typeKey === `posts`
  ) {
    const value = createFilePath({ node, getNode, basePath: `content/posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/posts${value}`,
    })
  }
}
