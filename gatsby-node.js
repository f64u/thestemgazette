const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve(`./src/templates/posts-template.js`);

	const posts_results = await graphql(`
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
            author
          }
        }
      }
    }
  `);

	if (posts_results.errors) {
		reporter.panicOnBuild(`There was an error loading posts`, posts_results.errors);
		return;
	}

	const people_results = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { typeKey: { eq: "people" } } }
      ) {
        nodes {
          frontmatter {
            full_name
            email
            avatar {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  `);

	if (people_results.errors) {
		reporter.panicOnBuild(`There was an error loading posts`, people_results.errors);
		return;
	}

	const people = {};
	people_results.data.allMarkdownRemark.nodes.forEach((person, _) => {
		people[person.frontmatter.email] = {
			name: person.frontmatter.full_name,
			email: person.frontmatter.email,
			avatar: person.frontmatter.avatar
		};
	});

	const posts = posts_results.data.allMarkdownRemark.nodes;

	if (posts.length > 0) {
		posts.forEach((post, _) => {
			createPage({
				path: post.fields.slug,
				component: postTemplate,
				context: {
					slug: post.fields.slug,
					author: people[post.frontmatter.author]
				}
			});
		});
	}
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark` && node.frontmatter.typeKey === `posts`) {
		const value = createFilePath({ node, getNode, basePath: `content/posts` });
		createNodeField({
			node,
			name: `slug`,
			value: `/posts${value}`
		});
	}
};
