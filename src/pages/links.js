import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

const Archive = ({ data }) => (
  <Layout>
    <section className="link-page">
    	{data.linksPage.items.map(link =>
    		<div className="instagram-link">
		    	<a href={link.url}><h2 className="instagram-link-title">{link.name}</h2></a>
		    </div>
    	)}
    </section>
  </Layout>
)

export default Archive

export const pageQuery = graphql`
  {
  linksPage: contentfulList(name: {eq: "Links Landing Page"}) {
    name
    items {
      ... on ContentfulExternalLink {
        name
        url
      }
    }
  }
}
`
