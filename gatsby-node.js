const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const productPost = require.resolve(`./src/templates/productTemplate.jsx`)
  const portfolioPost = require.resolve(`./src/templates/portfolioTemplate.jsx`)
  const result = await graphql(`
    {
      product: allMarkdownRemark(
        sort: { order: DESC, fields: id }
        filter: { fileAbsolutePath: { regex: "/products/" } }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      portfolio: allMarkdownRemark(
        sort: { order: DESC, fields: id }
        filter: { fileAbsolutePath: { regex: "/portfolio/" } }
        limit: 1000
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const products = result.data.product.nodes
  const portfolios = result.data.portfolio.nodes

  portfolios.forEach((item, index) => {
    const previous =
      index === portfolios.length - 1 ? null : portfolios[index + 1].node
    const next = index === 0 ? null : portfolios[index - 1].node

    createPage({
      path: item.frontmatter.slug,
      component: portfolioPost,
      context: {
        slug: item.frontmatter.slug,
        previous,
        next,
      },
    })
  })

  products.forEach((item, index) => {
    const previous =
      index === products.length - 1 ? null : products[index + 1].node
    const next = index === 0 ? null : products[index - 1].node

    createPage({
      path: item.frontmatter.slug,
      component: productPost,
      context: {
        slug: item.frontmatter.slug,
        previous,
        next,
      },
    })
  })

  const portfolioPerPage = 9
  const numPagesPort = Math.ceil(portfolios.length / portfolioPerPage)

  Array.from({ length: numPagesPort }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
      component: path.resolve("./src/templates/portfolio.jsx"),
      context: {
        limit: portfolioPerPage,
        skip: i * portfolioPerPage,
        numPages: numPagesPort,
        currentPage: i + 1,
      },
    })
  })

  const productPerPage = 9
  const numPages = Math.ceil(products.length / productPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/product` : `/product/${i + 1}`,
      component: path.resolve("./src/templates/product.jsx"),
      context: {
        limit: productPerPage,
        skip: i * productPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
