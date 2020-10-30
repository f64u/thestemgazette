/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'The STEM Gazette',
		author: {
			name: 'STEM Egypt High School for Boys',
			summary: 'One of the best schools from all over Egypt.'
		},
		description: `All the news happening within the STEM October campus.`,
		url: 'https://gazette.stemegypt.net',
		image: `${__dirname}/static/logo.svg`,
		keywords: [
			'The STEM Gazette',
			'STEM October',
			'STEM Egypt High School for Boys',
			'STEM High School for Boys',
			'STEM Egypt'
		]
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'posts',
				path: `${__dirname}/content/posts`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'people',
				path: `${__dirname}/content/people`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'roles',
				path: `${__dirname}/content/roles`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 630,
							linkImagesToOriginal: false
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},

		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-fontawesome-css`
	]
};
